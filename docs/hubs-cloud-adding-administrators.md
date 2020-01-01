---
id: hubs-cloud-adding-administrators
title: Adding Administrators
sidebar_label: Adding Administrators
---

Administrators for your hub have full access rights. They can:

- Have access to the [Admin Console](./hubs-cloud-getting-started.md) to update system settings and app configuration.
- [Manage the content library](./hubs-cloud-managing-content.md) and [import content](./hubs-cloud-importing-content.md).
- Have access to the [Scene Editor](./spoke-creating-projects.md) to create and publish new scenes, regardless of settings.

To assign other accounts administrative access, you need to get their account id and then assign administrator rights in the Admin Console.

### Account ID Lookup

Hubs Cloud does not store any personally identifying information in the database. To get another user's account ID to make them an administrator, you will need to have them follow these steps:

- Log in to their account via the "Sign In" link on the homepage.
- Navigate to a room page, or create a new room.
- Open the developer tools for their browser. How-to for [Chrome](https://developers.google.com/web/tools/chrome-devtools) or [Firefox](https://developer.mozilla.org/en-US/docs/Tools).
- In the Console log, near the beginning, they'll need to look for a line that looks like `Logged into account XXXXXXXXXXXXXXX` where `XXXXXXXXXXXXXXX` is a series of numbers. This their account ID.
- It is safe for them to share their account ID, others who have their account ID will not gain access or visibility into their activity if they share it.

### Granting Admin Access

Once you have an account ID you'd like to grant access to, navigate to the **Accounts** section in the Admin Console:

![Hubs Cloud Accounts](img/hubs-cloud-accounts.png)

From there, enter the Account ID you would like to change to administrator under **Search ID** and then click Edit:

![Hubs Cloud Find Account](img/hubs-cloud-find-account.png)

Then set the account to **Is admin** and click **Save**:

![Hubs Cloud Select Admin](img/hubs-cloud-select-admin.png)
