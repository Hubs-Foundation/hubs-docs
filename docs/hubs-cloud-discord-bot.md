---
id: hubs-cloud-discord-bot
title: Recipe: Discord Bot
sidebar_label: Recipe: Discord Bot
---

If you have a Discord server, you can install the [Hubs Discord Bot](./hubs-discord-bot.md) onto your Hubs Cloud server. 

# Discord Setup

You'll need to first set things up on Discord to get your **Bot Token**.

First, visit the [Discord Developer Portal](https://discordapp.com/developers/applications/) and create a new Application for your bot.

![Discord Create Application](img/discord-create-app.png)

Once you've created your app, create a bot user.

![Discord Add Bot](img/discord-add-bot.png)

Unselect the *Public Bot* setting and save changes. Otherwise, other users on Discord could add your bot to their servers.

![Discord Public Bot](img/discord-public-bot.png)

Finally, get your **Bot Token**. You'll need this in the next section.

![Discord Bot Token](img/discord-bot-token.png)

# Server Setup

You will install the Hubs Discord Bot on one of your Hubs Cloud servers.

To proceed, first SSH into one of your servers. To access your servers over SSH, in the the [Admin Console](./hubs-cloud-getting-started.md) choose **Server Access** and follow the guide. Note that 2-factor authentication is set up by default, so you will need a 2FA device with an application installed like Google Authenticator to connect to your servers.

Once you've connected to your server, enter the following command:

