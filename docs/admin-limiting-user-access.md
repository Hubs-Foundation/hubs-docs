---
id: admin-limiting-user-access
title: Limiting User Access to your Hub
sidebar_label: Limiting Access
---

This guide shows you how to lockdown your hub and rooms by **account only access** (accounts created by your admin from an email list) or by **using the Hubs Discord bot**.

## Configure your hub to deny users without accounts

To lockdown your instance, you remove account creation for non-admins and lock your instance to account access only. Before or after you lockdown your instance to accounts, as the hub admin, you can create accounts for a list of emails or disable existing accounts.

1. **(Account management) Create accounts for approved emails**
   1. Admin Panel > Accounts menu
   2. Batch create accounts (with optional identities)
      - Single example: email1,identity1
      - Multiple example: email1,identity1;email2;email3,identity3 with spaces;email4
2. **(Account management) Remove access to existing accounts by "Disabling" accounts**
   1. Admin Panel > Accounts menu
   2. Paste email address in "Find an account with an email address" text box
   3. Select "FIND"
   4. Change "State" dropdown to "disabled"
   5. Click "Save"
3. **Remove account creation for non-admins**
   1. Admin Panel > Setup: App Settings
   2. Select "Features" tab
   3. Enable "Disable account creation"
4. **Lock your hub to only accounts can access**
   1. Admin Panel > Setup: App Settings
   2. Select "Rooms" tab
   3. Enable "Require accounts for room access"

**Congrats! You've successfully locked down your instance!**

## Discord Bot OAuth integration

- Create a room via the Hubs Discord bot and the room becomes bound to the security context in discord and the channel
- Room-by-room access or channel-by-channel: If the user does not have access to that room bound channel, they will not have access
- User's identity is tied to their identity in Discord

[Learn more about the Discord bot here](./hubs-discord-bot.md)

[Enable the Discord bot for your Community Edition instance](./hubs-cloud-discord-bot.md)

## Room Access Settings

Individual rooms can also limit access via [Room Access Settings](./hubs-room-settings.md#room-access).
