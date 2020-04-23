---
id: hubs-cloud-aws-domain-recipes
title: Domain Recipes
sidebar_label: Domain Recipes
---

When creating your Hubs Cloud stack on AWS you will be asked to provide a number of domains:

- Your **Site Domain Name**
- Your **Internal Domain**
- Your **Short Link Domain**
- Your **Outgoing Email Domain**
- Your **Outgoing Email Subdomain Prefix**

This guide provides a few recipes for setting up your domains before creating your stack.

To simplify setup, it's highly recommended you transfer any relevant domains to Route 53, since Hubs Cloud will then be able to manage DNS and SSL certificate renewals for you.

### Recipe 1: Dedicated domain name on Route 53

- You want to run your site on the top level domain `myhub.com`
- `myhub.com` is registered on Route 53.
- You want short links on `myhub.link`, and mail from `mail.myhub.com`
- You are *not* using `myhub.com` for other sites or purposes

#### Recipe:

- Register and set up `myhub.link` on Route 53.
- Specify the following when creating the stack:
  - **Site Domain Name**: `myhub.com`
  - **Site is Set Up On Route 53**: `Yes`
  - **Internal Domain**: `myhub.com`
  - **Short Link Domain**: `myhub.link`
  - **Outgoing Email Domain**: `myhub.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

### Recipe 2: Dedicated subdomain on Route 53

- You want to run your site on the top level domain `hub.mysite.com`
- `mysite.com` is registered on Route 53.
- You want short links on `myhub.link`, and mail from `mail.mysite.com`
- You are *not* using `mysite.com` for other sites or purposes

#### Recipe:

- Register and set up `myhub.link` on Route 53.
- Specify the following when creating the stack:
  - **Site Domain Name**: `hub.mysite.com`
  - **Site is Set Up On Route 53**: `Yes`
  - **Internal Domain**: `mysite.com`
  - **Short Link Domain**: `myhub.link`
  - **Outgoing Email Domain**: `mysite.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

### Recipe 3: Shared subdomain on Route 53

- You want to run your site on the top level domain `hub.mysite.com`
- `mysite.com` is registered on Route 53.
- You want short links on `myhub.link`, and mail from `mail.mysite.com`
- You are *are* using `mysite.com` for other sites or purposes

#### Recipe:

- Purchase, register, and set up `myhub.link` on Amazon Route 53.
- Purchase, register, and set up an *internal domain* on Amazon Route 53. This can be any name you want, and will not be seen by users. For example `mysite-internal.com`.
- Specify the following when creating the stack:
  - **Site Domain Name**: `hub.mysite.com`
  - **Site is Set Up On Route 53**: `Yes`
  - **Internal Domain**: `mysite-internal.com`
  - **Short Link Domain**: `myhub.link`
  - **Outgoing Email Domain**: `mysite.com`
  - **Outgoing Email Subdomain Prefix**: `mail`

### Recipe 4: Domain not on Route 53

- You want to run your site on the top level domain `mysite.com`
- `mysite.com` is *not* registered on Route 53.
- You want short links on `myhub.link`

#### Recipe:

- Purchase, register, and set up `myhub.link` on Amazon Route 53.
- Purchase, register, and set up an *internal domain* on Amazon Route 53. This can be any name you want, and will not be seen by users. For example `mysite-internal.com`.
- If you want a domain other than the internal domain for sent email, purchase, register and set up an *email domain* on Route 53. This will be used for outgoing email. If you have an existing email provider, you don't need a custom email domain and can specify your internal domain. For example `mysite-mail.com`.
- Specify the following when creating the stack:
  - **Site Domain Name**: `mysite.com`
  - **Site is Set Up On Route 53**: `No`
  - **Internal Domain**: `mysite-internal.com`
  - **Short Link Domain**: `myhub.link`
  - **Outgoing Email Domain**: `mysite-mail.com`
  - **Outgoing Email Subdomain Prefix**: `mail`
- Follow the steps around SSL certificates in [Using an Existing Domain](./hubs-cloud-aws-existing-domain.md)

### Recipe 5: Subdomain not on Route 53

- You want to run your site on the top level domain `hub.mysite.com`
- `mysite.com` is *not* registered on Route 53.
- You want short links on `myhub.link`

#### Recipe:

- Purchase, register, and set up `myhub.link` on Amazon Route 53.
- Purchase, register, and set up an *internal domain* on Amazon Route 53. This can be any name you want, and will not be seen by users. For example `mysite-internal.com`.
- If you want a domain other than the internal domain for sent email, purchase, register and set up an *email domain* on Route 53. This will be used for outgoing email. If you have an existing email provider, you don't need a custom email domain and can specify your internal domain. For example `mysite-mail.com`.
- Specify the following when creating the stack:
  - **Site Domain Name**: `hub.mysite.com`
  - **Site is Set Up On Route 53**: `No`
  - **Internal Domain**: `mysite-internal.com`
  - **Short Link Domain**: `myhub.link`
  - **Outgoing Email Domain**: `mysite-mail.com`
  - **Outgoing Email Subdomain Prefix**: `mail`
- Follow the steps around SSL certificates in [Using an Existing Domain](./hubs-cloud-aws-existing-domain.md)
