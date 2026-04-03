---
id: dev-client-networking
title: Hubs Client development Networking
description: The way that entity state is networked across clients and optionally persisted to the database.
---

## Intro

This document describes the way that entity state is networked across clients
and optionally [persisted to the database](#persistency).

Entity state includes things like what objects should be created by each client
in a room, where those objects are, and associated [component](./dev-client-gameplay.html)
data. [`WebRTC`](https://webrtc.org/) connections for streaming data (voice,
video, screenshare) are out of scope for this document: Those are handled
separately by [`dialog`](https://github.com/Hubs-Foundation/dialog) and the
`DialogAdapter`.

TODO: Add the link to our WebRTC document when it will be ready


### Target readers

This document is intended for users with some coding experience that know
[our basic gameplay code concept](./dev-client-gameplay.html) and want to write
the networking gameplay functionality of the Hubs client.


## Networking Overview


### Reticulum

[`Reticulum`](https://github.com/Hubs-Foundation/reticulum) is a hybrid
game-networking and web API server built on [Phoenix](#phoenix).
It manages a [mesh topology network](https://www.computerhope.com/jargon/m/mesh.htm)
of Phoenix nodes.

Hubs uses Reticulum server for real-time data transfer and also persistent data
(like accounts, rooms, [Spoke](https://github.com/Hubs-Foundation/Spoke) projects, and
more) management. Persistent data is stored in a [PostgreSQL](https://www.postgresql.org/)
database.

When you connect to a room, you are connecting to a load-balanced node on this
mesh over [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)s.
Messages are relayed between all users in that room across the mesh via a
[pub/sub system](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
called [Phoenix Channels](https://hexdocs.pm/phoenix/Phoenix.Channel.html).

TODO: Write what Phoneix node is?


### Phoenix

[`Phoenix`](https://www.phoenixframework.org/) is a web development framework
written in [Elixir](https://elixir-lang.org/) which implements the server-side
Model View Controller (MVC) pattern. [The Phoenix Guides](https://hexdocs.pm/phoenix/overview.html)
are a great resource for an overview of how it works.

Real-time data is managed by [Phoenix Channels](https://hexdocs.pm/phoenix/Phoenix.Channel.html).
The relevant channel for entity state networking is the `HubChannel` defined in
[`src/utils/hub-channel.js`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/hub-channel.js).

TODO: Write what Phoneix Channels are?


### Data sync frequency

Clients send messages at fixed intervals (rather than anytime entity state is
updated) so that frequently updated components do not cause a client to flood 
the network with an unnecessary amount of update messages.


### Message receiver

Clients receive messages outside of frame ([`mainTick`](./dev-client-gameplay.html))
boundaries, and simply queue them for processing. Some core [systems](./dev-client-gameplay.html)
in clients process queued messages each frame in `mainTick`.


### Partial or full update

An entity&rsquo;s state is simply the component data associated with this
entity. Updates can be partial (updating only some components) or full
(updating all components).

TODO: Write how to specify partial or full update


### Persistency

Hubs Client manages who the creator of `networked instanciated entities`,
[which will be explained later](#createnetworkedentity), is. When the creator
(a local or remote Hubs Client) is disconnected from a room,
`networked entities` instanciated by it are removed from the room.

In order to keep these entities stayed in the room even after their authors
leave a room, the entity must be [`pinned`](./hubs-features.html).

Pinned entities are stored in database in Reticulum.

[More details will be explained later.](#persisting-networked-entity-state)


### Eventual Consistency

`Reticulum` does not enforce a single, consistent networked entity state. In
fact, reticulum knows very little about the messages it is passing between
clients. Furthermore, messages are not guaranteed to be received in the same
order by all clients. Therefore, it is each client&rsquo;s responsibility to
handle messages in such a way that all clients will eventually recreate
identical entity state. This general concept is called
[Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency).


### Ownership

TODO: Polish this section

TODO: Write our Ownership and SoftOwnership concepts

Users do need to understand that ownership is not transactional or guaranteed.
That is, ownership is not &ldquo;requested and then transferred&rdquo;, and
just because one client claims ownership of an entity does not mean that other
clients will respect that claim.

Users can first call the built-in `takeSoftOwnership()` function to try to
take ownership and then inspect the ownership state with the built-in
`Networked` or `Owned` components as needed in cases when their ownership
claims matter. They may find themselves writing [coroutines](./dev-client-gameplay.html)
that looks like this:

```typescript
import { hasComponent } from "bitecs";
import { Owned } from "../bit-components";
import { takeSoftOwnership } from "../utils/take-soft-ownership";

takeSoftOwnership(world, eid);
yield sleep( 3000 ); // Wait a few seconds to see if we "win" ownership
if (!hasComponent(world, Owned, eid)) return;
```


## Simple example

Let's write a simple networked component example. You need some additional
works to let your [component]((./dev-client-gameplay.html#prefab)) support
network.

Assume `Foo` component is defined with some properties, an
[inflator]((./dev-client-gameplay.html#prefab)) for it is written, and the
inflator is registered in the built-in
[jsxInflators map](./dev-client-gameplay.html#entitydef-jsx-prefab).

```typescript
// src/components/foo.ts

import { defineComponent, Types } from "bitecs";

export const Foo = defineComponent({ val: Types.f32 });

// src/inflators/foo.ts

import { addComponent } from "bitecs";
import { HubsWorld } from "../app";
import { Foo } from "../src/components/foo";

export type FooParams = {
  val?: number;
};

const DEFAULTS: Required<FooParams> = {
  val: 0
};

export function inflateFoo(world: HubsWorld, eid: number, params: FooParams) {
  params = Object.assign({}, params, DEFAULTS) as Required<FooParams>;
  addComponent(world, Foo, eid);
  Foo.val[eid] = params.val;
}

// src/utils/jsx-entity.js

import { FooParams, inflateFoo } from "../inflators/foo";
...
export interface JSXComponentData extends ComponentData {
  ...
  foo?: FooParams;
  ...
}
...
const jsxInflators: Required<{ [K in keyof JSXComponentData]: InflatorFn }> = {
  ...
  foo: inflateFoo,
  ...
};
...
```

First, write a [prefab](./dev-client-gameplay.html#prefab) for `Foo` component
with `networked` key, [which will be explained later](#entitydef-jsx-prefab),
and register it in the built-in [`prefabs`](#prefab) map. This prefab is used
to set up entities with associated components in both local and remote clients.

```typescript
// src/prefabs/networked-foo.tsx

/** @jsx createElementEntity */
import { prefabs } from "./prefabs";

export type NetworkedFooPrefabParams = {
  val: number;
};

export function NetworkedFooPrefab(params: NetworkedFooPrefabParams) {
  return (
    <entity
      networked
      foo={{ val: params.val }}
    />
  );
}

prefabs.set("networked-foo", { template: NetworkedFooPrefab } );
```

And then write a network schema which defines how component data is packed in
network message and register it in the built-in [`schemas`](#network-schema)
map.

```typescript
// src/network-schemas/foo.ts

import { Foo } from "../components/foo";
import { schemas } from "../utils/network-schemas";
import { defineNetworkSchema } from "../utils/define-network-schema";

const runtimeSerde = defineNetworkSchema(Foo);
export const NetworkedFoo: NetworkSchema = {
  componentName: "foo",
  serialize: runtimeSerde.serialize,
  deserialize: runtimeSerde.deserialize
};

schemas.set(NetworkedFoo, NetworkedFooSchema);
```

Now, `Foo` component data is ready for network sync. The built-in
[`createNetworkedEntity()`](#createnetworkedentity) function locally creates
new entities with associated components set up, and also sends a message to
remote clients to cause the same entity and components set up there. When `Foo`
component data is updated, Hubs Client sends a message to remote Hubs Clients
for sync.

```typescript
import { createNetworkedEntity } from "../utils/create-networked-entity";

const eid = createNetworkedEntity(world, "networked-foo", { val: 0 });
```

Let's dive into more details below.
 

## Creating Networked Entities

`Networked entities` are any entities with the the built-in `Networked`
component. Hubs Clients make their components data synched with remote clients.


### Prefab

[Prefabs](./dev-client-gameplay.html#prefab) for networked entities must be
registered in the built-in `prefabs` map defined in
registered in the built-in `prefabs` map defined in
[`src/prefabs/prefabs.ts`](https://github.com/Hubs-Foundation/hubs/blob/master/src/prefabs/prefabs.ts),
which is a map from `prefabName` string to `PrefabDefinition`, to let
[`createNetworkedEntity()`](#createnetworkedentity) recognize it.
`PrefabDefinition`s include functions that take `InitialData` and return
[`EntityDef`](./dev-client-gameplay.html)s.

Prefabs for networked entities must include `networked` key that is for
[Networked component](#networked-component) that manages networking related
internal data.

Example:

```typescript
// src/prefabs/networked-foo.tsx

/** @jsx createElementEntity */
import { prefabs } from "./prefabs";

export type NetworkedFooPrefabParams = {
  val: number;
};

export function NetworkedFooPrefab(params: NetworkedFooPrefabParams) {
  return (
    <entity
      networked
      foo={{ val: params.val }}
    />
  );
}

prefabs.set("networked-foo", { template: NetworkedFooPrefab } );
```

TODO: Write `networkedTransform`

TODO: Add a better API for registering prefab?


### createNetworkedEntity()

Calling the built-in `createNetworkedEntity(world: HubsWorld, prefabName: string, data: InitialData)`
function defined in [`src/utils/create-networked-entity.ts`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/create-networked-entity.ts)
that takes

- A `prefabName`, to indicate which prefab to initialize
- An [`InitialData`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/networking-types.ts) struct, to know how to initialize the prefab

TODO: Write what exactly `InitialData` is?

creates entities and associated components with the specified prefab in the
local Hubs Client and also would cause the Hubs Client to send a message for
entities and associated components setup in the remote Hubs Clients the next
time it sends messages.

Entities created with `createNetworkedEntity()` are called `networked
instanciated entities`.

Example:

```typescript
import { createNetworkedEntity } from "../utils/create-networked-entity";

const eid = createNetworkedEntity(world, "networked-foo", { val: 0 });
```


### Network Schema

A [`NetworkSchema`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/network-schemas.ts)
indicates how to pack component data into network update messages, and has the
following properties:

- A `componentName` string that uniquely identifies the component
- A `serialize` (and `deserialize`) function that defines how component data
is packed into (and unpacked from) network update messages.
- An optional `serializeForStorage` (and `deserializeForStorage`) function
that defines how component data is packed into (and unpacked from)
network update massages that is able to be saved (and loaded) from the
database for persistent data.

TODO: Write how `componentName` is used

The `serialize` and `deserialize` functions can be generated by calling 
the built-in `defineNetworkSchema()` function defined in
[`src/utils/define-network-schema.js`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/define-network-schema.js).

TODO: Write how to write custom serialize and deserialize functions?

The `serializeForStorage` and `deserializeForStorage` functions need careful
authoring to allow for reading component state that has been saved to the
database in a backwards-compatible way.

Note: `NetworkSchema`s are likely to change in the near future, as we are
looking for ways to simplify the complexity that `serializeForStorage` and
`deserializeForStorage` introduce.

`NetworkSchema` must be added to the built-in `schemas` map defined in
[`src/utils/network-schema.ts`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/network-schemas.ts).

Example:

```typescript
// src/network-schemas/foo.ts

import { Foo } from "../components/foo";
import { NetworkSchema, schemas } from "../utils/network-schemas";
import { defineNetworkSchema } from "../utils/define-network-schema";

const runtimeSerde = defineNetworkSchema(Foo);
export const NetworkedFoo: NetworkSchema = {
  componentName: "foo",
  serialize: runtimeSerde.serialize,
  deserialize: runtimeSerde.deserialize
};

schemas.set(Foo, NetworkedFooSchema);
```

TODO: Add a better API for registering network schema?


## Async initialization

When [`createNetworkedEntity()`](#createnetworkedentity) is called,
[`network instantiated entities`](#createnetworkedentity) are
created synchronously. That is, any asynchronous loading that entities need
to do to be &ldquo;fully realized&rdquo; will happen later. For example
some accociated components or descendant entities may be set up asynchronously
[as explained here](./dev-client-gameplay.html#asynchronous-component-initialization).

Between the time that the `network instantiated entities` are created and the 
time that the associated components or descendant entities are set up Hubs
clients may receive update messages about the components or descendant entities
they don't recognize yet.

Hubs clients store these update messages in their local storages until they can
be applied.


## Hubs client internal

The following sections are for explaining Hubs Client core inside about how the
network features explained above are implemented. Users who just want to write
networked gameplay functionality don't need to know them. They are for Hubs
Client core developers.

**Note that This section is T.B.D.**

TODO: Polish this section


### Networked Component

Networked entities are any entities with the `Networked` component. The
`Networked` component defined in
[`src/bit-components.js`](https://github.com/Hubs-Foundation/hubs/blob/master/src/bit-components.js)
contains:

- A (networked) `id`, which clients use to uniquely identify this entity across
the network. This cannot simply be the `eid` of an entity, because `eid`s are
assigned locally to each client.
- A `creator`, which is used at various times to determine whether or not an
entity should be created or removed.
- An `owner`, which is used to determine which `client` has authority to update
the state of this entity.
- A `lastOwnerTime`, which is used to determine the most recent time that an
`owner` was assigned.
- A `timestamp`, which is the most recent time the networked state of this
entity has been updated.

The `creator` can be set to a `ClientID`, `"reticulum"`, or a `NetworkID`.

- When the `creator` is a `ClientID`, it means that a client in the room has
caused this &ldquo;root&rdquo; entity (and its descendants) to be created, and
the entity (and its descendants) should be removed when the client leaves the
room.
- When the `creator` is `"reticulum"`, it means that the [Reticulum](#reticulum)
is responsible for deciding whether this &ldquo;root&rdquo; entity should be
created or removed.
- When the `creator` is a `NetworkID`, it means that the entity is a descendant
of a &ldquo;root&rdquo; entity, and its creation/removal will be subject to its
ancestor.

Conceptually, the `creator` and the `owner` act as authorities over two facets
of a networked entity.

- The `creator` is the authority over the entity&rsquo;s existence. Thus, it is
checked when processing [`CreateMessage`s](#createmessage) and before an entity
may be removed. For an entity to be created, its `creator` must have the
appropriate permission. An entity&rsquo;s `creator` changes infrequently. It
only happens when a client [`pins`](#persistency) (or `unpins`) an entity,
which changes the `creator` to (or from) `"reticulum"`.
- The `owner` is the authority over the entity&rsquo;s current state. Thus, it
is associated with [`UpdateMessage`s](#updatemessage). The `owner` is expected
to change regularly, whenever a new client performs an action on an entity. The
built-in [`takeOwnership()`](#ownership) and [`takeSoftOwnership()`](#ownership)
functions allow a client to establish itself as the `owner` of an entity.

TODO: Consider to move this ownership explanation to the [Ownership](#ownership)
or [Ownership handling](#ownership-handling) section.


### Message Types

Clients send and receive these types of messages:

- `CreateMessage`
- `UpdateMessage`
- `DeleteMessage`
- `ClientJoin`
- `ClientLeave`
- `CreatorChange`


#### CreateMessage

These tell a client to create an entity. Each `CreateMessage` contains:

- A `networkId`, which clients will use to uniquely identify this entity.
- A `prefabName`, to know which prefab to initialize,
- An `initialData` struct, to know how to initialize the prefab,

Reticulum inserts a `fromClientId` into `"nn"` messages, so that clients who
receive a `CreateMessage` can check whether the sending client has permission
to create the entity. These `fromClientId` s are guaranteed to be sent by
reticulum in a way that clients are unable to spoof.

Entities that are created by calling `createNetworkedEntity` or receiving a
`CreateMessage` are said to be `network instantiated`. `Network instantiated`
entities may have many descendants. We do not say that the descendants are
`network instantiated`.


#### UpdateMessage

These tell a client to update an entity. Each `UpdateMessage` contains:

- A `networkId`, which clients use to uniquely identify which entity the
message refers to,
- A `lastOwnerTime`, which tells clients when the sender of this message most
recently witnessed ownership being transferred.
- A `timestamp`, which indicates when a message was sent.
- An `owner`, which indicates which `client` should have authority over
updating this entity&rsquo;s state.

Update messages also have the `data` needed to update an entity&rsquo;s state.
An entity&rsquo;s state is simply the component data associated with this
entity. Updates can be partial (updating only some components) or full
(updating all components). Update messages also have two variants, depending
on whether they are can be saved for long term storage in the database. This
topic will be covered in another section.


#### DeleteMessage

These tell a client to `delete` an entity. Each `DeleteMessage` contains simply
the `NetworkID` of the entity to be deleted. We distinguish between entities
that have been `deleted` and those that are simply `removed`:

- A `deleted` entity was explicitly deleted by a client. That is, someone
pressed a button or took some action to delete it on purpose. Entities that
have been `deleted` cannot be recreated.
- A `removed` entity was removed incidentally. For example, it may have been
removed when the `creator` disconnected from the room. If the `creator`
reconnects and sends a `CreateMessage` with a matching `networkId`, it is
acceptable to recreate the entity.


#### ClientJoin

These tell a client that a new client has connected. The next time the
built-in `networkSendSystem` runs, the receiving client will send the new
client messages about entities it is the `creator` of, and update messages
for entities it is the `owner` of.


#### ClientLeave

These tell a client that another client has disconnected. The next time the
built-in `networkReceiveSystem` runs, the receiving client will `remove`
entities that the disconnected client was the `creator` of.


#### CreatorChange

These tell a client that the `creator` of an entity has been reassigned.
Typically, this means that an entity has been [`pinned`](#persistency) (or
`unpinned`), and reticulum has assigned (or unassigned) itself as the
entity&rsquo;s `creator`.

TODO: Clarify the initial creator


#### Note

Note that this is a slight simplification. The message types are not
represented in these exact terms throughout the client. For example, clients
may combine `CreateMessage`s, `UpdateMessage`s, and `DeleteMessage`s into a
single outgoing message, which receiving clients then separate and parse. There
are also two variants of `UpdateMessage`, which will be explained above.


### Ownership handling

Most of the complexity in the built-in `networkSendSystem` and the
`networkReceiveSystem` stem from this property of the network. Here are some
examples where this complexity reveals itself:

- The `lastOwnerTime` is used to ensure that ownership transfer is handled
identically by all clients, even when messages arrive out of order.
- The `deletedNids` collection ensures that out-of-order `CreateMessage`s do
not cause `deleted` entities to be accidentally recreated.
- The `storedUpdates` allows a client to save `UpdateMessage`s it has received
but has no way to process, as can happen when it receives an `UpdateMessage`
from the `owner` of an entity before it receives a `CreateMessage` from its
`creator`.
- The `takeSoftOwnership` function allows clients to take ownership of unowned
entities in such a way that only clients with the most recent information about
that entity will be eligible as the new owner.

For the most part, users of the networking systems do not need to understand
these concepts. These are handled internally by the systems themselves. However,
users do need to understand that ownership is not transactional or guaranteed.
That is, ownership is not &ldquo;requested and then transferred&rdquo;, and
just because one client claims ownership of an entity does not mean that other
clients will respect that claim.

Users can inspect the state the built-in `Networked` or `Owned` components as
needed in cases when their ownership claims matter. They may find themselves
writing coroutines that looks like this:

```typescript
takeSoftOwnership(world, eid);
yield sleep( 3000 ); // Wait a few seconds to see if we "win" ownership
if (!hasComponent(world, Owned, eid)) return;
```

TODO: Explain more what this example code does and does for.

If this becomes a common and error-prone pattern, then we may introduce helper
functions or additional semantics to cover these cases.


### Async initialization handling

A critical property of the networked system that enables the async
initialization to work is that descendants of `networked instantiated`
entities are assigned network IDs deterministically, even in cases where
some parts of a descendant hierarchy fails to load. This ensures that the
descendants can load in any order (or even fail to load) without causing a
client to delete, overwrite, or ignore descendant updates.


### Event handlers

Event handlers that queue messages for later processing can be found in
`listenForNetworkMessages` defined in
[`src/utils/listen-for-network-message.ts`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/listen-for-network-messages.ts).


### Persisting Networked Entity State

By default, `networked instanciated entities` which are created with
the built-in [`createNetworkedEntity()`](#createnetworkedentity) function,
are removed when their creator (client) is disconnects. In order to persist
these entities the entity must be [pinned](./hubs-features.html). Only

`networked instanciated entities` can be `pinned`.

To `pin` an `network instantiated entities`, a client calls the built-in
`createEntityState()` function. This will save the current state of the
entities to the database. We say that the entities are `persistent`.

To update the state of a persistent entity, a client calls the built-in
`updateEntityState()` function.

To delete the saved entity state of a persistent entity, a client calls
the built-in `deleteEntityState()` function. Note that deleting the saved
entity state is not the same as deleting the entity. It simply means that
the information saved to the database about this entity will be deleted.

When the client connects to a hub channel, it calls the built-in
`listEntityStates()` function in order to receive the entity states that have
been saved to the database.

Messages for persisted entities' states are handled similarly to non-persited
entities'. The messages are queued and later processed. The client&rsquo;s
eventually consistent properties guarantee that if entity state updates that
come from the database are out-of-date, they will be appropriately handled.

The built-in functions described in this section are defined in
[`src/utils/entity-state-utils`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/entity-state-utils.ts).
