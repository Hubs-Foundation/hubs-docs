---
id: hubs-cloud-faq
title: Hubs Cloud FAQ
sidebar_label: FAQ
---

## Why use Hubs Cloud vs. hubs.mozilla.com?

**Hubs Cloud allows you all the functionality of hubs.mozilla.com and also comes with additional features to customize branding, the url, user accounts, the interface and code inside the hubs client.** You're in control of your Hubs Cloud instance and its data via AWS or DigitalOcean infrastructure, Mozilla simply provides the template and automatic updates. This makes it perfect for creating a totally bespoke Hubs experience.

The max room size is the same as hubs.mozilla.com: 25 avatars per room + 75 to the lobby ([More on room capacity here](./hubs-faq.md#what-is-the-capacity-of-a-hubs-room)).

Try out Hubs via hubs.mozilla.com and when you're familiar and interested in using it for big events, exclusive personal meetups, or for a business, check out [Hubs Cloud](./admin-intro).

Documentation for customizing your Hubs Cloud instance:

- [Customizing hub url](./hubs-cloud-aws-domain-recipes.md)
- Managing accounts via the Admin Panel - _documentation coming soon_
- [Customizing the user interface and client code](./hubs-cloud-custom-clients.md)

## Hubs Cloud Personal vs. Enterprise?

- Personal defaults are lower cost. Enterprise defaults are higher cost but improve site functionality like no database pausing.
- The main difference: Enterprise allows multiple servers. If one goes down unexpectantly, the others will take over. Personal allows only one server.
- Beyond that, they are the same in the options they offer and cost per server is the same. Personal can be configured to be an expensive, highly scalable single server, and vice versa.

## How to change my server size up from a t3.micro to c4.large?

Check out [Updating the Stack](./hubs-cloud-aws-updating-the-stack.md) documentation.

## Can I change the # of servers I am running?

Yes, for Enterprise. [Update the Stack](./hubs-cloud-aws-updating-the-stack.md).

No, for Personal.

## Can I change my domains or mail settings (like change from myhubssite.com to hubs.myhubssite.com)?

No, you'll need to delete the current stack and remake it with those settings.

## Can I update my "Restore from Backup" or "Advanced" settings in Hubs?

No, you'll need to delete the current stack and remake it with those settings.

## How much will Hubs Cloud cost for AWS?

Check out our **rough** estimate guide here: [Estimated Cost Charts (alpha)](./hubs-cloud-aws-estimated-cost-charts.md)

## How many users can Hubs Cloud support?

Please see: [AWS Estimated CCU Limits](./hubs-cloud-aws-estimated-ccu-limits.md)

## Can I use the Mozilla / Hubs logo on my Hubs Cloud site?

Please review our [branding guidelines](./hubs-cloud-branding.md) for information about how the Hubs logos can be used.

## What is my hub stack's admin email address?

See ["Check "What is my hubs stack's admin email address?" docs](./hubs-cloud-aws-troubleshooting.md#then-what-is-my-hub-stacks-admin-email-address)

## How do I lockdown my rooms to specific people?

[See Limiting User Access docs](./admin-limiting-user-access)

## Don't see your question?

If your question is about Hubs, check out the [Hubs FAQ](./hubs-faq.md).

If your question is about deploying Hubs Cloud to AWS, check out the [AWS Troubleshooting Guide](./hubs-cloud-aws-troubleshooting.md).

If you can't find what you need in the rest of the documentation, see the [help page](./help.html) for ways to get in touch.
