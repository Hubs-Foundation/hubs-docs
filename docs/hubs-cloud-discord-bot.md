---
id: hubs-cloud-discord-bot
title: Recipe: Discord Bot
sidebar_label: Recipe: Discord Bot
---

If you have a Discord server, you can install the [Hubs Discord Bot](./hubs-discord-bot.md) onto your Hubs Cloud server. 

## Discord Setup

You'll need to first set things up on Discord to get your **Bot Token**.

First, visit the [Discord Developer Portal](https://discordapp.com/developers/applications/) and create a new Application for your bot.

![Discord Create Application](img/discord-create-app.jpeg)

Once you've created your app, create a bot user.

![Discord Add Bot](img/discord-add-bot.jpeg)

Unselect the *Public Bot* setting and save changes. Otherwise, other users on Discord could add your bot to their servers.

![Discord Public Bot](img/discord-public-bot.jpeg)

Finally, under the OAuth2 panel, you'll need to set a proper redirect URL for your site. Set it to `https://<your site>/api/v1/oauth/discord` replacing `<your site>` with your Hubs Cloud domain.

![Discord OAuth Redirect](img/discord-oauth-redirect.jpeg)

## Key Configuration

First, go to the [Admin Console](./hubs-cloud-getting-started.md) and under "Server Settings" -> "API Keys" you'll need to set the **Discord Client ID**, **Discord Client Secret**, and **Discord Bot Token**

![Discord Admin Configs](img/discord-admin-configs.jpeg)

The **Client ID** and **Client Secret** can be found under the application page on Discord.

![Discord Client Keys](img/discord-client-keys.jpeg)

Your **Bot Token** can be found under your Bot's settings page on Discord.

![Discord Bot Token](img/discord-bot-token.jpeg)

## Server Setup

You will install the Hubs Discord Bot on one of your Hubs Cloud servers.

To proceed, first SSH into one of your servers. To access your servers over SSH, in the the [Admin Console](./hubs-cloud-getting-started.md) choose **Server Access** and follow the guide. Note that 2-factor authentication is set up by default, so you will need a 2FA device with an application installed like Google Authenticator to connect to your servers.

If you are running multiple servers, you *must* run the bot on an *app* server, not a stream server.

Once you've connected to your server, enter the following command in the command shell:

```
curl "https://raw.githubusercontent.com/mozilla/hubs-cloud/master/scripts/install-hubs-discord-bot.sh" | sudo bash

```

After it installs, your bot should now be up and running. Note that if you re-create your server, you'll need to run this command again.

## Inviting Your Bot

The last step is inviting your bot to your server. To do so, go back to the OAuth2 settings for your application and in the **OAuth 2 URL Generator**, select the "bot" scope, and the following permissions:

![Discord Bot Invite Permissions](img/discord-bot-invite-permissions.jpeg)

Then use the generated invite link to add your bot!

