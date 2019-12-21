---
id: hubs-cloud-importing-content
title: Importing Content
sidebar_label: Importing Content
---

The two forms of content you can import into Hubs Cloud are **avatars** and **scenes**. Avatars are 3D figures like robots, humans, and ducks that can be worn by visitors to represent themselves, and scenes are 3D environments like interiors and landscapes that provide visual grounding for a room.

Mozilla offers a number of [Asset Packs](./hubs-cloud-asset-packs.md) you can import to add some initial content to your hub. Additionally, you can import any custom content you've created, either on [hubs.mozilla.com](https://hubs.mozilla.com), or using the tools like the [Scene Editor](./hubs-cloud-enable-scene-editor.md) available on your hub. For more information about the Scene Editor, see [Spoke Documentation](http://hubs.local:3000/docs/docs/spoke-creating-projects.html)[^1].

### Admin Import Tool

To start importing content, navigate to the "Import Content" tool from the Admin Console. If you don't remember how to get to the Admin Console, see the [Getting Started](./hubs-cloud-getting-started.md) Guide.

[^1]: 'Spoke' is the Mozilla trademarked name used for the Scene Editor on [hubs.mozilla.com](https://hubs.mozilla.com).

![Hubs Cloud Import Content](img/hubs-cloud-import-content.png)

Once there, you'll need to specify a URL to import:

![Hubs Cloud Import Content URL](img/hubs-cloud-import-content-url.png)

You can enter comma-separated URLs to scenes or avatars on another hub ([example scene](https://hubs.mozilla.com/scenes/rWgv5zN/winter-cheer), [example avatar](https://hubs.mozilla.com/avatars/PcJ8Sxb)). Or, you can specify a link to an [asset pack](./hubs-cloud-asset-packs.md).

Once you've specified the content URL, you will see a preview of the content you're planning to import. You can then choose to exclude or include certain items and set special tags:

![Hubs Cloud Import Content UI](img/hubs-cloud-import-ui.png)

When ready, click the Import button to begin importing your content.

### Special tags
You should also set the proper tags for the imported items for your hub to be ready to use:

- Import at least one **Default** avatar, which new visitors will have by default.
- Import at least one **Default** scene, which new rooms will have by default.
- Import at least one **Base** avatar, which can easily be re-skinned by visitors.
- Optionally **Feature** one or more items, which will cause those items to be easily discoverable by visitors.

For more information about special tags, see [Managing Content](./hubs-cloud-managing-content.md).

### Updating Imported Content

To refresh content you've imported, simply import it again. If you've previously imported the same content, the existing avatar or scene in your hub will be updated in-place with the newest version of the imported content.
