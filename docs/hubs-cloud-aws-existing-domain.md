---
id: hubs-cloud-aws-existing-domain
title: Using an Existing Domain
sidebar_label: Using an Existing Domain
---

If you have an existing domain or subdomain from a DNS provider like GoDaddy or Namecheap you'd like to use for your hub, that's fine. You'll still need to register two new domains on AWS Route 53 - one for internal routing and one for your short room permalinks. You'll also need a domain for email if you don't have an email provider. (Hubs Cloud will set up AWS Simple Email Service for you on your email domain.)

You can either transfer your existing domain to Route 53 to simplify setup, or you'll need to perform a few extra steps before and after you create your stack.

### SSL Certificates

If you choose not to transfer, you'll need to create two SSL certificates for your existing domain using the AWS Certificate Manager, one in the same region for your stack, and another in US-East-1 (if that's not the region your stack is in.) See the CloudFormation stack creation form in the 'Domain Configuration' section for full instructions.

Also, if you do not transfer your domain to Route 53, you will need to manually renew SSL certificates you've created in Amazon Certificate Manager each year, and perform a stack update providing the new certificate ARNs. (See below for how to perform stack updates.)

### DNS Setup

Finally after the stack is created, if you are using an external DNS provider like GoDaddy or Namecheap, look in the stack "Outputs" for the "AddressForRootDomain" field -- you will need to create a new CNAME in your domain's DNS to point there to get your domain pointing to your hub.
