---
id: hubs-discord-bot
title: Discord Bot
description: A Hubs room can be linked to a Discord channel, which bridges the chat and/or gives more powerful tools to moderators.
---

## About

The [Hubs Discord Bot](https://github.com/Hubs-Foundation/hubs-discord-bot) makes it easy to connect Hubs rooms to your Discord chat server. When a Hubs room is created by the bot from within a Discord channel, users will be required to authenticate via Discord and then assigned abilities in the Hubs room based on their Discord roles. For example, Discord owners and moderators will be able to change settings on a Hubs room and be able to moderate users in the room.  Chat messages/images will also be bridged both ways between Discord and the Hubs room.  If a Room URL not created by the bot is added to a Discord channel topic, the chat will be bridged, but it will use the standard Hubs permissions.

![Hubs Discord bot](img/discord-bot.jpeg)

## Features

* Allows you to authenticate users joining your Hubs room and enforces using their Discord names.
* Saves a record of text chat and photos created in the Hubs room.
* Broadcasts pinned items to Discord.
* Posts in the Discord channel when someone joins or leaves the Hubs room.
* Posts text chat and images to the Hubs room from Discord.
   * Supported image formats are: PNG, GIF, and JPEG.

### User Permissions

For rooms created via `!hubs create` the room's user permissions will inherit the permissions from the user's Discord role in the channel that the bot is bound to. Specifically:

- The "View Channel" permission is required for them to enter a room.
- The "Kick Members" permission provides them the following capabilities (this basically makes them a moderator):
   - They can kick and mute members in the hubs room.
   - They can create and manipulate objects, draw, fly, share video, etc. even if these are turned off in the room settings.
   - Note: only Discord users with verified emails can gain these permissions.
- The "Manage Channels" permission provides them the following capabilities (this, along with "Kick Members" makes them the equivalent of a room owner):
   - They are able to change the name and scene in the room, modify other room settings, and close the room.
   - Note: only Discord users with verified emails can gain these permissions.
- The Discord permissions can be set either via their Discord role globally, or permissions given on the specific channel to that user/role.



### Bot Permissions

The bot requires several permissions in order to work. 
* "Send messages" and "Embed Links" are necessary in order to bridge between the Hubs room that is linked to a channel and the messages that are sent within the channel on Discord.
* "Manage Webhooks" is necessary in order for the bot to either create or find and use a webhook for bridging chat.
* "Manage Channels" is necessary in order for the bot to set the channel topic and bridge chat.
* "Read Message History" and "Manage Messages" are needed in order for the bot to pin notification messages.
* "Mention @everyone, @here, and All Roles" is necessary in order for the bot to notify the people present when the scheduled notification messages are posted.

Note: We advise that instances of the bot do not ask for the "Manage Channels", "Manage Messages", "Read Message History", and "Mention @everyone, @here, and All Roles", permissions globally when you add the bot to your server, instead we recommend you grant this permission to the bot in specific groups or channels.

### Creating a Bound Hubs Room

Use the `!hubs create` command (optionally with a scene URL and a name) to create a room with permissions that are bound to Discord.  The room URL will be placed in the channel topic and so bridge the chat as well.

Note: There is currently no way to unbind a Hubs room from Discord.  If you no longer want a channel to be bridged to a bound room you will need to create a new regular Hubs room and bridge that unbound room to the channel.

### Bridging a Hubs Room

To bridge the chat between a Discord channel and a Hubs room, simply add the URL of the room to the channel topic to connect the bot to the room and have it start bridging stuff between Hubs and Discord.  Removing the URL from the channel topic will unbridge the room.

Note: Bridging the room won't bind the room to Discord if it's not already a bound room.

### Commands

The following features outline the current bot commands and how they can be accessed by users in the Discord server (in order to use a command, simply send a message that only contains the command in it):

🦆`!hubs` - Lists information about the currently linked room.

🦆`!hubs create` - Creates a default Hubs room and puts its URL into the channel topic. Rooms created with `!hubs create` will inherit moderation permissions from the Discord channel and only allow Discord users in the channel to join the room.  The channel name will be used for the room name.  Note: emoji's aren't supported in channel names.

🦆`!hubs create [environment URL] [name]` - Creates a new room with the given environment and name, and puts its URL into the channel topic. Valid environment URLs include glTFs, GLBs, and Spoke scene pages.  If no name is specified along with the scene the channel name will be used.  Note: emoji's aren't supported in channel names.

🦆`!hubs help` - Get information about how to use the Hubs bot.

🦆`!hubs stats` - Shows some summary statistics about room usage.

🦆`!hubs remove` - Removes the room URL from the topic and stops bridging the Discord channel with Hubs.

🦆`!hubs notify set [datetime]` - Sets a one-time notification to notify @​here to join the room at some future time.

🦆`!hubs notify clear` - Removes all pending notifications.

### Important Notes

* You are advised not to set a Hubs bot created room to be invite only.  The bot cannot join invite only rooms and if you haven't saved your invite code you may permanently lose access to your room if your authorization expires.
* The Hubs bot can't join/bridge non-permission-linked invite only rooms either, they must be set to `Shared link` in order for the bot to join/bridge them.
* The instance you're connecting the Hubs Bot to must have the "Disable room creation" toggle disabled, i.e. non-administrators must be allowed to create rooms, when attempting to use `!hubs create` otherwise the room creation will fail.  The toggle can be found in the Rooms tab of the App Settings section of the Admin Panel and can be re-enabled after you have created your room.
* Using `!hubs remove` or manually removing the URL from the channel topic won't unlink the Hubs room's permissions/authentication from Discord.


### Setting Up/Adding the Hubs Discord Bot

See the [Readme](https://github.com/Hubs-Foundation/hubs-discord-bot/blob/master/README.md) in the Hubs Discord Bot repository for instructions on how to set up an instance of the Hubs bot and add it to your Discord server.

> Note: this is directed at technical users and how/where to host the bot is currently left up to you.
