---
id: hubs-cloud-aws-quick-start
title: AWS Quick Start
sidebar_label: AWS Quick Start
---

## Before creating the Hubs Cloud Stack

1. Create an account on AWS and log into the console.
2. Register or setup any domains in AWS Route 53, you'll need at least 2 domains. For example: `myhub.com` and `myhub.link`. See [Domain Recipes](./hubs-cloud-aws-domain-recipes.md) for more info.
3. Review relevant docs:
   - [Why use Hubs Cloud vs. hubs.mozilla.com?](./hubs-cloud-faq.md#why-use-hubs-cloud-vs-hubsmozillacom)
   - [Personal vs. Enterprise](./hubs-cloud-faq.md#personal-vs-enterprise)
   - [Cost Information](./hubs-cloud-aws-costs.md)
4. Create an SSH keypair to access your servers
   - [Follow AWS guide to create the SSH keypair in your deployment region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)
   - Deployment region is in the upper right corner with your username and support
   - Save the private key using preferred format

## Deploy your Hubs Cloud Stack

If you'd prefer a video tutorial, follow along to [Setting Up Hubs Cloud](https://www.youtube.com/watch?v=MyGJ0s4XjTA) deploying your stack.

1. Go to https://hubs.mozilla.com/cloud and choose which Hubs Cloud product to deploy
2. Click "Continue to Subscribe" on Hubs Cloud Personal aws Marketplace page
3. Click "Continue to Configuration"
4. Select your desired "Region" or in Enterprise select your desired "Delivery Method" then your "Region"
5. Click "Continue to Launch"
6. Change "Select a launch action" dropdown to "Launch CloudFormation" then click "Launch"
7. Select "Next" in bottom right corner of the "Create stack" or "Specify template" page
8. In specify stack details:
   - Name your stack, something like: "your-hub-name-1"
   - Account Configuration Administrator Email Address
     - NO CAPITALIZED LETTERS
     - The admin for your hub
   - For these parameters use [Domain Recipes](./hubs-cloud-aws-domain-recipes.md) for guidance: Site Domain Name, Site is Set Up On Route 53, Internal Domain, Short Link Domain, Outgoing Email Domain, and Outgoing Email Subdomain Prefix
     - Double check for no typos!
   - Choose your `KeyPair` from step 4
   - If you are using an existing domain not on AWS Route 53, you'll need to perform a few extra steps - See [Using an existing domain](./hubs-cloud-aws-existing-domain.md)
   - Choose a setting for `Restrict SSH Access`
   - Review the other options, or keep the defaults. You can update most of these later via a [Stack Update](./hubs-cloud-aws-updating-the-stack.md)
9. Select "Next"
10. Agree to terms of service
11. Wait 20-30 minutes for the stack to complete deploying
    - Any issues? Check out [AWS Troubleshooting](./hubs-cloud-aws-troubleshooting.md) for solutions to common problems.
12. Confirm your `Administrator Email Address` in your inbox, it will be confirming your email in N. Virginia
13. After stack is created, hit your site at your primary domain, wait 20 to 30 seconds
14. Login with your `Administrator Email Address`
15. Proceed with the setup process. Documentation can be found in the [Getting Started with Hubs Cloud](./hubs-cloud-getting-started.md) guide.

**Any issues deploying?**

Check out [AWS Troubleshooting](./hubs-cloud-aws-troubleshooting.md) for solutions to common problems.
