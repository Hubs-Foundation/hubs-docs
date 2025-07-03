---
id: admin-managing-content
title: Managing Content
sidebar_label: Managing Content
---

In Hubs and Spoke, visitors can create their own avatars and scenes. They can then offer to share that content with others, which will let visitors discover the content through tools like the Media Browser.

However, as the administrator of a hub, you don't always want the content contributed by visitors to be surfaced. For example, it may contain inappropriate or illegal content. Hubs Community Edition comes with a set of content moderation tools, so you can fully control and filter the content submitted by your visitors.

## Content Pipeline

When a visitor creates a custom avatar or scene, they are offered the option to mark it as *remixable* and/or *promotable*. *Remixable* content confers a Creative Commons 3 license to the content so others are free to use or modify it, and *promotable* content will be enqueued for review to be added to your hub's content library. Once it is approved, content in the library can be discovered by users through tools like the Media Browser.

All content marked as *Promotable* will be added to the **Pending Scene/Avatar Queue** when it is either created or updated. You can find these queues in your [Admin Console](./admin-getting-started):

![Administration Pending Queue Menu](img/hubs-cloud-pending-queue-menu.jpeg)

### Approving Content

When viewing a queue, you will see a list of all the unreviewed scene or avatars that have been created or updated. From here, you have to decide if you are going to **Approve** or **Deny** the item by clicking one of the buttons on the far right:

![Administration Pending Scene](img/hubs-cloud-pending-scene.jpeg)

- **Approving** an item will remove it from the queue and add it to the content library. If it's an update, the changes will be applied to the content library. Visitors will be able to discover the item through the Media Browser.

- **Denying** an item will remove it from the queue and *not* add it to the content library. The item will not be removed, and will be accessible to anyone who has the URL. However, visitors will not be able to discover it through the Media Browser.

You can browse all of the approved content in the content library via the **Approved Scenes** and **Approved Avatars** panel in the Admin Console.

### Featuring Content

In addition to approving content, you can also **feature** content. Featuring content will place it on the **Featured** tab in the Media Browser, which will increase its visibility to your visitors:

![Administration Featured Content](img/hubs-cloud-featured.jpeg)

To feature content, first you'll need to navigate to the content in the **Approved Scenes** or **Approved Avatars**. Once you've found content you'd like to feature, just click the **Feature** button. You can un-feature content that has been featured by using the **Unfeature** button.

![Administration Pending Scene](img/hubs-cloud-approved-scene.jpeg)

### Editing content

To update content, click on the **Edit** button at the far right of the list for the item you want to edit. There you can edit the name, status, and tags of the item:

![Administration Edit Scene](img/hubs-cloud-edit-scene.jpeg)

The **status** for the item can be set to **active** or **delisted**. When an item is delisted, it is effectively removed from the content library.

In addition, you can add **tags** to an item. Tags are used to confer special behavior to items, and also to assist with search.

#### Special Tags

Special behavior can be added by giving one of the **special tags** to an item:

- **`default`**
  - Giving an avatar a `default` tag will assign it to new visitors. If multiple default avatars exist, one will be picked at random.
  - Giving a scene a `default` tag will assign it to new rooms. If multiple default scenes exist, one will be picked at random.
- **`base`**
  - Giving an avatar a `base` tag will surface it in the Avatar Editor, so it can be used as a base model for re-skinning.
  - This tag has no effect on scenes.
- **`featured`**
  - Giving a scene or avatar a `featured` tag will add it to the **Featured** list in the Media Browser.
