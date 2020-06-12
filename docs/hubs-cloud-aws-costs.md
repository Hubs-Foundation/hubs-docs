---
id: hubs-cloud-aws-costs
title: AWS Cost Information
sidebar_label: Cost Information
---

Hubs Cloud Cost Quick Reference

Minimizing Costs Primer

- How do costs work for Hubs Cloud?
- Minimizing cost settings via stack template
- Minimizing costs - a user story

Cost breakdown

- Detailed factors for Hubs Cloud

Your primary costs will be the EC2 instances you use, the serverless hourly database costs, EFS storage, and, if you do not switch to Cloudflare, data transfer costs.

## How do costs work for Hubs Cloud?

Your primary costs will be the EC2 AWS Server types you use hourly, the serverless hourly database costs, EFS storage, and, if you do not switch to Cloudflare, data transfer costs.

EC2 instances, while "Online", will cost the [minimum cost](./hubs-cloud-aws-estimated-cost-charts.md#estimated-cost-charts) per hour per server for your instance AWS server type [(?)](./hubs-cloud-aws-estimated-cost-charts.md#aws-server-type-recommendations). This minimum cost is hourly regardless of how many people connect at a time. You can manually turn off your EC2 instance + database via turning on [**Offline mode**](./hubs-cloud-aws-estimated-cost-charts.md#offline-mode---manual) where no one can connect to your server at the time.

Database costs is the largest factor, you can set [**database pausing**](./hubs-cloud-aws-estimated-cost-charts.md#database-pausing---automatic) on to stop costs incurring when no one is connected.

[See our (Alpha) Cost Charts for more information on AWS Server Types and Minimum EC2 Costs.](./hubs-cloud-aws-estimated-cost-charts.md#estimated-cost-charts)

[For minimizing your costs, see our Minimize your Hubs Cloud Costs - A User Story](./hubs-cloud-aws-estimated-cost-charts.md#minimize-your-hubs-cloud-costs---a-user-story)

## Factors creating AWS cost estimates

Your hub is designed to minimize AWS costs. Your primary costs will be:\*\*

- AWS Server Type on AWS EC2
- Number of servers
- Database usage
- Storage for 3D assets for scenes and avatars
- Data transfer costs
- Domain costs ($1 per domain/mo.) + $0.40/mo for the database secrets

## Factors in detail

As you use your hub, you will see AWS costs:

- EC2 instances: the stack configuration lets you choose how many instances to use, a single t3.micro is needed by default. At time of this writing that costs approx \$8/mo.
- An [Aurora serverless](https://aws.amazon.com/rds/aurora/pricing/) database: you will be charged for database usage. At the time of this writing \$0.12 per hour used, rounded to the nearest 10 minutes. If you've enabled database auto-pausing in your stack configuration (the default) then you will only pay for the database when visitors are accessing your site. If you are concerned about excessive database costs, you can set a budget in the stack settings that will cause your stack to be put into Offline mode automatically if your budget is exceeded. (which will shut down all the servers, including the database)
- [EFS](https://aws.amazon.com/efs/pricing/) storage: you will be charged for storage of uploaded scenes and avatars. At the time of this writing approx $0.30/gb month and $0.10/gb month for data that hasn't been accessed in 30 days.
- [Cloudfront](https://aws.amazon.com/cloudfront/pricing/) data transfer costs.
- There are a variety of lambdas used for doing image resizing, video transcoding, etc subject to [AWS Lambda Pricing](https://aws.amazon.com/lambda/pricing) but unlikely to exceed free tier levels.
- You will also be paying $1/mo for each of your Route 53 domains and also $0.40/mo for the database secret.

Note that you can significantly save data transfer charges by switching your CDN to Cloudflare. In your hub's admin console, go to the "Data Transfer" page to see how.

If you'd like to maximize your cost savings, you can perform a stack update to switch the stack into "Offline" mode when you are not using it, though this likely unnecessary except for cases where you are running at a higher capacity settings than the defaults.

To roughly estimate your costs, check out our [Estimated Cost Charts (alpha)](./hubs-cloud-aws-estimated-cost-charts.md).

To more accurately predict future costs use [AWS Cost Explorer for your instance](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html).

Or you can see our AWS Calculator estimates for a [Single Server, Personal](https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-780fd694890a75cdb1b295a77845c3ecb31ba889&v=ver20191121vC) deployment and a [Multi-Server, Enterprise](https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-c29e6ec8edcd38e7bd01b3e9284863f4f5fed318&v=ver20191121vC) deployment.
