---
id: hubs-cloud-aws-updating-the-stack
title: Updating the Stack
sidebar_label: Updating the Stack
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

## Upgrade to a new stack release

Because the 1.0.0 to 1.1.0 update added a new service (a TURN server) to the AWS Hubs Cloud Template, we need to follow a more hands on process than future Hubs Cloud updates will use.

Before following the steps below, make sure you've backed up your stack just in case: [Backup and Restore](./hubs-cloud-aws-backup-and-restore.md))

1. Put your stack into offline mode
2. Once complete, go to the AWS Marketplace and go through the flow to create a new stack, **but do not create the stack**
3. In the Cloudformation step, **copy** the template URL for the new stack
4. Then, go to your actual live stack and perform an update
5. Choose Replace Template and **paste** your copied new stack template URL as the template
6. Perform the stack update (leaving the stack in offline mode)
7. After the update is complete, perform another stack update to take the stack out of offline mode

#### Check if you're on version 1.1.0

1. Go to your hosted Hubs Cloud domain and add `?force_turn=true` to your URL
2. Create a room
3. In another tab in Firefox put `about:webrtc` in the url bar
4. You should see the candidates negotiated say "relay"
