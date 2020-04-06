---
id: intro-events
title: Hosting Events in Hubs
sidebar_label: Hosting Events in Hubs
---

This document will talk you through the process of using Hubs for an event on [Mozilla Hubs](https://hubs.mozilla.com). We've broken this guide down into different sections that can help you get started with creating and configuring a room, choosing a custom scene, inviting people, and moderating your event. 

If you're new to Mozilla Hubs, check out these getting started guides to familiarize yourself with the platform: 

1. [Getting Started with Hubs](./intro-hubs.html) 
2. [Familiarize yourself with Hubs Controls](./hubs-controls.html)

## Events in Hubs
Hubs is a platform where you can create private rooms and meet with friends in a 3D environment online. Hubs rooms are capped at a room capacity of 24 users, but this limit can be increased to 30. Additional people can also view the room content from the room lobby. Client performance is an important consideration with Hubs, and it will vary based on the devices that your attendees are connecting with. Events in Hubs work best for meetups that are designed to have attendees engaged and participating actively with one another, or as a shared viewing environment for streamed video content. 

If you are interested in hosting a large event with multiple tracks, you may be interested in exploring [Hubs Cloud](./hubs-cloud-getting-started). Hubs Cloud allows you to customize your deployment of the Hubs platform, so that you manage and maintain the system, offers configuration tools for rooms and accounts, and is better suited for larger events. For events that have larger participant interest, we recommend creating several viewing rooms and streaming the primary content to a service like [Twitch](https://twitch.tv)

## Setting up a Room


## Choosing a Scene
With Hubs, you can create your own scenes to use as the environment for your rooms. Any scene can be used to create multiple rooms, and you can [remix existing scenes that have been shared with a Creative Commons license in Spoke](./intro-spoke.html) to make edits and personalize spaces. For events, we've provided a few example scenes below to get you started. 

[Conference Room A](https://hubs.mozilla.com/scenes/GvQthTN/conference-room-a) - A smaller meeting room for professional meetings of up to ten users

[Lake Office](https://hubs.mozilla.com/scenes/QiUmYC3/lake-office) - An open space with low audio attenuation designed to make it easier to break off into smaller groups around the room

[Living Room](https://hubs.mozilla.com/scenes/y7wBpta/better-lit-living-room) - A more casual space that works well for smaller group discussions and for streaming panelists

[Conference Presentation Hall](https://hubs.mozilla.com/scenes/HHKr45j/conference-presentation-hall) - A larger meeting space with room for slides and a speaker on stage

[Outdoor Meeup Space](https://hubs.mozilla.com/scenes/2rEmqCK/outdoor-meetup) - A large, outdoor space with spaces to put large video streams 

[Conference Lobby Hall](https://hubs.mozilla.com/scenes/u3ezwKe/customizable-conference-lobby) - A large space with room to move around to different places and converse, with places to link other rooms

From each of the above scene urls, you can 'Create a Room' directly from the scene page. Alternatively, you can paste the scene URL into an existing room that you have already created and [change the scene from within the room by following these steps](./hubs-room-settings.html#change-the-scene).

## Invitations
By default, Hubs rooms [are private, available only to people who you share the url with](https://blog.mozvr.com/creating-privacy-centric-virtual-spaces/). When planning an event with Hubs, it's important to consider who you want to invite, and only share the link with the attendees you want to have in the space with you. Keep in mind that those attendees will also be able to share the URL, so communicate whether or not how private you would like your event to remain. 

For an additional authentication mechanic, you can use [Discord](https://discordapp.com) and our [Hubs Discord Bot](https://hubs.mozilla.com/discord) to create rooms. This will require that users are a) a member of your Discord server, b) allowed in the channel the room has been bound to and c) signed in before they can access the Hubs room. 

Read more about the [Discord Bot](./hubs-discord-bot.html)

## Moderation & Event Controls
If your event is semi-public or public, you should have a moderation strategy in place. The following links explain the tools that are available to you as the room creator, and how to promote trusted users in the room to also be moderators to help manage a space. 

* [Promoting Room Moderators](./hubs-room-settings.html#promoting-room-moderators) 
* [Temporarily Kick Users](./hubs-room-settings.html#kick-users)

If you are using the Discord Bot for moderation, you can remove a user permanently by revoking their Discord account from being able to access to the specific channel that is used for the Hubs room, or by removing them from your server.  
