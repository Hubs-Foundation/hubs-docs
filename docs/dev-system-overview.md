---
id: system-overview
title: System Overview
---

# [The Client](https://github.com/mozilla/hubs) 
Renders almost everything the user sees. The html pages are served by retculum but come from the client.

The 2D front-end is built with React with in-room 3d content built using [networked aframe](https://github.com/networked-aframe/networked-aframe) and three.js. Physics run on the client using Ammo.js/Wasm. 

### [networked aframe](https://github.com/networked-aframe/networked-aframe)
Game networking itself is implemented using the networked-aframe library. currently, authorization and authentication is enforced on a very small subset of messages like joining and kicking, but the capability is there for us to do message-level authorization.

### Ammo.js/Wasm
All simulation is done on clients -- there is no server-side simulation of any kind (eg physics) -- the servers are basically just a message bus that the clients use that does slight modifications and authorization to messages along the way before being broadcast to all peers.  Things like ownership over objects and other incidental concerns to orchestrate the in-game experience among peers is all based upon the client protocol implementation

# [Reticulum](https://github.com/mozilla/reticulum)
a mesh network of erlang/elixir/phoenix nodes, and is responsible for all non-voice/video traffic between users including:
 * Avatar transforms
 * auth/magic sign in links, 
 * decrypt, 
 * scene updates
 * user permission validation 

When you connect to a room, you are connecting to a load-balanced node on this mesh over websockets, and messages are relayed between all users in that room across the mesh via a pub/sub system called phoenix channels.

# [Habitat](https://www.chef.io/products/chef-habitat)
Habitat provides packaging and orchestration. Deployment is orchestrated by Habitat and running on AWS EC2.

# [Dialog](https://github.com/mozilla/dialog)
Voice, video and audio traffic is handled via WebRTC Server based on the open source “mediasoup” project. (We formerly used the “Janus” project as our WebRTC server) Uses an SFU(selective forwarding unit) topology where each participant is sending their data to a central routing machine which then sends back all participants data to each participant.

# Postgres DB
For persistent state, we're not doing anything fancy. we have a postgresql database behind reticulum and a file store for the two methods of durable storage. Reticulum manages both, and when you update permanent room state, pin objects, etc, you are interfacing with APIs in reticulum to update bits on those two backing stores. 
