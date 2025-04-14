---
id: hubs-cloud-third-party-integrations
title: Recipe: 3rd Party Integrations
sidebar_label: Recipe: 3rd Party Integrations
---

Your hub includes integrations for searching useful content for visitors to spawn into their rooms using the Media Browser. There is built-in support for a variety of sites and search engines, such as [Sketchfab](https://www.sketchfab.com). You can also tweet to share content directly from your hub.

![Hubs Cloud Media Browser](img/hubs-cloud-media-browser.jpeg)

However, before these various content tabs will be enabled for your hub, you will need to add the necessary API keys to enable the integrations.

In the [Admin Console](./admin-getting-started) choose **Server Settings**:

![Hubs Cloud ](img/hubs-cloud-server-settings.jpeg)

There you will find under **API Keys** the following keys you can set to enable these features:

### Sketchfab

Create a [Sketchfab](https://www.sketchfab.com) account and then [Find your API Token](https://help.sketchfab.com/hc/en-us/articles/202600683-Finding-your-API-Token).

### GIFs

Sign up for the [Tenor GIF API](https://tenor.com/gifapi) to get a free API key.

### Videos & Images

Create a [Azure Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/) account and enable the [Bing Video Search API](https://azure.microsoft.com/en-us/services/cognitive-services/bing-video-search-api/) and [Bing Image Search API](https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/).

1. Sign up for an Azure account at [portal.azure.com](https://portal.azure.com).

2. Once signed into Azure, search the services available and create a new Cognitive Services offering. You will need to specify a region and application group to deploy to.

3. When your service has finished spinning up, navigate to the API keys tab.

4. Copy one of your API keys from the Azure portal.

5. In your Hubs Cloud admin panel, navigate to the ‘Server Configuration’ panel and open the ‘API keys’ tab.

6. Paste the Cognitive Services API key into the ‘Bing Search’ text input.

7. Save your changes to deploy the video/image search to your Hubs Cloud media browser.

Note: these APIs are **not free** above 1000 transactions per month. You will be charged for their usage by your Hubs Cloud instance in your Azure account.

### Twitch

Sign up as a [Twitch Developer](https://dev.twitch.tv/) and [Get a Client ID](https://dev.twitch.tv/docs/v5).

### Twitter

Enable visitors to tweet out videos and photos they've taken.

Sign up as a [Twitter Developer](https://developer.twitter.com/) and create an application to generate your keys and tokens. You'll need Consumer keys (API Key and Secret) and Authentication Tokens (Access Tokens and Secret). In App permissions, you'll need Read and Write permissions. Under Authentication settings, enable 3-legged OAuth and add Callback URLs `https://your-hubs-cloud-domain/api/v1/oauth/twitter`. Then add your `https://your-hubs-cloud-domain` to the Website URL. Request email address from users should be disabled.

Once you've added your consumer/access tokens and secrets into the Admin Panel > Server settings menu > API Keys, go to a room (with spawning objects enabled), take a picture with the camera, hover over the photo, and click "Tweet".

Congrats! You've enabled Twitter on your Hubs Cloud instance!

### Analytics and Error Logging

Add [Google Analytics](https://analytics.google.com/analytics/web/) tracking IDs and [Sentry](https://sentry.io/welcome/) DSNs to enable aggregated page tracking and error reporting. Note that full URLs which include room, avatar, and scene identifiers will not be sent to analytics services.
