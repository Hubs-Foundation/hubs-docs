---
sidebar_position: 3
---

# Using an Existing Domain

**Interested in using an existing domain or subdomain for your hub?**

Follow below instructions if you're following Recipe 3. [When should I use Recipe 3?](./domain-recipes.md#when-should-i-use-recipe-3)

If your domains are NOT being used for anything else, we highly recommend setting up your domain to point to AWS Route 53 Hosted Zone. [Instructions here](./domain-recipes.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)
[]

**If you want to use your existing email, see our [Using an Existing Email Provider guide](./existing-email.md)**. Otherwise, walk through the Domain Recipes #3 guide for configuring AWS SES email via stack creation.

### Before creating the stack: SSL Certificates

If you choose not to transfer, you'll need to create two SSL certificates for your existing domain using the AWS Certificate Manager, one in the same region for your stack, and another in us-east-1 (if that's not the region your stack is in.) See the CloudFormation stack creation form in the **'Domain Configuration'** section for full instructions.

Also, if you do not transfer your domain to Route 53, you will need to manually renew SSL certificates you've created in Amazon Certificate Manager each year, and perform a stack update providing the new certificate ARNs. (See below for how to perform stack updates.)

### After creating the stack: DNS Setup

Finally after the stack is created, if you are using an external DNS provider like GoDaddy or Namecheap, look in the stack "Outputs" for the "AddressForRootDomain" field -- you will need to create a new CNAME in your domain's DNS to point there to get your domain pointing to your hub.
