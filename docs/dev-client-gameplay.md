---
id: dev-client-gameplay
title: Core Concepts for Gameplay Code
description: The core concepts for writing gameplay code in the Hubs client
---

## Intro

This document gives an overview of the core concepts for writing gameplay
code in the Hubs client.


### Gameplay

TODO: Write this section to clarify the term "gameplay"


### Target readers

This document is intended for users with some coding experience that want to
extend the gameplay functionality of the Hubs client.


## ECS (Entity Component System)

[ECS](https://github.com/SanderMertens/ecs-faq#what-is-ecs) became a popular
topic in recent years.

- [Unity&rsquo;s `DOTS`](https://unity.com/dots) emphasizes data-oriented
design for speed and control, separates behavior from data, and helps
developers build multi-threaded game loops.
- [Supermedium&rsquo;s `A-Frame`](https://aframe.io/) emphasizes ease of use
and a low barrier to entry, exposes [`Three.js`](https://threejs.org/) through
familiar HTML, and enables rapid prototyping with many built-in components and
hundreds more from the community.

Originally built with `A-Frame`, Hubs switched to `bitECS` and using `Three.js`
directly. Motivation, goals, and non-goals about the transition can be found
in this PR from June, 2022. [#5536](https://github.com/Hubs-Foundation/hubs/pull/5536)

TODO: Write the scope in this document based on that PR


### bitECS

[`bitECS`](https://github.com/NateTheGreatt/bitECS) is an ECS framework written
in [`TypeScript`](https://www.typescriptlang.org/).

The `bitECS` API is minimal, and
[its own documentation](https://github.com/NateTheGreatt/bitECS#--documentation)
should be consulted for details. The main ideas from the Hubs gameplay code
perspective are:

- Component data are [structs of arrays](https://en.wikipedia.org/wiki/AoS_and_SoA).
- Entities are indices into these arrays.
- Queries filter entities by their associated components.

`bitECS` has no built-in concept of systems. We frequently refer the functions
invoked during the game loop as &ldquo;systems&rdquo;, but there is no formal
construct.

We highly recommend to understand the basic `bitECS` API and concept
[`from their documents`](https://github.com/NateTheGreatt/bitECS#--documentation)
before reading the following sections. No worry, they are very simple.


### Disclaimer

Much has been written about the philosophy of various ECS frameworks and design
choices. Our choices should not be interpreted fanatically.

We need to store game state somehow, and conventions are useful. We use
`Three.js`, which means a lot of game state is stored in various `Object3D`
subtypes. We store the rest in `bitECS` entities and components, or `map` s
from entity to struct in cases where `bitECS` components won&rsquo;t do.
Refer to [this section for this design decision](#avoid-duplicating-state).

In other words, our game state is not &ldquo;purely&rdquo; in ECS, nor do we
care to make it so. The PR linked above states the (relatively humble) goals
and non-goals of our entity framework.


## Three.js

[`Three.js`](https://threejs.org/) is a JavaScript 3D graphics library.
We use this library for rendering 3D objects.

3D objects are rendered in the 3D scene by
[`Three.js WebGLRenderer`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
if [`Three.js Object3D`](https://threejs.org/docs/#api/en/core/Object3D)
subtype renderable objects (eg: [`Three.js Mesh`](https://threejs.org/docs/#api/en/objects/Mesh))
are added to [`Three.js Scene`](https://threejs.org/docs/#api/en/scenes/Scene).

We also highly recommend to understand the basic `Three.js` API and concept
[`from their documents`](https://threejs.org/docs/).


## Add-on

Add-on is one or set of application logics. It consists of components,
systems, and inflators.

In the Hubs Client, most of the features are written as add-ons (eg: media
loading, physics, object menus, and so on). The rest of the features will be
rewritten as add-ons soon.

You can also add your custom add-ons.

Note that currently we don't have good APIs to register custom add-ons yet.
You are required to edit some Hubs Client core files.

TODO: Add APIs to register custom add-ons.


### Directories

Most of the built-in add-on source codes are found in 
[`src/components`](https://github.com/Hubs-Foundation/hubs/tree/master/src/components) and
[`src/bit-systems`](https://github.com/Hubs-Foundation/hubs/tree/master/src/bit-systems).
Also find the files imported from them. If you want to read the built-in add-on
code check the directories.


### Simple example

Let's start with making an easy and workable add-on example. We will make an
add-on that linearly moves Three.js objects associated with entities. You will
know likely what add-on is and how it looks like from this first easy example.

First, we will define a new component needed for the add-on. `Velocity`
component holds a vector information that indicates the direction and speed
of movement.

```typescript
// src/components/velocity.ts
import { defineComponent, Types } from "bitecs";

export const Velocity = defineComponent({
  x: Types.f32,
  y: Types.f32,
  z: Types.f32
});
```

Second, we will write a systems that moves Three.js objects. `velocitySystem`
gets the ids of entities that have `Velocity` and `Object3DTag` components by
using `bitECS` query, gets Three.js objects associated with entities, and updates
the objects' position.

 (`HubsWorld`, `eid2obj`, and `Object3DTag` will be explained in the later sections.)

```typescript
// src/systems/velocity.ts
import { defineQuery } from "bitecs";
import { Object3DTag } from "../bit-components";
import { Velocity } from "../components/velocity";
import { HubsWorld } from "../app";

const velocityQuery = defineQuery([Velocity, Object3DTag]);
export function velocitySystem(world: HubsWorld) {
  velocityQuery(world).forEach(eid => {
    const obj = world.eid2obj.get(eid)!;
    obj.position.x += Velocity.x[eid];
    obj.position.y += Velocity.y[eid];
    obj.position.z += Velocity.z[eid];
  });
}
```

We will edit a bit an existing Hubs core file `src/systems/hubs-systems.ts` to
call `velocitySystem` from `mainTick` that is invoked every animation frame.

```typescript
// src/systems/hubs-systems.ts
...
import { velocitySystem } from "../systems/velocity";
...
export function mainTick(...) {
  ...
  velocitySystem(world);
  ...
}
...
```

TODO: Add an API to register system.

Next, we will write an inflator for `Velocity` component. Inflator is not
part of `bitECS` but a Hubs special that adds component(s) to an entity and
initializes component(s) data.

```typescript
// src/inflators/velocity.ts
import { addComponent } from "bitecs";
import { Velocity } from "../components/velocity";
import { HubsWorld } from "../app";

export type VelocityParams = {
  x?: number;
  y?: number;
  z?: number;
};

const DEFAULTS: Required<VelocityParams> = {
  x: 0.0,
  y: 0.0,
  z: 0.0
};

export function inflateVelocity(
  world: HubsWorld,
  eid: number,
  params: VelocityParams
) {
  params = Object.assign({}, params, DEFAULTS) as Required<VelocityParams>;
  addComponent(world, Velocity, eid);
  Velocity.x[eid] = params.x;
  Velocity.y[eid] = params.y;
  Velocity.z[eid] = params.z;
}
```

TODO: Rename inflator to addXXX for easiness to understand?

The add-on is ready now.

If you call the inflator from somewhere to add `Velocity` component and also
add Three.js object to entities, you will see the objects move in the 3D scene.

```typescript
// somewhere
import { addEntity } from "bitecs";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { inflateVelocity } from "../inflators/velocity";
import { addObject3DComponent } from "../utils/jsx-entity";
import { HubsWorld } from "../app";

function xxx(world: HubsWorld) {
  ...
  const eid = addEntity(world);
  inflateVelocity(world, eid, {
    x: 1.0
  });
  addObject3DComponent(world, eid, new Mesh(
    new BoxGeometry(1.0, 1.0),
    new MeshBasicMaterial()
  ));
  ...
}
```

(`addObject3DComponent` will be explained in [the later sections](#entitydef-jsx-prefab).)

If you want to allow your custom components to be created from `JSX` and/or
`glTF`, you also need to edit the core `src/utils/jsx-entity.ts` file for a
mapping from their key in the inflator. It will be explained later
[here](#entitydef-jsx-prefab) and [here](#inflators-for-gltf) for each.

TODO: Write an outline of concepts in the form of an example before breaking
down the individual concepts.

Let's look into systems, components, inflators, and others more details below.

TODO: Consider to add a more concrete example with full functionalities (eg:
network and interactivity), or replace this simple and abstract example
with it.


## Writing systems


### Systems are functions

`bitECS` has no built-in concept of [systems](https://github.com/NateTheGreatt/bitECS/blob/master/docs/INTRO.md#-system).
We frequently refer the functions invoked during the game loop as
&ldquo;systems&rdquo;, but there is no formal construct.

TODO: Perhaps we may need to define the type of system function,
eg: `(world: HubsWorld) => void`.


### The game loop

We provide the browser&rsquo;s
[`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
(or [`XRSession.requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/XRSession/requestAnimationFrame)
in [`immersive mode`](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API))
with our game loop function (`mainTick`), to be invoked each frame. All the
systems are invoked from `mainTick` one by one.

If you want to your addon you need to edit `mainTick` to insert your systems.

TODO: Write about system order


### Accessing Entities

[`bitECS` queries](https://github.com/NateTheGreatt/bitECS/blob/master/docs/INTRO.md#-query)
allow us to find entities based on the [components](https://github.com/NateTheGreatt/bitECS/blob/master/docs/INTRO.md#-component)
that are attached to them. `enterQuery` and `exitQuery` wrap regular queries so
that we handle when an entity first matches or stops matching a given query.
[The `bitECS` documentation](https://github.com/NateTheGreatt/bitECS#--documentation)
should be consulted for more details.

Holding the references to entities may be danger because entities can be
deleted or even recycled [as explained later](#creating-entities). It is safer
to use queries as much as possible to fetch entities when needed.


### Asynchronous Operations/Coroutines

`async` functions should not be used. Instead, [`coroutines`](https://x.st/javascript-coroutines/)
should be used to ensure that systems run in `mainTick`.

If you use `async` in a system, the system can restart outside of `mainTick`.
Using `coroutines` enforces systems to run in `mainTick`. We want all the
systems to run in `mainTick` for good lifecycle control.

We provide `coroutine` helper functions. Refer to [the "JobRunner" section](#jobrunner)
below for details.


## Writing components

TODO: Write what components briefly are


### Defining components

`bitECS` [components](https://github.com/NateTheGreatt/bitECS/blob/master/docs/INTRO.md#-component)
are defined with [`defineComponent`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/API.md#definecomponent--object).


### Data types

`bitECS` components natively support only numeric types: `i8`, `ui8`, `ui8c`, `i16`,
`ui16`, `i32`, `ui32`, `f32`, `f64`, and `eid`.

Refer to the following sections if you want to use non-numeric types.


### Avoid holding references

The `eid` type indicates that the property values will be entity IDs. Be
careful when storing references to entities. If the referenced entity is
removed from the world with [`bitECS removeEntity()`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/API.md#removeEntity),
then you should consider the entity reference in the component to be invalid!
You can use [`bitECS entityExists()`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/API.md#entityexists)
to check whether the referenced entity still exists, but in general it is best
to avoid storing entity references if you can.

The most common scenario for using the `eid` type is when building multi-entity
objects, such as in-world menus. The `VideoMenu` component in the Hubs Client
core stores references to each entity that has a target video or a part object
(eg: label or indicator) of the menu so that it can manage them all easily.

```typescript
export const VideoMenu = defineComponent({
  videoRef: Types.eid,
  timeLabelRef: Types.eid,
  trackRef: Types.eid,
  headRef: Types.eid,
  playIndicatorRef: Types.eid,
  pauseIndicatorRef: Types.eid
});
```


### String data

We sometimes want to be able to store string data in components. Since `bitECS`
does not allow strings in components, we provide a helper mechanism to store
numeric string ID&rsquo;s instead.

Let's think of a `SceneLoader` component with a `src` property, which we
wish was a string, as an example.

Define a component with `src` property as `ui32` type. And mark the `src`
property as string data with the symbol `$isStringType`, defined in the Hubs
Client core `src/bit-components.js` file.

```typescript
export const SceneLoader = defineComponent({ src: Types.ui32 });
SceneLoader.src[$isStringType] = true;
```

The symbol indicates that this property is a string handle. Code that handles
component state anonymously (e.g. [our `createDefaultInflator()` that will be
explained later](#default-inflators)) use this to correctly handle the property values.

Strings are converted to numeric `StringID` s by the `APP.getSid` function.
`StringID` s can be converted back to strings by the `APP.getString` function.
`APP` is exposed to global scope from Hubs Client core `src/app.ts` and it
can be accessed anywhere.

Then, code that initializes `SceneLoader` component will be like this

```typescript
export type SceneLoaderParams = {
  url: string;
};

export function inflateSceneLoader(
  world: HubsWorld,
  eid: number,
  params: SceneLoaderParams
) {
  addComponent(world, SceneLoader, eid);
  SceneLoader.src[eid] = APP.getSid(params.url);
}
```

and code that accesses the property will be like this.

```typescript
const sceneLoaderQuery = defineQuery([SceneLoader]);
const sceneLoaderEnterQuery = enterQuery(sceneLoaderQuery);
export function sceneLoaderSystem(world: HubsWorld) {
  sceneLoaderEnterQuery(world).forEach(eid => {
    const src = APP.getString(SceneLoader.src[eid]);
    console.log(`Loading scene from this url: ${src}`);
    ...
  });
}
```


### Booleans/Flags

`bitECS` components do not support `boolean` properties. In lieu of boolean
properties, we often define a single `flags` property as an unsigned integer
type to use as a bitmask:

```typescript
export const Waypoint = defineComponent({
  flags: Types.ui8
});

// Use bit shifting to create values we can use instead of booleans
export enum WaypointFlags {
  canBeSpawnPoint = 1 << 0,
  canBeOccupied = 1 << 1,
  canBeClicked = 1 << 2,
  willDisableMotion = 1 << 3,
  willDisableTeleporting = 1 << 4,
  willMaintainInitialOrientation = 1 << 5,
  snapToNavMesh = 1 << 6
}

// These values are booleans because they originate from an external source, like json in a gltf file.
export type WaypointParams = {
  canBeSpawnPoint: boolean;
  canBeOccupied: boolean;
  canBeClicked: boolean;
  willDisableMotion: boolean;
  willDisableTeleporting: boolean;
  willMaintainInitialOrientation: boolean;
  snapToNavMesh: boolean;
};

// When we inflate a waypoint component, we pack the booleans into the flags property
export function inflateWaypoint(world: HubsWorld, eid: number, props: WaypointParams) {
  addComponent(world, Waypoint, eid);
  let flags = 0;
  if (props.canBeSpawnPoint) flags |= WaypointFlags.canBeSpawnPoint;
  if (props.canBeOccupied) flags |= WaypointFlags.canBeOccupied;
  if (props.canBeClicked) flags |= WaypointFlags.canBeClicked;
  if (props.willDisableMotion) flags |= WaypointFlags.willDisableMotion;
  if (props.willDisableTeleporting) flags |= WaypointFlags.willDisableTeleporting;
  if (props.willMaintainInitialOrientation) flags |= WaypointFlags.willMaintainInitialOrientation;
  if (props.snapToNavMesh) flags |= WaypointFlags.snapToNavMesh;
  Waypoint.flags[eid] = flags;

  // More lines omitted
}

// Later, we can read the waypoint flags using bitwise &:
const canBeSpawnPoint = Waypoint.flags[eid] & WaypointFlags.canBeSpawnPoint;
```


### The escape hatch

Sometimes, we want to store non-numerical data in components. Since `bitECS`
doesn't support non-numerical component properties, we store it in regular
`Map` s instead.

Let's think of defining a `MediaPDF` component that manages both numerical and
non-numerical data as an example.

Define a component with numeric properties, and separately create a
`Map` for non-numerical data.

```typescript
// src/components/media_pdf.ts
export const MediaPDF = defineComponent({
  pageNumber: Types.ui8
});

export type MediaPDFData = {
  pdf: PDFObject;
  material: MeshBasicMaterial;
  canvasContext: CanvasRenderingContext2D;
};

export const MediaPDFMap = new Map<number, MediaPDFData>();
```

`bitECS` is not aware of anything about such `Map`s so allocating and
deallocating an element of `Map` for an entity and initializing and
cleaning up non-numerical data are your responsibility.

Then inflator and system will be like these.

```typescript
// src/inflators/media_pdf.ts
import { MeshBasicMaterial } from "three";
import { MediaPDF, MediaPDFMap } from "../components/media_pdf";

export type MediaPDFParams = {
  pdf: PDFObject;
  canvasContext: CanvasRenderingContext2D;
};

export function inflateMediaPDF(
  world: HubsWorld,
  eid: number,
  params: MediaPDFParams
) {
  addComponent(world, MediaPDF, eid);
  MediaPDF.pageNumber[eid] = 0;

  MediaPDFMap.set(eid, {
    pdf: params.pdf,
    material: new MeshBasicMaterial(),
    canvasContext: params.canvasContext
  });
}

// src/systems/media_pdf.ts
import { MediaPDF, MediaPDFMap } from "../components/media_pdf";
import { disposeMaterial } from "../utils/three-utils";

const pdfQuery = defineQuery([MediaPDF]);
const pdfExitQuery = exitQuery(pdfQuery);
export function mediaPDFSystem(world: HubsWorld) {
  pdfExitQuery(world).forEach(eid => {
    const { pdf, material } = MediaPDFMap.get(eid)!;
    pdf.cleanup();
    disposeMaterial(material);
    MediaPDFMap.delete(eid);
  });

  pdfQuery(world).forEach(eid => {
    const { pdf, material, canvasContext } = MediaPDFMap.get(eid)!;
    const pageNumber = MediaPDF.pageNumber[eid];
    ...
  });
}
```


### Tag components

`bitECS` components with no properties are called tag components. It is useful
to be able to tag an entity so that it appears in queries.

TODO: Currently we use name "*Tag" for some components even that have
properties to avoid the conflict with existing object names. (eg: 
`DirectionalLightTag` to avoid the conflict with `Three.js DirectionalLight`.)
It doesn't match the Tag components description. We may need to update the
description or use other component name patterns.


### Avoid duplicating state

[`Three.js Object3D`](https://threejs.org/docs/#api/en/core/Object3D) and
its subtypes have many properties that change at runtime. Rather than storing
a duplicate copy of these properties in `bitECS` components, we use tag
components on the entity so that they show up in the necessary queries, and
then operate on the associated `Object3D` directly.

Let's think of [`TroikaText`](https://protectwise.github.io/troika/troika-three-text/)
as an example. We use `TroikaText` library for high quality texts in the 3D
scene. `TroikaText` class extends [`Three.js Mesh`](https://threejs.org/docs/#api/en/objects/Mesh),
which extends `Three.js Object3D`. `TroikaText` s have a `text` string property
and a function `sync` that will flush the `text` to the underlying shader program.

In Hubs, we define the `TextTag` component without any property.

```typescript
export const TextTag = defineComponent();
// Not
// export const TextTag = defineComponent({ text: Types.ui32 });
// TextTag.text[$isStringType] = true;
```

We do not duplicate the `text` string in a `bitECS` component. We simply
operate on the underlying `Object3D` (a `TroikaText`):

```typescript
const textQuery = defineQuery([TextTag, TimeLabel]);
export function textSystem(world: HubsWorld) {
  textQuery(world).forEach(eid => {
    const timeLabel = world.eid2obj.get(eid)! as TroikaText;
    timeLabel.text = new Date().toISOString();
    timeLabel.sync();
  });
}
```

Refer to the later sections for `world.eid2obj.get(eid)! as XXX`.

TODO: Write benefits from this design decision.

TODO: Do we use another example because this Text example doesn't match the
actual implementation. `TroikaText.sync()` shouldn't be called each system.
It should be called only once in a frame in a dedicated system. This example
might be confusing if the readers check the actual code.


## Writing inflators

`Inflator` is one of the special concepts, which may not appear in standard
ECS patterns, in Hubs Client. 

Once component is added to an entity and its data is initialized, it starts to
be processed by systems in ECS world. In other words, components need points
where they are added to entity and their data is initialized.

`Inflator` is the component entry point in the Hubs Client.

TODO: Rename inflate to add or setup because the name may not clearly explain
what it does?


### Inflator functions

An `inflator` is a function that takes initialize parameter for some
components and set up them for an entity.

```typescript
export type FooParams = {
  x?: number;
  y?: number;
  z?: number;
};

const DEFAULTS: Required<FooParams> = {
  x: 0.0,
  y: 0.0,
  z: 0.0
};

export function inflateFoo(
  world: HubsWorld,
  eid: number,
  params: FooParams
) {
  params = Object.assign({}, params, DEFAULTS) as Required<FooParams>;
  addComponent(world, Foo, eid);
  Foo.x[eid] = params.x;
  Foo.y[eid] = params.y;
  Foo.z[eid] = params.z;
  addObject3DComponent(world, eid, new FooObject3D());
}
```

Inflator function type must be `(world: HubsWorld, eid: number, params?: object) => void`
for integration with [our `renderAsEntity()` explained later](#renderasentity).

An inflator may create a `Three.js Object3D` object and add it to an entity
with our `addObject3DComponent()`. Refer to [the later section](#single-object3d-per-an-entity)
for adding a `Object3D` to an entity.

An inflator may set up multiple components.


### Inflators are synchronous

Inflator functions must be synchronous functions for simplicity.

TODO: More describe the benefit from this limitation


### No dependency with other Components

Inflators shouldn't expect any state of passed entity. For example they
shouldn't expect an entity has certain components or [`Three.js Object3D` is
already set to it](#single-object3d-per-an-entity). This is a bad example.

```typescript
export function inflateFoo(world: HubsWorld, eid: number, params: FooParams) {
  addComponent(world, Foo, eid);
  // Inflator shouldn't have a dependency with other components
  if (hasComponent(world, Bar, eid)) {
    Foo.x[eid] = Bar.x[eid];
  }
  // Inflator can't expect Three.js Object3D is already set
  if (hasComponent(world, Object3DTag, eid)) {
    const obj = world.eid2obj.get(eid)!;
    Foo.y[eid] = obj.position.length();
  }
}
```

If a compilation data initialization has a dependency with other components,
it may be a sign that you should redesign components.

If dependencies really aren't avoidable, you may think of initializing in
system with query [as explained later](#component-initialization-with-object3d).


### Default inflators

TODO: Write this section


## Creating entities

An entity is an identifier pointing to a group of components. It doesn’t
contain any direct behavior or data.


### Entity basics

`bitECS` entities are added to the `bitECS` world with [`bitECS addEntity()`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/API.md#addEntity)
and removed from the world with [`bitECS removeEntity()`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/API.md#removeentity).
In `bitECS`, component state is stored in large, pre-allocated `TypedArrays`.
In other words, entities are not objects with components inside them. Entities
are simply numbers (aliased as `EntityID` type in `src/utils/networking-types.ts`)
and often called Entity IDs. The `World` keeps track of things like whether an
entity has a given component ([`hasComponent(world, MyComponent, eid)`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/API.md#hasComponent)).

Note that you rarely need to call `addEntity()` directly. Instead you will
often use [our `prefab` and `renderAsEntity()` mechanisms explained later](#single-object3d-per-an-entity)
to create an entity with components and `Three.js Object3D` set up.


### Entity ID&rsquo;s are recycled

After an entity is removed, its `EntityID` can later be reused in subsequent
calls to `addEntity`. This does not happen right away, but is something you
should be aware of, and is all the more reason to avoid holding onto entity
references.


## Hubs Client ECS specialities

Hubs Client core provides some special functions, patterns, and limitations
for simplicity, efficiency, and consistency. You must follow these Hubs Client
ECS specialities, which might not match standard ECS patterns, for the
consistency unless any strong reasons.


### HubsWorld

`HubsWorld` defined in [`src/app.ts`](https://github.com/Hubs-Foundation/hubs/blob/master/src/app.ts)
extends [`bitECS World`](https://github.com/NateTheGreatt/bitECS/blob/master/docs/INTRO.md#-world).
It manages some extra Hubs Client specific resources and also provides some
useful data. For example you can get elapsed and delta time from it.

It is instantiated at the beginning of the Hubs Client application and passed
to a lot of functions (inflators, systems, utils, and so on).


### Single Object3D per an entity

We often associate an entity with a single `Three.js Object3D`. We don't allow
multiple `Object3D`s per an entity for simplicity. (An entity without
associated `Object3D` is allowed.)

TODO: Write the benefit from this limitation

You need to call `addObject3DComponent()` defined in
[`src/utils/jsx-entity.ts`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/jsx-entity.ts)
to associate an `Object3D` with an entity.

```typescript
import { addEntity } from "bitecs";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { addObject3DComponent } from "../src/utils/jsx-entity";

const eid = addEntity(world);
addObject3DComponent(world, eid, new Mesh(
  new BoxGeometry(1.0, 1.0, 1.0),
  new MeshBasicMaterial({ color: 0xffffff })
));
```

`addObject3DComponent()` checks whether an `Object3D` is associated for an
entity. It throws an exception if already associated. It prevents multiple
`Object3D` associations.

```typescript
const eid = addEntity(world);
addObject3DComponent(world, eid, new Group());
// Throws an exception
addObject3DComponent(world, eid, new Group());
```

`addObject3DComponent()` adds the built-in component `Object3DTag` defined in
[`src/bit-components.js`](https://github.com/Hubs-Foundation/hubs/blob/master/src/bit-components.js)
to an entity and stores an `Object3D` in the special `eid2obj` map managed in
`HubsWorld`.

`bitECS` component doesn't natively support non-numerical data type. So we
decided to store `Object3D`s associated with entities in a special map
`HubsWorld.eid2obj` that maps from Entity ID to `Object3D`.

TODO: Replace `HubsWorld.eid2obj` with `Object3DTagMap` to be more aligned with the pattern
described above?

You can use `Object3DTag` component with query to find entities
that have associated `Object3D`, and access the associated `Object3D`s with
`HubsWorld.eid2obj` map.

```typescript
const objectQuery = defineQuery([Object3DTag]);
export function object3DSystem(world: HubsWorld) {
  objectQuery(world).forEach(eid => {
    const obj = world.eid2obj.get(eid)!;
    ...
  });
}
```

`Object3DTag` component and `HubsWorld.eid2map` manipulations are hidden in
the Hubs Client core. They should be read-only from add-ons.


### EntityDef, JSX, Prefab

You will rarely need to call `bitECS addEntity()` yourself. Instead, you will
write entity definitions called `EntityDef`s using
[`React JSX`](https://legacy.reactjs.org/docs/introducing-jsx.html) syntax.

`EntityDef`s are `JSX` expressions that can be passed to our
`renderAsEntity()` explained later to add entities to the world and assign
components to the entities.

Let's write an easy example. Assume that `Foo` component and are inflators
are defined as the following.

```typescript
// src/components/foo.ts

import { defineComponent, Types } from "bitecs";
export const Foo = defineComponent({
  a: Types.f32,
  b: Types.f32
});

// src/inflators/foo.ts

import { addComponent } from "bitecs";
import { HubsWorld } from "../app";
export type FooParams = {
  a: number;
  b: number;
};
export function inflateFoo(world: HubsWorld, eid: number, params: FooParams) {
  addComponent(world, Foo, eid);
  Foo.a[eid] = params.a;
  Foo.b[eid] = params.b;
}
```

First, you need to edit the core `src/utils/jsx-entity.js` file to register
`JSX` key - inflator map in `JSXComponentData` for inflator parameters
and `jsxInflators` for inflator function. Choosing `foo` as a key here.

```
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

TODO: Add an API to register `JSX` key - inflator map

You may find `commonInflators` and `gltfInflators` in the file. [They will be
explained later](#gltf).

Next, write a function with `JSX` syntax that creates `EntityDef` that
represents entities and associated components with component parameters. We
call such functions `prefab`.

```typescript
/** @jsx createElementEntity */

// src/prefabs/foo.tsx

export function fooPrefab(params: {a: number, b: number}) {
  return (
    <entity
      foo={{ a: params.a, b: params.b }}
    />
  );
}
```

Multiple components association, multiple entities, and nested entities are
allowed.

```
// src/prefabs/foobarbazqux.tsx

export function fooBarBazQuxPrefab() {
  return (
    <entity
      foo={{ a: 0, b: 1 }}
      bar={{ c: 2, d: 3 }}
    >
      <entity
        baz={{ e: 4, f: 5 }}
      />
      <entity
        qux={{ g: 6, h: 7 }}
      />
    </entity>
  );
}
```

Although `EntityDef` s are written with `React JSX` syntax, this is not
`React`. The `JSX` syntax allows us to describe our desired scene graph,
entities, and components. `EntityDef` s are meant to be easy to edit by
hand and to version control.


### renderAsEntity()

Our `renderAsEntity()` function defined in [`src/utils/jsx-entity.js`](https://github.com/Hubs-Foundation/hubs/blob/master/src/utils/jsx-entity.ts)
parses `EntityDef`, adds entities to the world, and assign components to the
entities.

It also ensures that each entity has an associated `Three.js Object3D`. If no
inflator adds an `Object3D`, it adds `Three.js Group` to an entity.

TODO: Rename `renderAsEntity()` because the name might be confusing? Readers,
especially who know `Three.js`, may think it renders an object similar to
[`Three.js WebGLRenderer.render()`](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.render)
and the object is added to `Three.js Scene` but the both are not true. For
example, `createRenderableEntity(world: HubsWorld, def: EntityDef)` or
simply `parse(world: HubsWorld, def: EntityDef)` may be misleading?

```typescript
import { renderAsEntity } from "../utils/jsx-entity";
import { fooPrefab } from "../prefabs/foo";

const eid = renderAsEntity(world, fooPrefab({ a: 0, b: 1 }));

// It is equivalent to

export function createFooEntity(world: HubsWorld, params: { a: number, b: number }) {
  const eid = addEntity(world);
  inflateFoo(world, eid, { a: params.a, b: params.b });

  if (!hasComponent(world, Object3DTag, eid)) {
    addObject3DComponent(world, eid, new Group());
  }

  return eid;
}

const eid = createFooEntity(world, { a: 0, b: 1 });
```

`renderAsEntity()` lets `Object3D`s form graph from nested entities definition
and returns an entity id of the root entity.

```typescript
import { renderAsEntity } from "../utils/jsx-entity";
import { fooBarBazQuxPrefab } from "../prefabs/foobarbazqux";

const eid = renderAsEntity(world, fooBarBazQuxPrefab());

// It is equivalent to

export function createFooBarBazQuxEntity(world: HubsWorld) {
  const fooBarEid = addEntity(world);
  inflateFoo(world, fooBarEid, { a: 0, b: 1 });
  inflateBar(world, fooBarEid, { c: 2, d: 3 });

  if (!hasComponent(world, Object3DTag, fooBarEid)) {
    addObject3DComponent(world, fooBarEid, new Group());
  }

  const bazEid = addEntity(world);
  inflateBaz(world, bazEid, { e: 4, f: 5 });

  if (!hasComponent(world, Object3DTag, bazEid)) {
    addObject3DComponent(world, bazEid, new Group());
  }

  const quxEid = addEntity(world);
  inflateQux(world, quxEid, { g: 6, h: 7 });

  if (!hasComponent(world, Object3DTag, quxEid)) {
    addObject3DComponent(world, quxEid, new Group());
  }

  const fooBarObj = world.eid2obj.get(fooBarEid)!;
  const bazObj = world.eid2obj.get(bazEid)!;
  const quxObj = world.eid2obj.get(quxEid)!;

  fooBarObj.add(bazObj);
  fooBarObj.add(quxObj);

  return fooBarEid;
}

const eid = createFooBarBazEntity(world);
```

Remember that inflators are synchronous so you can process `Three.js Object3D`
operations right after `renderAsEntity()`.

```typescript
const eid = renderAsEntity(world, xxxPrefab());
const obj = world.eid2obj.get(eid);
obj.position.set(10.0, 50.0, -10.0);
scene.add(obj);
```


### JobRunner

TODO: Write this section

```typescript
import { defineQuery, enterQuery, exitQuery } from "bitecs";
import { ClearFunction, JobRunner, withRollback } from "../utils/coroutine-utils";
import { Foo } from "../components/foo";

function* yieldFunc(world: HubsWorld, eid: number, clearRollbacks: ClearFunction) {
  yield* barFunction(world, eid);
  clearRollbacks();
  ...
}

const jobs = new JobRunner();
const fooQuery = defineQuery([Foo]);
const fooEnterQuery = enterQuery(fooQuery);
const fooExitQuery = exitQuery(fooQuery);
export function fooSystem() {
  fooEnterQuery(world).forEach(eid => {
    jobs.add(eid, clearRollbacks => yieldFunc(world, eid, clearRollbacks));
  });
  fooExitQuery(world).forEach(eid => {
    jobs.stop(eid);
  });
  fooQuery(world).forEach(eid => {
    ...
  });
  jobs.tick();
}
```


## Three.js operations

TODO: Write these sections

### Add Object3D to Scene

### Resource management

### Entity deletion

### Matrices update


## glTF

Hubs supports [standard 3D format `glTF`](https://www.khronos.org/gltf/).

Both `glTF` formats, where binary data buffers contain base64-encoded strings
(as in `.gltf`) and raw byte arrays (as in `.glb`) are supported in Hubs. We
refer to `gltf` and `glb` files interchangably.


### Hubs bitECS components in glTF

Hubs Client `glTF` loading mechanism can parse Hubs bitECS component data
embedded in `glTF` and creates entity with components set up.

The loading mechanism recognizes embedded `glTF MOZ_hubs_components` extension
as Hubs bitECS component definition.


### Hubs Blender add-on and Spoke

[`Hubs Blender add-on`](https://github.com/Hubs-Foundation/hubs-blender-exporter)
can export `glTF` file with Hubs bitECS component data.

[Our online authoring tool Spoke](https://github.com/Hubs-Foundation/Spoke) also
includes component data in the gltf files that it exports and uploads.


### Inflators for glTF

If you want the Hubs Client `glTF` loading mechanism to enable to set up your
custom Component, you need to let it recognize the component.

[Similar to `JSX` inflators map](#entitydef-jsx-prefab), insert a mapping from
a key in `glTF MOZ_hubs_component` to an inflator in `GLTFComponentData` for
inflator parameters and `gltfInflators` for inflators. In this example,
choosing `foo` as a key for `Foo` component.

```
// src/utils/jsx-entity.js
import { FooParams, inflateFoo } from "../inflators/foo";
...
export interface GLTFComponentData extends ComponentData {
  ...
  foo?: FooParams;
  ...
}
...
const gltfInflators: Required<{ [K in keyof GLTFComponentData]: InflatorFn }> = {
  ...
  foo: inflateFoo,
  ...
};
...
```

If you want to insert the same mapping for both `JSX` and `glTF`, insert it to
`CommonData` and `commonInflators` in the file.

TODO: Add an API to register mapping


## More complex add-ons patterns

TODO: Write these sections

### Asynchronous component initialization

```typescript
const FooInit = defineComponent();
const Foo = defineComponent(...);

function* initFoo(world: HubsWorld, eid: number, clearRollbacks: ClearFunction) {
  const xxx = yield* yieldFunction(world, eid);
  clearRollbacks();
  addComponent(world, Foo, eid); 
  Foo.xxx[eid] = xxx;
  ...
}

const jobs = new JobRunner();
const fooInitQuery = defineQuery([FooInit]);
const fooInitEnterQuery = enterQuery(fooInitQuery);
const fooInitExitQuery = exitQuery(fooInitQuery);
export function fooInitSystem(world: HubsWorld) {
  fooInitEnterQuery(world).forEach(eid => {
    jobs.add(eid, clearRollbacks => initFoo(world, eid, clearRollbacks));
  });
  fooInitExitQuery(world).forEach(eid => {
    jobs.stop(eid);
  });
  jobs.tick();
}
```

### Component initialization with Object3D

```typescript
const FooInit = defineComponent();
const Foo = defineComponent(...);

export function inflateFoo(world: HubsWorld, eid: number) {
  addComponent(world, FooInit, eid);
}

const fooInitEnterQuery = enterQuery(defineQuery([FooInit, Object3DTag]));
export function fooInitSystem(world: HubsWorld) {
  fooInitEnterQuery(world).forEach(eid => {
    const obj = world.eid2obj.get(eid)!;
    removeComponent(world, FooInit, eid);
    addComponent(world, Foo, eid);
    Foo.xxx[eid] = something(obj);
    ...
  });
}
```

### Advanced example: Media loader

### Advanced example: PDF loader

### Advanced example: Object Menu


## Handling interactions

Refer to [the interactions documentation](./dev-client-interactivity.html).


## Handling networking

Refer to [the networking documentation](./dev-client-networking.html).
