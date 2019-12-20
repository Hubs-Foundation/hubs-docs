---
id: hubs-cloud-aws-creating-the-stack
title: Creating the Stack
sidebar_label: Creating the Stack
---

To create the stack:

- Set your console in the top right to one of the supported regions, depending on where you want to create your hub:
  - US East (N. Virginia)
  - US East (Ohio)
  - US West (Oregon)
  - Asia Pacific (Tokyo)
  - EU (Ireland)
- In the EC2 console, create a new SSH keypair, and save the private key. You'll need this to access your servers.
- Go to https://gethubscloud.com which will take you to CloudFormation.

There are a variety of parameters that can be set when creating the stack. For more information, instructions are detailed in the stack creation form, displayed below.

For help choosing the settings in **Domain Configuration**, see [Domain Recipes](./hubs-cloud-aws-domain-recipes.md).

For help with the **Restore from Backup** section, see [Backup and Restore](./hubs-cloud-aws-backup-and-restore.md).

This is the stack creation form you'll see on AWS after visiting https://gethubscloud.com:

![Stack-Create](../img/hubs-cloud-aws-stack-setup.png)
