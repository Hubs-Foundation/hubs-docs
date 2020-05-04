---
id: hubs-cloud-faq
title: Hubs Cloud FAQ
sidebar_label: FAQ
---

## Personal vs. Enterprise?

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

## Don't see your question?

If your question is about Hubs, check out the [Hubs FAQ](./hubs-cloud-faq.md)

If your question is about deploying Hubs Cloud to AWS, check out the [AWS Troubleshooting Guide](./hubs-cloud-aws-troubleshooting.md)
