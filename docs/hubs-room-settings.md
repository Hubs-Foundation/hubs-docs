---
id: hubs-room-settings
title: Room Settings
---

## Change the Scene

There are lots of scenes to choose from in our Featured Scenes list and Scenes Database. You can also upload your own using our scene editor [Spoke](./intro-spoke). If you are a room moderator, find the scene browser by opening the dropdown menu and selecting 'Choose a Scene'. 

Note that only featured scenes have been tested for performance across devices. For more information on how featured scenes are selected take a look at our [content curation guidelines](./creators-content-guidelines.md). 

<video autoplay loop muted controls >
  <source src="img/change-the-scene.mp4" type="video/mp4">
  <img src="img/intro-hubs-scene-browser-min.jpeg" alt="Screenshot of the Scene Browser">
  Your browser does not support HTML5 video.
</video>

## Change Room Name

To change the name of a room, room moderators can select 'Room Settings' from the dropdown menu and enter a new name.

## Room Access

By default, rooms are set to "Shared link" mode, where room links contain unique, random identifiers. Sharing this link will give anyone access to the room. You can also set the room to "Invite only" mode, which allows you to generate a link with an additional unique, random identifier. Visitors must then use this invite link to access the room, and the invite link can be revoked to deny future access to the room. When an invite link is revoked, a new one is generated in its place. Users who are already in the room will not be removed from it.

Note: You can also switch from "Invite only" mode back to "Shared link" mode. Since "Shared link" mode is less restrictive, it will allow users with previously revoked invite links to access the room. If you want to prevent this, keep the room in "Invite only" mode.

## Object Permissions

You can specify whether users in the room are able to create and move objects, pin content, and draw with the pen. By default these features are enabled. To toggle them select 'Room Settings' from the dropdown menu and toggle the permissions you want to set. 

## Promoting Room Moderators

When in a room with other trusted users, the room owner can promote other users to also have moderation permissions. Promoted moderators will have all of the same permissions as a room owner. It is important to ensure that users who are promoted to moderator are trusted parties, as they will have additional abilities to rename, change scenes, and close the room. To promote other users to moderators, select the user from the user list and click the 'Promote' button. Users need to be signed-in to be promoted.

## Maximum Capacity

Hubs rooms have a maximum capacity of 25 people in-room to ensure performance across devices. However, many more can watch from the lobby even when the room is full. Users in the lobby can hear what is going on inside the room, and can interact through chat with the people in the space. If a room is full, we recommend turning on "Camera Mode" to broadcast a moderator's view to the lobby. 

## Camera Mode

Camera mode broadcasts a moderator's view to the lobby. This ensures that user's who haven't entered the room are able to see what's going on in the virtual space. To turn on "Camera Mode" select it from the dropdown menu.

Entering camera mode also reveals a button to hide the user interface. This can be helpful when doing screen recordings of an event. 

## Kick Users

To temporarily kick a user from the room, open the avatar menu and select "kick." 

## Discord Authentication 

When you create a room in Hubs, it is private by default. Sharing the link or access code with other people allows them to enter that specific room, so generally, you want to be aware of who has the link.  

You can link a Hubs room to a channel in a Discord server and have your server members join with their Discord accounts. Banning a user from your server or removing them from the channel will prevent them from being able to re-join the linked Hubs room, even if that user still has the link to the room. You can learn more about the Hubs Discord bot [here](./hubs-discord-bot). 

## Favorite Rooms

Add a room to your list of favorites by clicking the star icon in the lower left corner of the screen. Adding a room to your favorites makes it easier to find by adding it to your home screen.

To remove the room from your favorites, open the room and click the star icon again. 

## Close a Room

When you leave a Hubs room, it remains accessible via URL. You can choose to permanently close the room by selecting 'Close Room' from the dropdown menu. Links and codes to the room will no longer work for anyone, including the room owner. 

## Chat Commands

`/leave` - Disconnect from the room.
`/grow` - Increase your avatar's size.
`/shrink` - Decrease your avatar's size
`/duck` - Add a duck to the room.
`/debug` - Toggle physics debug rendering.
`/vrstats` - Toggle stats in VR.
`/scene <scene url>` - Change the scene.
`/rename <new name>` - Renmame the room.
`/fly` - Toggle fly mode.
`/audiomode` - Toggle positional audio (experimental).
