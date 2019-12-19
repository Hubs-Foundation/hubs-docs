---
id: hubs-cloud-aws-quick-start
title: Hubs Cloud AWS - Quick Start
sidebar_label: Quick Start
---

- Create an account on AWS and log into the console.
- Register a new domain name on Route 53 for your hub, and register another domain name on Route 53 for room short permalinks. We like using the `.link` TLD for the permalink domain. So if your hub is `myhub.com` your permalink domain would be `myhub.link`, or something similar.
- Set your console in the top right to one of the supported regions, depending on where you want to create your hub:
  - US East (N. Virginia)
  - US East (Ohio)
  - US West (Oregon)
  - Asia Pacific (Tokyo)
  - EU (Ireland)
- In the EC2 console, create a new SSH keypair, and save the private key. You'll need this to access your servers.
- Go to https://gethubscloud.com which will take you to CloudFormation. Fill out the form to create a new CloudFormation stack.
  - If you are using an existing domain not on AWS Route 53, you'll need to perform a few extra steps -- see the section below.
- The stack takes about 20-30 minutes to initialize.
- After the stack is created:
  - Click on the link in the AWS verification email you received.
  - Hit your site. After 20 or 30 seconds, it should be up.
  - Proceed with the login + setup process.
