---
id: admin-importing-content
title: Importing Content
sidebar_label: Importing Content
---

The two forms of content you can import into Community Edition are **avatars** and **scenes**. Avatars are 3D figures like robots, humans, and ducks that can be worn by visitors to represent themselves, and scenes are 3D environments like interiors and landscapes that provide visual grounding for a room.

You can import any custom content you've created, either on [demo.hubsfoundation.org](https://demo.hubsfoundation.org), or using the tools like the [Scene Editor](./admin-enable-scene-editor) available on your hub. For more information about the Scene Editor, see [Spoke Documentation](./spoke-creating-projects.md)[^1].

## Admin Import Tool

To start importing content, navigate to the "Import Content" tool from the Admin Console. If you don't remember how to get to the Admin Console, see the [Getting Started](./admin-getting-started) Guide.

[^1]: 'Spoke' is the Hubs Foundation trademarked name used for the Scene Editor on [demo.hubsfoundation.org](https://demo.hubsfoundation.org).

![Administration Import Content](img/hubs-cloud-import-content.jpeg)

Once there, you'll need to specify a URL to import:

![Administration Import Content URL](img/hubs-cloud-import-content-url.jpeg)

<!-- You can enter comma-separated URLs to scenes or avatars on another hub ([example scene](https://hubs.mozilla.com/scenes/rWgv5zN/winter-cheer), [example avatar](https://hubs.mozilla.com/avatars/PcJ8Sxb)). Or, you can specify a link to an [asset pack](./hubs-cloud-asset-packs.md). -->

Once you've specified the content URL, you will see a preview of the content you're planning to import. You can then choose to exclude or include certain items and set special tags:

![Administration Import Content UI](img/hubs-cloud-import-ui.jpeg)

When ready, click the Import button to begin importing your content.

## Special tags
You should also set the proper tags for the imported items for your hub to be ready to use:

- Import at least one **Default** avatar, which new visitors will have by default.
- Import at least one **Default** scene, which new rooms will have by default.
- Import at least one **Base** avatar, which can easily be re-skinned by visitors.
- Optionally **Feature** one or more items, which will cause those items to be easily discoverable by visitors.

For more information about special tags, see [Managing Content](./admin-managing-content).

## Updating Imported Content

To refresh content you've imported, simply import it again. If you've previously imported the same content, the existing avatar or scene in your hub will be updated in-place with the newest version of the imported content.
