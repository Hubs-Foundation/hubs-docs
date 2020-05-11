---
id: hubs-cloud-aws-backup-and-restore
title: Backup and Restore
sidebar_label: Backup and Restore
---

If something goes wrong and you need to restore from a backup, or you'd like to just make a second hub using the same data from an existing hub, the stack creation form makes it fairly simple to do so.

Your hub's data is made up of two things: an AWS Aurora Serverless database, and an AWS Elastic File Store volume (used for scenes, avatars, etc.) Both of these are backed up for you automatically on a nightly basis. The database is backed up via database snapshots (which can be seen in the RDS console) and the EFS volume is backed up into a Vault in AWS Backup (which can be found in the AWS Backup console.)

**Do you need to update your Hubs Cloud stack from 1.0.0 to 1.1.0?** Follow the guide: [update from Hubs Cloud version 1.0.0 to 1.1.0](./hubs-cloud-aws-updating-the-stack.html#upgrade-to-a-new-stack-release)

### Creating a backup manually

Your hub is backed up automatically every night. If you want to make an up-to-the-minute backup of a hub you can manually create a RDS snapshot and new AWS Backup recovery point via the console.

- It's highly suggested you put your hub into "Offline" mode by performing a [stack update](./hubs-cloud-aws-updating-the-stack.md) before doing so to limit the risk of data being missed.
- To create a database snapshot:
  - Select your database cluster in RDS and under "Actions" click "Take Snapshot".
  - If you're unsure which cluster is your hub's database, it can be found in the stack "Outputs" section under `AppDb`.
- To create a new recovery point:
  - Get the filesystem id from `StorageEFS`, the vault name from `DailyBackupVault`, and the IAM role under `DailyBackupRole` from the "Resources" section of your stack in CloudFormation.
  - In the AWS Backup console, go to "Protected Resources" and select the filesystem id you saw for `StorageEFS`.
  - Click "Create On-Demand backup."
  - Under the "Vault" section select the vault from `DailyBackupVault`, and under the IAM section select "Choose an IAM Role" and select the IAM role from `DailyBackupRole`.

If you are planning on restoring from this backup, before proceeding make sure both the database snapshot and storage backup job have completed. You can check the status of the snapshot via the "Snapshots" section in RDS, and the status of the backup in the "Jobs" section of AWS Backup.

### Restoring from a backup

To restore from a backup, you will [create a new stack](./hubs-cloud-aws-creating-the-stack.md), and you need to provide the necessary information in the stack creation form in the "Restore from Backup" section. Note that you can only restore backups to stacks in the same region as the original stack, since AWS Backup does not currently support cross-region restores. **Do _not_ perform a stack update to an existing stack to try to restore from a backup** -- this will not work and will likely break things. You **must** create a new stack to restore from a backup.

If you want to revert an existing stack to data in a backup, you will first need to delete the stack and then create a new one restored from the backup. Deleting the stack is safe once you have confirmed you have a completed database snapshot and a restore point taken at the time you would like to restore to. However, it is suggested you first create a new, separate stack on a different domain from the backup before deleting the old stack, to confirm the backup contains the data you expect it to.

The info you need to provide can be found in the RDS and AWS Backup consoles:

- The RDS snapshot ID to restore from
- The AWS Backup vault name to restore from
- The recovery point ARN to restore from, from the vault

#### Restoring Secrets

There are some secrets like encryption keys that are needed to restore from a backup. The secrets you need are **not** automatically deleted when you delete a stack, so even if you deleted the stack whose backups you are restoring, the necessary secrets should still be in your AWS account unless you manually removed them. If you **have** gone and deleted these secrets manually, unfortunately you will not be able to restore your backup since these secrets are related to encryption -- you have our sympathies.

- The first secret you'll need is the database secret for the stack whose backups you are restoring. To find this, go to AWS Secrets Manager and look for the secret "_Stack Name_ Database Secret." You'll need to provide the ARN to this secret in the stack create form for the new stack.

- Additionally, there are some secrets stored in AWS Parameter Store. You will **not** need to dig these up. As long as you haven't gone in and deleted them manually, these secrets can be looked up automatically by providing the stack name for the stack whose backup you are restoring from. You'll need to specify these values in the "Backup and Restore" section of the creation form. (Even if you've deleted the stack you are restoring the backups from.)

Once you've filled these values out and create the stack it should be restored from the backup. It should behave identically to the original stack, except you will need to configure the "Server Settings" in the Admin console, which are not backed up. **Note**: if you perform a stack update on a stack that was restored from backup, it is critical you do **not** change the parameters under the "Restore from Backup" section -- leave them filled in and don't touch them!
