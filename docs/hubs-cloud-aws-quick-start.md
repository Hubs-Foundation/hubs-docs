---
id: hubs-cloud-aws-quick-start
title: AWS Quick Start
sidebar_label: AWS Quick Start
---

1. Create an account on AWS and log into the console.
2. Register a new domain name on Route 53 for your hub, and register another domain name on Route 53 for room short permalinks. We like using the `.link` TLD for the permalink domain. So if your hub is `myhub.com` your permalink domain would be `myhub.link`, or something similar. For more information about how to specify domains when creating your stack, see [Domain Recipes](./hubs-cloud-aws-domain-recipes.md).
3. Set your console in the top right to the region you will be deploying your stack to.
4. In the EC2 console, create a new SSH keypair, and save the private key. You'll need this to access your servers.
5. Go to https://hubs.mozilla.com/cloud and choose which Hubs Cloud product you'd like to deploy.
   - For common questions like "Should I select Personal or Enterprise?" See our [Hubs Cloud FAQ](./hubs-cloud-faq.md)
6. Review the pricing, then to proceed 'Continue to Subscribe', accept the license, 'Continue to Configuration', choose your region, 'Continue to Launch', and then 'Launch'
7. In CloudFormation, click 'Next' to get the stack creation form.
   - For the domain parameters:
     - If you've created new domains for your stack in Route 53 from step 2, specify your main domain (eg `myhub.com`) for the `Domain Name`, `Internal Domain Name`, and `Outgoing Email Domain`, and your short link domain (eg `myhub.link`) for `Short Link Domain Name`. And specify `Yes - My domain is set up on Route 53.`
     - Or, follow the instructions from [Domain Recipes](./hubs-cloud-aws-domain-recipes.md)
   - Choose your `KeyPair` from step 4
   - Choose a setting for `Restrict SSH Access`
   - Review the other options, or keep the defaults. You can update most of these later via a [Stack Update](./hubs-cloud-aws-updating-the-stack.md).
   - If you are using an existing domain not on AWS Route 53, you'll need to perform a few extra steps -- see [Using an existing domain](./hubs-cloud-aws-existing-domain.md).
8. The stack takes about 20-30 minutes to initialize.
9. You will receive a verification email while the stack is being created to your `Administrator Email Address`, be sure to click through to verify that address.
10. After the stack is created:

- Hit your site at your primary domain. After 20 or 30 seconds, it should be up.
- Log in via your `Administrator Email Address`. You should see the Hubs Cloud Admin Console.
- Proceed with the setup process. Documentation can be found in the [Getting Started with Hubs Cloud](./hubs-cloud-getting-started.md) guide.

**Any issues deploying?**

Check out [AWS Troubleshooting](./hubs-cloud-aws-troubleshooting.md) for solutions to common problems.
