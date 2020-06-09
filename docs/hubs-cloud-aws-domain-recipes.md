---
id: hubs-cloud-aws-domain-recipes
title: Domain Recipes
sidebar_label: Domain Recipes
---

When creating your Hubs Cloud stack on AWS you will be asked to provide a number of domains:

Site Domains:

- Your **Site Domain Name**
- Your **Internal Domain**
- Your **Short Link Domain**

Email Domains:

- Your **Outgoing Email Domain**
- Your **Outgoing Email Subdomain Prefix**

This guide provides a few recipes for setting up your domains before creating your stack.

To simplify setup, it's highly recommended you transfer any relevant domains to Route 53, since Hubs Cloud will then be able to manage DNS and SSL certificate renewals for you.

## Recipe 1: Dedicated domain OR subdomain connects to your Hubs + root domain manages internal server

- `myhub.com` OR subdomain: `hub.myhub.com` connects to your Hubs
- `myhub.com` is _NOT_ used for any other purpose or sites

#### Instructions

- Purchase and register 2 domains on Route 53:

  1. `myhub.com` - Houses Hub site domain name + internal server domain
  2. `myhub.link` - Short link domain name

- Specify the following when creating the stack:

  - **Site Domain Name**: `myhub.com` OR `hub.myhub.com`
  - **Site is Set Up On Route 53**: `Yes`
  - **Internal Domain**: `myhub.com`
  - **Short Link Domain**: `myhub.link`

  - **Outgoing Email Domain**: `myhub.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

## Recipe 2: Dedicated subdomain connects to your Hubs + root domain manages internal hubs server

- `hub.mysite.com` connects to your Hubs
- `mysite.com` is _NOT_ used for any other purpose or sites

#### Instructions:

- Purchase and register 2 domains on Route 53:

  1. `mysite.com` - Houses subdomain as Hub site domain name + internal server domain
  2. `myhub.link` - Short link domain name

- Specify the following when creating the stack:

  - **Site Domain Name**: `hub.mysite.com`
  - **Site is Set Up On Route 53**: `Yes`
  - **Internal Domain**: `mysite.com`
  - **Short Link Domain**: `myhub.link`

  - **Outgoing Email Domain**: `mysite.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

## Recipe 3: Shared subdomain on Route 53

- `hub.mysite.com` connects to your Hubs
- `mysite.com` _IS_ used for other sites or purposes

#### Instructions:

- Purchase and register 3 domains on Route 53:

  1. `mysite.com` - Houses subdomain as Hub site domain name + the other sites or purposes at the root
  2. `myhub.link` - Short link domain name
  3. `mysite-internal.com` - Internal server domain. This can be any name you want, and will not be seen by users.

- Specify the following when creating the stack:

  - **Site Domain Name**: `hub.mysite.com`
  - **Site is Set Up On Route 53**: `Yes`
  - **Internal Domain**: `mysite-internal.com`
  - **Short Link Domain**: `myhub.link`

  - **Outgoing Email Domain**: `mysite.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

## Recipe 4: Domain NOT on Route 53

- `mysite.com` is _NOT_ registered on Route 53
- `mysite.com` connects to your hubs OR `hub.mysite.com` connects to your hubs

#### Instructions:

- Purchase and register 2 domains on Route 53 (optional 3 domains):

  1. `myhub.link` - Short link domain name
  2. `mysite-internal.com` - Internal server domain + email domain. This can be any name you want, and will not be seen by users.
  3. _(optional)_ `mysite-mail.com` - Email domain, if using `mysite-internal.com` for emails is not what you want.

- Follow [Using an Existing Domain: SSL Certificates instructions](./hubs-cloud-aws-existing-domain.md)
- Specify the following when creating the stack:

  - **Site Domain Name**: `mysite.com` OR `hub.mysite.com`- not registered on Route 53 + SSL certificates configured in [Using an Existing Domain Instructions](./hubs-cloud-aws-existing-domain.md)
  - **Site is Set Up On Route 53**: `No`
  - **Internal Domain**: `mysite-internal.com`
  - **Short Link Domain**: `myhub.link`

  - **Outgoing Email Domain**: `mysite-mail.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

- After the stack is successfully deployed, follow [Using an Existing Domain: DNS Setup instructions](./hubs-cloud-aws-existing-domain.md)

#### Recipe:

- Purchase, register, and set up `myhub.link` on Amazon Route 53.
- Purchase, register, and set up an _internal domain_ on Amazon Route 53. This can be any name you want, and will not be seen by users. For example `mysite-internal.com`.
- If you want a domain other than the internal domain for sent email, purchase, register and set up an _email domain_ on Route 53. This will be used for outgoing email. If you have an existing email provider, you don't need a custom email domain and can specify your internal domain. For example `mysite-mail.com`.
- Follow the steps around SSL certificates in [Using an Existing Domain](./hubs-cloud-aws-existing-domain.md)
- Specify the following when creating the stack:
  - **Site Domain Name**: `mysite.com`
  - **Site is Set Up On Route 53**: `No`
  - **Internal Domain**: `mysite-internal.com`
  - **Short Link Domain**: `myhub.link`
  - **Outgoing Email Domain**: `mysite-mail.com`
  - **Outgoing Email Subdomain Prefix**: `mail`
- Once the stack is up, follow the steps around DNS in [Using an Existing Domain](./hubs-cloud-aws-existing-domain.md)

### If you run into any rollback issues:

1. Check **Site Domain Name** is typed correctly with no typos.
2.
