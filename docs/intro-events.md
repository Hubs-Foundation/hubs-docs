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
Hubs is a platform where you can create private rooms and meet with friends in a 3D environment online. Hubs rooms are capped at a room capacity of 24 users, but this limit can be increased to 30. Additional people can also view the room content from the room lobby. Client performance is an important consideration with Hubs, and it will vary based on the devices that your attendees are connecting with. Mobile devices (phones, standalone headsets) may have performance challenges when there are more than 10 people in an individual room.  

Events in Hubs work best for meetups that are designed to have attendees engaged and participating actively with one another, or as a shared viewing environment for streamed video content. 

If you are interested in hosting a large event with multiple tracks, you may be interested in exploring [Hubs Cloud](./hubs-cloud-getting-started). Hubs Cloud allows you to customize your deployment of the Hubs platform, so that you manage and maintain the system, offers configuration tools for rooms and accounts, and is better suited for larger events. For events that have larger participant interest, we recommend creating several viewing rooms and streaming the primary content to a service like [Twitch](https://twitch.tv)

## Setting up a Room
Your event will need a room, which can be created from the home page at [hubs.mozilla.com](https://hubs.mozilla.com). When you create a room, you are the room's "owner", which grants you full rights and permissions within the room you have created. We recommend that you log in with a Hubs account when you create rooms, since this will ensure that you are still recorded as the room owner even if you change devices. Logged-in room owners have additional configuration tools available to them that will allow for more nuanced control over how visitors can interact in the space.

When you create a room as a signed-in user, you can save the room to your favorites list. Rooms that you have favorited appear on the home page when you're signed in to hubs.mozilla.com. This is a helpful way to save links to rooms that you want to return to. By default, rooms stay open until they are explicitly closed by the room owner or a moderator, and once rooms are closed, they cannot be re-opened.

### Room Permissions

You can specify whether users in the room are able to create and move objects, pin content, and draw with the pen. To set these for your Hubs room, click the menu icon, select 'Room Settings', and toggle the permissions that you want to set. By default, users can create and move objects, pin content, draw, and create cameras. Removing these permissions can help keep rooms performant, and reduces the likelihood that someone will bring content into the room that is undesirable.

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

### Discord Integration
For an additional authentication mechanic, you can use [Discord](https://discordapp.com) and our [Hubs Discord Bot](https://hubs.mozilla.com/discord) to create rooms. This will require that users are a) a member of your Discord server, b) allowed in the channel the room has been bound to and c) signed in before they can access the Hubs room. 

Read more about the [Discord Bot](./hubs-discord-bot.html)

### Embedded Rooms
You can also embed rooms that you own into an existing webpage via an iframe. For larger events that have multiple rooms open at the same time, it can be helpful to embed rooms into a central location to help people find occupied rooms and enter from a single location.

## Moderation & Event Controls
If your event is semi-public or public, you should have a moderation strategy in place. The following links explain the tools that are available to you as the room creator, and how to promote trusted users in the room to also be moderators to help manage a space. Generally, for events that are open to a semi-trusted or anonymous audience, we recommend having multiple moderators to help manage the space. Please keep in mind that anyone who has access to the room link will be able to enter your room unless you have configured the Discord authentication mechanism, or are running a configured Hubs Cloud instance. 

* [Promoting Room Moderators](./hubs-room-settings.html#promoting-room-moderators) 
* [Temporarily Kick Users](./hubs-room-settings.html#kick-users)

If you are using the Discord Bot for moderation, you can remove a user permanently by revoking their Discord account from being able to access to the specific channel that is used for the Hubs room, or by removing them from your server.  


### Code of Conduct
We recommend that events that are semi-public or public have a prominent link to the code of conduct guidelines for the space. You can learn more about Mozilla's own [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) or provide a link to your own when you create an event. We also recommend adding an image to your event rooms that includes a link to your code of conduct, as well as information about how to report violations. 

If you are requesting support from Mozilla to promote or assist with running your event, a code of conduct link is required.

## More Information
If you have additional questions about hosting events or conferences using Hubs, please get in touch by [filling out the Hubs event interest form](https://airtable.com/shrAtlBbxEKkLbMsd) or join the [Hubs Community Discord Server](https://discord.gg/wHmY4nd), and check out the #conferences channel.
