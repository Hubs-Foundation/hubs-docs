---
id: hubs-cloud-customizing-look-and-feel
title: Customizing Look and Feel
sidebar_label: Customizing Look & Feel
---
# An announcement about the Hubs user interface
On January 25, 2021, we released a significant update to the user interface for Hubs on hubs.mozilla.com. This change will not go live on new Hubs Cloud deployments until on or after March 25, 2021. Before the update is released to Hubs Cloud, we encourage administrators of Hubs Cloud deployments to consider their own releases and determine a plan of action for updating to the new UI. 

* If you have not made any changes to your Hubs Cloud client look and feel, your Hubs Cloud instance will be updated on or after March 25th to have the new UI. 

* If you added your own logos or chosen new colors within the Hubs Cloud admin console, these will be applied to the new UI. You may need to review and confirm your color choices when the update is live. 

* If you are using a custom CSS sheet for styles, you may need to modify this CSS file to account for the new user interface styles. Check this page in the coming weeks for additional information. 

* If you are running a custom Hubs Cloud client, you will not automatically receive the new update. You will need to pull in the client changes to your own fork of the client codebase or undeploy your Hubs Cloud custom client to get the new UI automatically. 

* If you do not want to be updated to the new UI, you can deploy a custom client to your Hubs Cloud instance. This will remove your Hubs Cloud instance from the automatic update path, and you will stop receiving updates to the client when we release new Hubs Cloud updates. 

Please note that we are working on tools and documentation to help streamline the transition to the new UI from older versions of the Hubs client. Check this page for updates and additional information, or check out the Hubs Cloud channels in Discord. 

# Deprecated: Updating the look and feel for the original Hubs Client UI

You can completely completely customize the look and feel of your hub by adding custom colors and branding.

First, open the [Admin Console](./hubs-cloud-getting-started.md) then choose **App Settings**:

![Hubs Cloud App Settings](img/hubs-cloud-app-settings.jpeg)

From there, you can replace all of the various images your hub by choosing **Images**:

![Hubs Cloud Image Settings](img/hubs-cloud-image-settings.jpeg)

The result? Branding on the landing page and loading page:

![Hubs Cloud Custom Branding](img/hubs-cloud-custom-branding.png)

Additionally you can add completely customized color schemes. Navigate to **Themes** and paste a JSON array describing your desired themes like the example below:

```json
[
  {
    "id": "hubs-default",
    "default": true,
    "name": "Hubs Default",
    "variables": {}
  },
  {
    "id": "hubs-dark-mode",
    "darkModeDefault": true,
    "name": "Hubs Dark Mode",
    "variables": {
      "text1-color": "#ffffff",
      "text1-color-hover": "#E7E7E7",
      "text1-color-pressed": "#DBDBDB",
      "text2-color": "#E7E7E7",
      "text2-color-hover": "#F5F5F5",
      "text2-color-pressed": "#DBDBDB",
      "text3-color": "#BBBBBB",
      "text3-color-hover": "#C7C7C7",
      "text3-color-pressed": "#ADADAD",
      "text4-color": "#E7E7E7",
      "basic-color": "#3A4048",
      "basic-color-hover": "#4B5562",
      "basic-color-pressed": "#636F80",
      "basic-border-color": "#5D646C",
      "secondary-color": "#3A4048",
      "secondary-color-hover": "#5D646C",
      "secondary-color-pressed": "#282C31",
      "background1-color": "#15171B",
      "background2-color": "#282C31",
      "background3-color": "#3A4048",
      "background4-color": "#5D646C",
      "loading-screen-background": "radial-gradient(50% 50% at 50% 50%, #15171B 0%, #282C31 100%)",
      "border1-color": "#3A4048",
      "border2-color": "#5D646C",
      "border3-color": "#5D646C",
      "outline-color": "#ffffff",
      "action-color": "#ff3464",
      "action-color-highlight": "#ff74a4",
      "background-hover-color": "#aaaaaa",
      "notice-background-color": "#2f80ed"
    }
  }
]
```

Use the boolean attributes, `"default"` and `"darkModeDefault"` to set a default theme from your custom themes array.

You can refer to this color legend to see the effect your color choices will have on your hub's styling:

![Hubs Cloud Color Legend](img/hubs-cloud-color-legend.jpeg)
