---
id: hubs-cloud-aws-domain-recipes
title: Domain Recipes
sidebar_label: Domain Recipes
---

This guide provides a few recipes for registering and purchasing necessary domains before creating your Hubs Cloud stack.

Site domains: **Site Domain Name**, **Internal Domain**, and **Short Link Domain**

Email domains: **Outgoing Email Domain** and **Outgoing Email Subdomain Prefix**

To simplify setup, it's highly recommended you transfer any relevant domains to Route 53, since Hubs Cloud will then be able to manage DNS and SSL certificate renewals for you.

## Is my domain "set up on Route 53"?

1. Your domains are set up to use AWS Route 53 DNS via Hosted Zones and the nameservers have been changed to point to AWS Route 53. These domains were purchased in a DNS provider like Namecheap or GoDaddy. To do so, follow instructions in [Route 53 Hosted Zones](https://console.aws.amazon.com/route53/home#hosted-zones:) to "Create Hosted Zone" and update nameservers on your domain in your DNS provider website like Namecheap or GoDaddy.
2. You've purchased your domain on AWS Route 53 and it shows up in Route 53 Hosted Zones and Registered Domains.

## Recipe 1: Dedicated domain on Route 53

- `myhub.com` **OR subdomain** `hub.myhub.com` connects to your Hubs
- `myhub.com` is **_NOT_** used for any other purpose or sites
- `mysite.com` set up on on Route 53 [(?)](./hubs-cloud-aws-domain-recipes.md#is-my-domain-set-up-on-route-53)

### Instructions:

**[Set up or purchase 2 domains on Route 53](./hubs-cloud-aws-domain-recipes.md#is-my-domain-set-up-on-route-53)**

1. `myhub.com` - Houses Hub site domain name + internal server domain
2. `myhub.link` - Short link domain name

**Next, specify the following when creating the stack:**

| STACK OPTIONS                       | RECIPE 1                           |
| ----------------------------------- | ---------------------------------- |
| **Site Domain Name**                | `myhub.com` **OR** `hub.myhub.com` |
| **Site is Set Up On Route 53**      | `Yes`                              |
| **Internal Domain**                 | `myhub.com`                        |
| **Short Link Domain**               | `myhub.link`                       |
| **Outgoing Email Domain**           | `myhub.com`                        |
| **Outgoing Email Subdomain Prefix** | `mail`                             |

## Recipe 2: Root domain is in-use, configure subdomain for Hubs on Route 53

- `hub.mysite.com` connects to your Hubs
- `mysite.com` **_IS_** used for other sites or purposes
- `mysite.com` set up on on Route 53 [(?)](./hubs-cloud-aws-domain-recipes.md#is-my-domain-set-up-on-route-53)

### Instructions:

**[Set up or purchase 3 domains on Route 53](./hubs-cloud-aws-domain-recipes.md#is-my-domain-set-up-on-route-53)**

1. `mysite.com` - Houses subdomain as Hub site domain name + the other sites or purposes at the root
2. `myhub.link` - Short link domain name
3. `mysite-internal.com` - Internal server domain. This can be any name you want, and will not be seen by users.

**Next, specify the following when creating the stack:**

| STACK OPTIONS                       | RECIPE 2              |
| ----------------------------------- | --------------------- |
| **Site Domain Name**                | `hub.mysite.com`      |
| **Site is Set Up On Route 53**      | `Yes`                 |
| **Internal Domain**                 | `mysite-internal.com` |
| **Short Link Domain**               | `myhub.link`          |
| **Outgoing Email Domain**           | `mysite.com`          |
| **Outgoing Email Subdomain Prefix** | `mail`                |

## Recipe 3: Domain NOT on Route 53

- `mysite.com` is **_NOT_** set up on Route 53 [(?)](./hubs-cloud-aws-domain-recipes.md#is-my-domain-set-up-on-route-53)
- `mysite.com` connects to your hubs **OR** `hub.mysite.com` connects to your hubs

### Instructions:

**[Set up or purchase 2 domains on Route 53 (optional 3 domains)](./hubs-cloud-aws-domain-recipes.md#is-my-domain-set-up-on-route-53)**

1. `myhub.link` - Short link domain name
2. `mysite-internal.com` - Internal server domain + email domain. This can be any name you want, and will not be seen by users.
3. _(optional)_ `mysite-mail.com` - Email domain, if using `mysite-internal.com` for emails is not what you want.

To use an existing email provider, read through our [Using an Existing Email Provider Guide](./hubs-cloud-aws-existing-email-provider.md)

**First, follow [Using an Existing Domain: SSL Certificates instructions](./hubs-cloud-aws-existing-domain.md)**

**Next, specify the following when creating the stack:**

| STACK OPTIONS                       | RECIPE 2                                                                                       |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Site Domain Name**                | `mysite.com` **OR** `hub.mysite.com` + [SSL certificates](./hubs-cloud-aws-existing-domain.md) |
| **Site is Set Up On Route 53**      | `No`                                                                                           |
| **Internal Domain**                 | `mysite-internal.com`                                                                          |
| **Short Link Domain**               | `myhub.link`                                                                                   |
| **Outgoing Email Domain**           | `mysite-internal.com` **OR** `mysite-mail.com`                                                 |
| **Outgoing Email Subdomain Prefix** | `mail`                                                                                         |

**Lastly, after the stack is successfully deployed, follow [Using an Existing Domain: DNS Setup instructions](./hubs-cloud-aws-existing-domain.md)**

### If you run into any issues:

1. Check **Site Domain Name** is typed correctly with no typos.
2. Check AWS Console > Route 53 > [Registered Domains](https://console.aws.amazon.com/route53/home?DomainListing:#DomainListing:) and all of the domains you listed above are registered on Route 53 or inside your Hosted Zones
3. Find the rollback error in the stack output for your region [AWS Troubleshooting: see first stack error event](./hubs-cloud-aws-troubleshooting.md#my-aws-stack-says-rollback-complete-after-deploying-what-went-wrong)
4. Troubleshoot any common errors via [AWS Troubleshooting documentation](./hubs-cloud-aws-troubleshooting.md)
5. Email hubs-support@mozilla.com for additional assistance
