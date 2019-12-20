---
id: hubs-cloud-aws-updating-the-stack
title: Updating the Stack
sidebar_label: Updating the Stack
---

You can change various settings of your hub's stack by performing a stack Update. You will not experience any downtime when making these changes. To Update your stack:

- Select the stack in the CloudFormation console
- Go to Stack Actions -> Update Stack
- Choose "Use the existing template"
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
