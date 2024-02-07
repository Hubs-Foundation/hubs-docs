---
sidebar_position: 10
---

# Cost and Minimizing Costs Information

This document explains how Hubs Cloud costs work. Although your hub is designed to minimize AWS costs as much as possible, we go into detail on how to minimize them even further for your stack.

If you'd like to estimate the costs for your event:

- Best Accuracy Cost Estimate - use AWS Cost Explorer
- Calculate and estimate the cost of your event
- Recommended Server Types

See our [Estimating Costs and Charts (Alpha)](./estimating-cost.md) page.

**Minimizing Costs Primer**

- [How do costs work for Hubs Cloud?](./cost-saving.md#how-do-costs-work-for-hubs-cloud)
- [Minimizing costs - Recommended user story](./cost-saving.md#minimize-your-costs---a-user-story)
- [Minimizing costs - Settings in stack template](./cost-saving.md#stack-cost-management-options)

## How do costs work for Hubs Cloud?

We've done our best to minimize costs in the template as much as possible. Your primary costs will be the EC2 AWS Server types you use hourly, the serverless hourly database costs, EFS storage, and, if you do not switch to Cloudflare, data transfer costs.

EC2 instances, while "Online", will cost the [minimum cost](./estimating-cost.md#estimated-cost-charts) per hour per server for your instance AWS server type [(?)](./estimating-cost.md#aws-server-type-recommendations). This minimum cost is hourly regardless of how many people connect at a time. You can manually turn off your EC2 instance + database via turning on [**Offline mode**](./cost-saving.md#offline-mode---manual) where no one can connect to your server at the time.

Database costs is the largest factor next to EC2 instance, you can set [**database pausing**](./cost-saving.md#database-pausing---automatic) on to stop costs incurring when no one is connected.

[See our (Alpha) Cost Charts for more information on AWS Server Types and Minimum EC2 Costs.](./estimating-cost.md#estimated-cost-charts)

[For minimizing your costs, see our Minimize your Hubs Cloud Costs - A User Story](./cost-saving.md#minimize-your-hubs-cloud-costs---a-user-story)

## Factors creating AWS cost estimates

Your hub is designed to minimize AWS costs. Your primary costs will be:

- AWS Server Type on AWS EC2 instances
- Number of servers
- Database usage
- Storage for 3D assets for scenes and avatars
- Data transfer costs
- Domain costs ($1 per domain/mo.) + $0.40/mo for the database secrets

## Detailed Breakdown

As you use your hub, you will see AWS costs:

- EC2 instances: the stack configuration lets you choose how many instances to use, a single t3.micro is needed by default. At time of this writing that costs approx \$8/mo.
- An [Aurora serverless](https://aws.amazon.com/rds/aurora/pricing/) database: you will be charged for database usage. At the time of this writing \$0.12 per hour used, rounded to the nearest 10 minutes. If you've enabled database auto-pausing in your stack configuration (the default) then you will only pay for the database when visitors are accessing your site. If you are concerned about excessive database costs, you can set a budget in the stack settings that will cause your stack to be put into Offline mode automatically if your budget is exceeded. (which will shut down all the servers, including the database)
- [EFS](https://aws.amazon.com/efs/pricing/) storage: you will be charged for storage of uploaded scenes and avatars. At the time of this writing approx $0.30/gb month and $0.10/gb month for data that hasn't been accessed in 30 days.
- [Cloudfront](https://aws.amazon.com/cloudfront/pricing/) data transfer costs.
- There are a variety of lambdas used for doing image resizing, video transcoding, etc subject to [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing) but unlikely to exceed free tier levels.
- You will also be paying $1/mo for each of your Route 53 domains and also $0.40/mo for the database secret.

Note that you can significantly save data transfer charges by switching your CDN to Cloudflare. In your hub's admin console, go to the "Data Transfer" page to see how.

If you'd like to maximize your cost savings, you can perform a stack update to switch the stack into "Offline" mode when you are not using it, though this likely unnecessary except for cases where you are running at a higher capacity settings than the defaults.

To roughly estimate your costs, check out our [Estimated Cost Charts (alpha)](./estimating-cost.md).

To more accurately predict future costs use [AWS Cost Explorer for your instance](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html).

## Minimize your Costs - A User Story

Our recommendation to minimize costs for automatic settings is to turn [**database pausing**](./cost-saving.md#database-pausing---automatic) on by default. When no one is using your hub, turn your hub to [**Offline mode**](./cost-saving.md#offline-mode---manual) or a small instance type like **t3.medium**. Also use a Cloudflare worker as your content CDN.

### Before your event: Development

For development with only a few users connecting + setting rooms + scenes, we recommend at least a **t3.medium** instance [(?)](./estimating-cost.md#aws-server-type-recommendations). When not in use, set your instance to [**Offline mode**](./cost-saving.md#offline-mode---manual). Then switch back to Online when beginning development again.

### Before your event: 1.5 hours

If your instance is in [**Offline mode**](./cost-saving.md#offline-mode---manual), manually update the stack to **Online** and wait 10 minutes.

After, at least 1 hour before event, manually update the stack to scale up your AWS Server Type. For example 1 hour before your event, [update the stack](./updating-the-stack.md) from a **t3.medium** to **c4.large** [(?)](./estimating-cost.md#aws-server-type-recommendations).

### During your event

If you notice performance issues, you can ad hoc [update the stack](./updating-the-stack.md) up more from a **c4.large** to **c5.2xlarge** [(?)](./estimating-cost.md#aws-server-type-recommendations). Your users in the rooms will have a brief freeze/voice drop while the users roll to the new servers.

### After your event

Scale down your AWS Server Type by [updating the stack](./updating-the-stack.md) from the **c5.2xlarge** to **t3.medium** [(?)](./estimating-cost.md#aws-server-type-recommendations) when finished or there are less users connected.

### When no one is connecting to your instance for a long time

You can turn your hub to [**Offline mode**](./cost-saving.md#offline-mode---manual) where no one can connect to your hub or a redirect URL, if specified. Via **Offline mode** all costs except for asset storage like backups, scenes, and avatars are \$0.

## Stack Cost Management Options

To enable these options, follow [Update the Stack instructions](./updating-the-stack.html).

- Enable **Auto-Pause Database**. On by default for Personal and settable by Enterprise.
- Toggle **Offline mode** to "Online" to "Offline" manually. Your EC2 and database costs will be \$0/hour when you've turned your servers off.
- Set **Account Monthly Database Budget**
- Enable Content CDN to Cloudflare workers

### Database Pausing - automatic

If **Auto-Pause Database** or **database pausing** is "Yes - Pause database when not in use", after no one has connected to your instance for a while, your database and the costs incurred by your database will stop until a user connects again. It takes 1-3 minutes for the database to turn back on and allow the first user to connect. Subsequent connections will occur quickly afterward.

To enable database pausing, follow [Update the Stack instructions](./updating-the-stack.html).

### Offline Mode - manual

When you set **Offline mode** to "Offline", you've completely turned off your servers and stopped all EC2 costs + database costs. You're still paying for storage for your backups and data. No one can connect to your hub while your servers are "Offline". While "Offline," your hubs instance will redirect you to the specified offline url.

Turning **Offline mode** to "Offline" to "Online" and vice versa is a manual process. Wait 10 minutes afterward to connect.

To toggle Offline/Online, follow [Update the Stack instructions](./updating-the-stack.html).

### Monthly Database Budget - automatic

Careful with the **Monthly Database Budget** setting, we recommend $0 (unlimited) or at least $20 or more. If costs hit your set database budget (set other than \$0), your database will forcibly shut off for the month. This allows no surprise costs for the cost sensitive.

Personal and Enterprise defaults to \$0 (unlimited).

To set budget, follow [Update the Stack instructions](./updating-the-stack.html).

### Change content CDN to Cloudflare Workers - 1 time update

With a fresh stack, you're using AWS's Content CDN, which is relatively expensive. You can change to use Cloudflare workers for Content CDN.

To enable Cloudflare workers, in your hub Admin Panel > "Content CDN" menu > Follow instructions to enable Cloudflare workers. (WARNING - DO NOT CHANGE NAMESERVERS FOR YOUR HUB AND DO NOT ADD YOUR SITE TO CLOUDFLARE)

## Estimating your costs

See our [Estimating Costs and Charts (Alpha)](./estimating-cost.md) page.
