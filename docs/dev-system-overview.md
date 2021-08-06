---
id: system-overview
title: System Overview
---

# [The Client](https://github.com/mozilla/hubs) 
Renders almost everything the user sees. The html pages are served by retculum but come from the client.

The 2D front-end is built with React with in-room 3d content built using [networked aframe](https://github.com/networked-aframe/networked-aframe) and three.js. Physics run on the client using Ammo.js/Wasm. 

### [networked aframe](https://github.com/networked-aframe/networked-aframe)
Game networking is implemented using the networked-aframe library. Currently, authorization and authentication is enforced on a small subset of messages like joining and kicking, but the capability is there for us to do message-level authorization.

### Ammo.js/Wasm
All physics simulation is done on the clients -- there is no server-side physics simulation of any kind. The servers are basically a message bus that takes the client messages, does slight modifications and adds authorization, then broadcasts the messages and their updates to all connected peers. Things like ownership over objects and other incidental concerns to orchestrate the in-game experience among peers is all based upon the client protocol implementation.

# [Reticulum](https://github.com/mozilla/reticulum)
A mesh network of erlang/elixir/phoenix nodes, and is responsible for all non-voice/video traffic between users including:
 * Avatar transforms
 * Auth/magic sign in links
 * Decrypt
 * scene updates
 * User permission validation 

When you connect to a room, you are connecting to a load-balanced node on this mesh over websockets. Messages are relayed between all users in that room across the mesh via a pub/sub system called phoenix channels.

# [Habitat](https://www.chef.io/products/chef-habitat)
Habitat provides packaging and orchestration. Deployment is orchestrated by Habitat.

Every AWS EC2 instance is running Habitat and Habitat runs packages such as Hubs, Reticulum, Dialog etc.

# [Dialog](https://github.com/mozilla/dialog)
Voice, video and audio traffic is handled via WebRTC Server based on the open source “mediasoup” project. (We formerly used the “Janus” project as our WebRTC server). It uses an SFU (Selective Forwarding Unit) topology where each participant is sending their data to a central routing machine which then sends back all participants data to each participant.

# Postgres DB
For persistent state, we're not doing anything fancy. We have a postgresql database behind reticulum and a file store for the two methods of durable storage. Reticulum manages both. When you update permanent room state, such as pin objects, etc, you are interfacing with APIs in reticulum to update bits on those two backing stores. 
