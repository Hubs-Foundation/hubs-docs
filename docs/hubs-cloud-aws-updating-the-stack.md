---
id: hubs-cloud-aws-updating-the-stack
title: Updating the Stack
sidebar_label: Updating the Stack
description: Instructions on how to update your Hubs Cloud instance on AWS
---

You can change various settings of your hub's stack by performing a stack Update. You will not experience any downtime when making these changes. To Update your stack:

- Select the stack in the CloudFormation console
- Go to Stack Actions -> Update Stack
- Choose "Use current template"
- Review the parameter selections and choose 'Update'

Some of the things you can do via a stack update:

- Change the number and type of servers
- Switch your hub into Offline Mode to save costs (and redirect to a URL)
- Add or change a monthly database budget or adjust storage limits
- Add or remove an Application Load Balancer
- Disable or enable database auto-pausing
- Change the database max ACU capacity
- Change the SSH keypair used by your servers

Some things you should **not** update or change after the stack is created, and should leave as-is:

- Your domains or mail settings
- Everything under **Restore from Backup** section (to restore from a backup, see [Backup and Restore](./hubs-cloud-aws-backup-and-restore.md))
- Everything under **Advanced**

## ✨📝 Upgrade your Hubs Cloud template to the latest

Infrequently, we'll need to update the Hubs Cloud template which follows this manual update workflow.

Updating the template changes the underlying aws infrastructure or services such as: machine images, lambdas, autoscaling groups, or machine startup scripts.

💾 Before following the steps below, make sure you've backed up your stack just in case: [💾 Backup and Restore](./hubs-cloud-aws-backup-and-restore.md)

1. 🔎 **Determine whether your stack is Hubs Cloud Personal, Enterprise single server, or Enterprise multi-server**
   1. Cloudformation > Stacks > Select your stack > Parameters tab
   1. Does your stack have # of App Servers or # of Streaming Servers listed?
      1. If yes, you have Enterprise multi-server
      1. If no, you have Personal or Enterprise single server
1. 💤 **Update your stack to Offline Mode see [⬆️ Updating the stack](./hubs-cloud-aws-updating-the-stack.md)**
1. ⌛ **Wait for the Offline Mode update to complete**
1. 📎 **Next, get the latest Template URL from the AWS Marketplace flow (_DO NOT CREATE A NEW STACK_)**
   1. Open new tab and go to [hubs.mozilla.com/cloud](https://hubs.mozilla.com/cloud)
   1. Select Personal or Enterprise (depending on step 1) then go through the AWS Marketplace flow, **but do not create the stack**
   1. Continue to subscribe --> Continue to config --> Continue to Launch --> Choose Action Launch Cloud Formation --> Launch
   1. Go to "Create stack" page: Step 1 Specify template page
   1. Copy **"Amazon S3 URL"** from Specify template section
1. 📝 **Replace the current template of your live stack**
   1. Cloudformation > Stacks > Select your stack
   1. Click Update
   1. Select "Replace current template"
   1. Paste previously copied **"Amazon S3 URL"** from step 4 in Amazon S3 URL section
   1. Click Next
   1. ✅ Do all filled in values look correct? If they do **NOT** look correct, then you may have copied the wrong Personal/Enterprise template! Go back to replace template step. Then copy and paste the correct template from step 4 again.
1. ⌛ **Finish the stack update with the new template stay in Offline Mode**
1. 🌅 **After the update is complete, [⬆️ update the stack](./hubs-cloud-aws-updating-the-stack.md) to Online Mode (out of Offline Mode)**
1. 🎉 **Finished! Congrats!** 🎉
