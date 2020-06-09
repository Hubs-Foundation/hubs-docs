---
id: hubs-cloud-aws-existing-domain
title: Using an Existing Domain
sidebar_label: Using an Existing Domain
---

**Interested in using an existing domain or subdomain from a DNS provider like GoDaddy or Namecheap for your hub?**

Excellent. You have a two options.

**One**: Transfer your existing domain to Route 53 to simplify setup and follow Recipe 1 or 2 in the [Domain Recipe guide](./hubs-cloud-aws-domain-recipes.md).

**Two**: Follow our [Domain Recipe #3 guide to use an existing domain NOT on Route 53](./hubs-cloud-aws-domain-recipes.md#recipe-3-domain-not-on-route-53). You still need to register at least 2 new domains on AWS Route 53, then perform the extra steps below: [SSL Certificates](./hubs-cloud-aws-existing-domain.md#ssl-certificates) BEFORE creating the stack and [DNS Setup](./hubs-cloud-aws-existing-domain.md#dns-setup) AFTER creating the stack.

**If you want to use your existing email, see our [Using an Existing Email Provider guide](./hubs-cloud-aws-existing-email-provider.md)**. Otherwise, walk through the Domain Recipes #3 guide for configuring AWS SES email via stack creation.

### SSL Certificates

If you choose not to transfer, you'll need to create two SSL certificates for your existing domain using the AWS Certificate Manager, one in the same region for your stack, and another in US-East-1 (if that's not the region your stack is in.) See the CloudFormation stack creation form in the **'Domain Configuration'** section for full instructions.

Also, if you do not transfer your domain to Route 53, you will need to manually renew SSL certificates you've created in Amazon Certificate Manager each year, and perform a stack update providing the new certificate ARNs. (See below for how to perform stack updates.)

### DNS Setup

Finally after the stack is created, if you are using an external DNS provider like GoDaddy or Namecheap, look in the stack "Outputs" for the "AddressForRootDomain" field -- you will need to create a new CNAME in your domain's DNS to point there to get your domain pointing to your hub.
