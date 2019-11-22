---
id: hubs-discord
title: Hubs Discord Bot Instructions
---

We believe that there is a lot of potential with connecting people through embodied 3D spaces. In this email, you'll find instructions for how to invite the Hubs Discord bot to a Discord server. Because this application is in beta, we'd like to remind you that development will be ongoing and there may be changes made to the bot as we continue to evaluate and improve the features. 

If your Discord server is public, we would be happy to join the server so we can be on-hand for any questions that might come up - just send us an invite link! 
Click for Discord Bot Invitation Link Just interested in Hubs? Create a room online! 

# Usage 
The primary function of the bot is to establish a 1:1 linkage between a Discord text channel and a Hubs room. Once rooms are linked, then the bot will do the following: 
* Bridge text chat from the Discord channel into the Hubs room. 
* Bridge text chat from the Hubs room into the Discord channel. 
* Post links in Discord to media (images, videos, models) which are pinned in the Hubs room. 
* Post in the Discord channel when someone joins or leaves the Hubs room, or if administrative stuff happens in the Hubs room. 
When a Hubs room is associated with a Discord channel, users will be assigned abilities in the Hubs room based on their Discord roles. For example, Discord owners and moderators will be able to change settings on a Hubs room and be able to moderate users in the room. Adding the Hubs Bot to a Discord Server: 
1. Give the bot appropriate permissions (see below) on the channels you want it to run in. 
2. Create a webhook named "Hubs" in the channels you want it to run in. It will use this 
webhook to bridge chat and send Hubs status updates. 
3. Try out the bot! Type !hubs in a channel the bot is in to see some things you can do. 
Permissions: The bot requires several permissions in order to work: 
* "Send messages," "Read messages," and "Embed links" are necessary in order to bridge between the Hubs room that is linked to a channel and the messages that are sent within the channel on Discord. 
* "Manage webhooks" is necessary in order for the bot to find and use a webhook for bridging chat. 
* "Manage channels" is necessary in order for the bot to set the channel topic and bridge chat. Note: We do not ask for this permission globally when you add the bot to your server, instead we recommend you grant this permission to the bot in specific groups or channels. 
You can and should assign these on a channel-by-channel basis to the bot role after adding the bot to your guild. 
You can view the bot source code on GitHub. You can also join the Hubs Discord server for help and to see the bot in action. We welcome feedback through email, Discord, or by clicking the 'Feedback' button while using Hubs 


# Discord integration - docs from mozilla github

Logging in via Discord will create an account for the verified email account that is used for the Discord account. Pinning objects will be not be allowed unless you have an email address associated with the account. So now if you come in from Discord you won't be able to pin unless you add your email address to your account. This is so we have a fallback way to let the user log in if they lose their Discord account, etc.

A room can now support the feature of having an optional forced identity provider. For this particular implementation, if a room is marked as requiring a Discord identity, then you will have to be logged in with an account that has a Discord identity before loading the room page. When in a room bound to a specific OAuth identity provider, the user will be disallowed from changing their display name in that room -- they will be forced to use the display name from the OAuth provider. (They can however skin their avatar etc however they want.) This provides room owners the ability to moderate their rooms through the assigned Discord roles based on the user’s Discord server identity.
Room ownership

Rooms created with the Discord integration will be owned by the creator via their Discord-linked account, while other users will have the same capabilities as the owner with regards to managing the room dependent on the Discord server roles assigned to them.
Room binding semantics

Once the Discord bot has been added to a server, a user can run commands (see Commands below) to interact with the bot.

The !hubs create command will enable room binding for the current channel. To start this can be done by anyone but eventually we probably want to only allow users who have "Manage Channels" permission to run these commands.

When the !hubs create command is run on a new channel:

    The bot creates a new room with the default scene (see below)
    The bot stores internal state in reticulum associating the room with the channel
    The channel becomes bound to the room that was just created
    The bot places the room URL in the topic and will be bridged. If the topic is removed or changes to not include the linked Hubs room URL, the room will no longer be bridged.

There are two important considerations for linked rooms:

    Rooms that are created with the bot use the channel permissions to authenticate users to the linked Hubs room. These are bound rooms.
    Hubs room URLs can be added to the topic manually to bridge the rooms, but they will not be bound and can be joined via invitation links without authentication.

The !hubs create command can also specify an environment URL and a name to give the room that will be created and linked in the channel topic.

If someone changes the topic and removes the url, or when !hubs remove is run, the bot removes the room from the topic, but the room doesn't get closed. (for now)
Scene selection

Since the room is created via the bot command, we need a way to let the user choose a scene. There are some mechanisms that allow this:

    Default scene: There will be a global (and perhaps eventually, Hub-specific) default scene choice for new rooms.
    Specifying a scene via !hubs create: The user running the !hubs create command can specify an environment url (Spoke scene page, GLTF file, or GLB file)
    Scene selection on room load: When the owner loads the room, if the default scene is selected, a one-time modal will pop up letting them choose a new scene.
    Scene changing: The room owner will always have the ability to change the scene of the room. When the scene is changed, everyone in the room will see the new scene as it loads

Permissions + Security

There are three enforced permissions that are associated with Discord permissions:

    Kicking
    Muting
    Manage rooms (Change name, scene of a room, or close the room) These permissions should be granted to the owner of the room and any discord user that has "Manage Channels" permission. We'll need to read the permissions data from Discord's API regularly (perhaps on room join) and apply the proper Hubs-level permissions to that users account. Permissions will be room-local for now. (No categories, etc.)

“Joining” is also technically a permission that we grant to all users that have access to the channel that the room is bound to.

A future version of the Discord bot integration, is to implement the "Unpin any object" and "Remove any object" permissions, which we'd grant to the same users (and deny to others.) This would enable the pinning use case for channel rooms whereby a bad actor would not be able to unpin objects they did not create.
Engagement Features

It seems likely these features will potentially be very useful for the Discord community hangout/meetup case:

    Avatar skinning
    Content search (Sketchfab/Poly/YouTube/Giphy)
    Video and volume controls
    Sticky zones
    Basic FTUE tutorial/checklist

Retention + Discovery Features

    When a room is bound to a channel, we should have the bot message the channel when we trigger the web push notifications (a room goes from 0 to 1 members.)
    When a user has chosen "Notify me when others are here" then we should ping them a DM on Discord not send them a Web Push notification.
    Ideally when you install the bot, there should be a default channel it creates with a perma-room (perhaps the admin chooses to opt out or change the name -- default that comes to mind is #hangout), so users can discover that channel to learn about the /room command.

Commands

The following features outline the current bot commands and how they can be accessed by users in the Discord server:

🦆!hubs - Lists information about the currently linked room

🦆!hubs create - Creates a default Hubs room and puts its URL into the channel topic. Rooms created with !hubs create will inherit moderation permissions from this Discord channel and only allow Discord users in this channel to join the room.

🦆!hubs create [environment URL] [name] - Creates a new room with the given environment and name, and puts its URL into the channel topic. Valid environment URLs include GLTFs, GLBs, and Spoke scene pages.

🦆!hubs help - Get information about how to use the Hubs bot

🦆!hubs stats - Shows some summary statistics about room usage.

🦆!hubs remove - Removes the room URL from the topic and stops bridging this Discord channel with Hubs.
Future Consideration: OAuth integration

This is part of the original design more widely concerning OAuth, but is not part of the current implementation of the Discord integration.

Logging in via an OAuth provider will create an account for that user if that browser is not cookied. If cookied it will add the new identity to their existing account. Account can now be in one of three states:

    Authenticatable via email
    Authenticatable via one or more OAuth providers (eg Discord or Slack)
    Authenticatable via both email and one or more OAuth providers

Future Consideration: Room ownership

A room can have an optional owner account id. Rooms created with the Discord integration will be owned by users depending on the role permissions associated with their Discord account. This concept is needed for security enforcement. More generally, we now allow rooms to be able to be taken control of when they are created without an account by users who are cookied, though this will not be the case with Discord-bound rooms. We need more thinking around the complete matrix of permissions and ownership in the future as we add more integrations into the platform.
Future Consideration: Hub abstraction

In the future, we may want to have a 1-1 internal "hub" abstraction to a guild to support these use cases and hang permissions off of, etc. But this hub abstraction will not be exposed to users.
Change Log

5/9/2019 - Update to represent the implementation of the Discord bot and move to the Discord bot GitHub repo