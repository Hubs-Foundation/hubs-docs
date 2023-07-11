---
id: setup-cloud-migrate
title: Migrating Hubs Cloud Data from AWS
---

_This guide walks you through the steps of migrating Hubs-Cloud data on AWS to a managed Hubs Subscription._

**Table of Contents**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Introduction](#introduction)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Prerequisites](#prerequisites)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part A: SSH Into Your Hubs Cloud Instance](#part-a-ssh-into-your-hubs-cloud-instance)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part B: Locate Your turkeyauthtoken](#part-b-locate-your-turkeyauthtoken)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part C: Migrate Your Data](#part-c-migrate-your-data)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Troubleshooting](#troubleshooting)

---

## Introduction

**BE ADVISED: All data on your Hubs subscription instance will be deleted upon asset migration. Hubs Cloud data will _not_ be automatically deleted.**

This migration tool allows subscribers to Personal and Professional Plans to migrate data from an existing Hubs-Cloud instance on AWS to their Hub. This tools tranfsers the following data:

- All media assets hosted on the server, including videos, images, and 3D models.
- Admin panel settings including app-settings, logos, themes, and scene & avatar discoverability.
- Account information of all users who have signed into your hub to create rooms or scenes.
- Existing scenes and rooms (the root domain of these URLS will change, however the unique room and scene identifiers will remain the same).
- Spoke project data.
  - Be advised, the data within spoke projects **is not manipulated** during this process. This means that any spoke elements pointing to media urls hosted on the hubs-cloud server **will not be changed** to point to rehosted media urls on the new server.

When migrating it is important to consider the data storage limits of the target Hubs subscription instance. There is currently no mechanism for warning you that you will exceed the target instance's capacity before migrating your hubs-cloud data.

If you need more assistance, we recommend following along with our Hubs-Cloud Data Migration Tutorial Video {LINK TBD}

## Prerequisites

- An active subscription to a Personal or Professional Plan and access to your subscription dashboard.
- An existing Hubs Cloud instance with servers `online` and access to the AWS dashboard.

## Part A: SSH Into Your Hubs Cloud Instance

1. Locate the name of your EC2 instance in AWS.

   - Navigate to EC2 in the AWS dashboard and select "instances" in the left-hand toolbar.
   - Copy the randomly generated instance name (e.g. "priceless-seeker")

2. Locate the SSH key pair used to deploy your EC2 instance.

   - When creating your Hubs Cloud instance, you should have saved this in your personal files.

   - <u>**If you have lost your SSH key pair, the simplest solution is to create a copy of your instance's EC2 launch template and update its Auto Scaling Group, which will create a new key pair:**</u>

     - Navigate to EC2 in the AWS dashboard, select “Instances” in the left-hand toolbar, and select the hubs-cloud you are attempting to migrate.

     - Within the instance “Details”, identify the instance’s “Auto Scaling Group Name” (e.g. MozillaFest-app).

     - Navigate to “Auto Scaling Groups” and click “Launch Configurations”, ignoring any warnings by clicking "View Launch Configurations".

     - Click the checkbox next to the Launch Configuration that begins with the Auto Scaling Group Name of the EC2 instance you are attempting to migrate (e.g. “MozillaFest-AppLaunchConfiguration-DwoowR1eZ7Fi”).

     - Once selected, go to "Actions" and select "Copy Launch Configuration".

     - At the bottom of the next page in the "Key Pair (Login)" section, select "Create a new key pair" in the "Key Pair Options" drop-down.

     - Input a name for the new key pair you would like to create and click "Download Key Pair". **Make sure you save this file to be used to SHH into your instance.**

     - Click "Create launch configuration". You will now attach the launch configuration to the Auto Scaling Group of your instance. Return to the "Auto Scaling Groups" in the left-hand toolbar and click on the Group that matches your EC2 instance.

     - In details, scroll down to launch configuration and click "Edit". In the dropdown, select the new launch configuration and click update.

     - You now have to cycle your EC2 instance for the update to take place. The simplest way to do this is to terminate the current instance and wait for the Auto Scaling Group to create a new one. Go to "Instances" in the left-hand toolbar, select the check mark next to your instance, click "Actions" and "Terminate".

     - Wait 10-20 minutes for the new instance to be created. You should be able to see that it is using the new Key Pair in the instance's details. You should now be able to SSH into your instance.

3. SSH into your hubs-cloud instance using the following command with the corresponding parameters from previous steps:\
   `ssh -i <path-to-ssh-key-pair> ubuntu@<EC2-instance-name>.<your-hubs-cloud-instance's-domain>`

4. You will be prompted to enter your 2 factor verification code. If you have not yet set up 2FA for your Hubs Cloud instance, go to the "Server Access" tab in your Hubs Cloud instance's admin panel and use the QR code.

## Part B: Locate Your `turkeyauthtoken`

1. Open the [developer tools](https://support.monday.com/hc/en-us/articles/360002197259-How-to-open-the-developer-console) in the subscription dashboard and navigate to the “Console” tab.

2. Run the following code in the console to get your token: `console.log(RegExp("_turkeyauthtoken"+"=[^;]+").exec(document.cookie)[0].slice(17))`

3. Copy the output. **Please note that turkeyauthtokens are only valid for 12 hours.**

## Part C: Migrate Your Data

1. Run the following command inside of your hubs-cloud instance SSH connection:\
   `curl https://raw.githubusercontent.com/mozilla/hubs-cloud/feature/turkeyPackNGo/scripts/turkey-pack-n-go.sh > turkey-pack-n-go.sh && sudo bash turkey-pack-n-go.sh`

2. When prompted, input the target hub's `turkeyauthtoken`.

3. When prompted, input the target hub's native hub domain (e.g. `mozfest.dev.myhubs.net`).

4. Wait for the migration process to complete. **Do not close our of your ssh connection until the transfer is complete.** The required time will vary depending on how much data you are attempting to transfer. In our test with 13gb of data and a t3.medium instance, the process took 50 minutes.

## Troubleshooting

- If you have followed domain recipe 3 and have an atypical domain for your hubs cloud instance, you need to use the domain in Route 53 that was originally associated with your hubs-cloud instance.

- If you get a permission error when trying to use your SSH key pair, you may need to run `chmod 0400 {filename}` to allow your computer to utilize it.

- If you recieve error saying `Unable to acquire the dpkg frontend lock` when running the migration command, you may need to retry adding `sudo` to the command or after rebooting your EC2 instance.
