---
id: hubs-cloud-aws-estimated-cost-charts
title: AWS Estimating Costs and Cost Charts (Alpha)
sidebar_label: Estimating Costs and Charts (Alpha)
---

**Minimizing Costs Primer**

- How do costs work for Hubs Cloud?
- Minimizing costs - Recommended user story
- Minimizing costs - Settings in stack template
- Best Accuracy Cost Estimate - use AWS Cost Explorer

**What AWS Server Type should I use?**

- Recommended Server Types
- To calculate CCU or concurrent users?
- Cost Charts per Server Type (Alpha)

**Estimating Cost breakdown**

- Best Accuracy Cost Estimate - use AWS Cost Explorer
- The AWS Tech Stack in detail
- Calculate and estimate the cost of your event

Your primary costs will be the EC2 instances you use, the serverless hourly database costs, EFS storage, and, if you do not switch to Cloudflare, data transfer costs.

Costs are impossible to predict because everyone uses Hubs differently. Below are **estimates** from our tests and should not be used as a source of truth for your AWS Hubs Cloud costs.

## For best accuracy, use AWS Cost Explorer

For the **most accurate** way to see previous costs to predict your future costs enable:

- [AWS Cost Explorer](https://console.aws.amazon.com/billing/home)
- [AWS Cost Explorer Documentation](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html)

Your hub is designed to minimize AWS costs. Your primary charges will be the EC2 instances you use, the serverless hourly database costs, EFS storage, and, if you do not switch to Cloudflare (see below), data transfer costs.

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

## Minimize your Hubs Cloud Costs - A User Story

Our recommendation to minimize costs for automatic settings is to turn [**database pausing**](./hubs-cloud-aws-estimated-cost-charts.md#database-pausing---automatic) on by default. When no one is using your hub, turn your hub to [**Offline mode**](./hubs-cloud-aws-estimated-cost-charts.md#offline-mode---manual) or a small instance type like **t3.medium**. Also use a Cloudflare worker as your content CDN.

### Before your event: Development

Your event

### Before your event: 1.5 hours

If your instance is in [**Offline mode**](./hubs-cloud-aws-estimated-cost-charts.md#offline-mode---manual), manually update the stack to **Online** and wait 10 minutes.

After, at least 1 hour before event, manually update the stack to scale up your AWS Server Type. For example 1 hour before your event, [update the stack](./hubs-cloud-aws-updating-the-stack.md) from a **t3.medium** to **c4.large** [(?)](./hubs-cloud-aws-estimated-cost-charts.md#aws-server-type-recommendations).

### During your event

If you notice performance issues, you can ad hoc [update the stack](./hubs-cloud-aws-updating-the-stack.md) up more from a **c4.large** to **c5.2xlarge** [(?)](./hubs-cloud-aws-estimated-cost-charts.md#aws-server-type-recommendations) without problems.

### After your event

Scale down your AWS Server Type by [updating the stack](./hubs-cloud-aws-updating-the-stack.md) from the **c5.2xlarge** to **t3.medium** [(?)](./hubs-cloud-aws-estimated-cost-charts.md#aws-server-type-recommendations) when finished or there are less users connected.

### When no one is connecting to your instance for a long time

You can turn your hub to [**Offline mode**](./hubs-cloud-aws-estimated-cost-charts.md#offline-mode---manual) where no one can connect to your hub or a redirect URL, if specified. Via **Offline mode** all costs except for asset storage like backups, scenes, and avatars are \$0.

## Cost Management Section in Cloudformation Stack Template

- Enable **Auto-Pause Database**. On by default for Personal and settable by Enterprise.
- Toggle **Offline mode** to "Online" to "Offline" manually. Your EC2 and database costs will be \$0/hour when you've turned your servers off.
- Set **Account Monthly Database Budget**
- Enable Content CDN to Cloudflare workers

### Database Pausing - automatic

If **Auto-Pause Database** or **database pausing** is "Yes - Pause database when not in use", after no one has connected to your instance for a while, your database and the costs incurred by your database will stop until a user connects again. It takes 1-3 minutes for the database to turn back on and allow the first user to connect. Subsequent connections will occur quickly afterward.

### Offline Mode - manual

When you set **Offline mode** to "Offline", you've completely turned off your servers and stopped all EC2 costs + database costs. You're still paying for storage for your backups and data. No one can connect to your hub while your servers are "Offline". While "Offline," your hubs instance will redirect you to the specified offline url.

Turning **Offline mode** to "Offline" to "Online" and vice versa is a manual process. Wait 10 minutes afterward to connect.

### Monthly Database Budget - automatic

Careful with the **Monthly Database Budget** setting, we recommend $0 (unlimited) or at least $20 or more. If costs hit your set database budget (set other than \$0), your database will forcibly shut off for the month. This allows no surprise costs for the cost sensitive.

Personal and Enterprise defaults to \$0 (unlimited).

### Change content CDN to Cloudflare Workers - 1 time update

With a fresh stack, you're using AWS's Content CDN, which is relatively expensive. You can change to use Cloudflare workers for Content CDN.

To enable Cloudflare workers, in your hub Admin Panel > "Content CDN" menu > Follow instructions to enable Cloudflare workers. (WARNING - DO NOT CHANGE NAMESERVERS FOR YOUR HUB AND DO NOT ADD YOUR SITE TO CLOUDFLARE)

## Estimate your Event Cost

Database pausing is assumed on.

1. **\# of hours at top user capacity?** Will you be streaming video from webcams or vimeo?
2. **\# of hours users are connected but not at top user capacity?**
3. **\# hours with no one connected?**
4. **Can you turn your hub Offline? # of hours?**

**Rough Estimate for Event = (#1 \* 'High Use $') + (#2 \*'Avg Use $') + (#3 \* 'Minimum $') + (#4 \* $0)**

## AWS Server Type Recommendations

**See Cost Charts BELOW to factor costs with the recommendations.**

For development with only a few users connecting + setting rooms + scenes, we recommend at least a **t3.medium** instance.

For any event, we recommend **at least** a **c4.large** instance. Scale up or down ad hoc based on performance.

**We do not recommend using a t3.micro or t3.small because of low memory.**

# Estimated Cost Charts

AWS Server Type costs are from us-east-1 (N. Virginia).

**Estimated CCU\*\*** : Below are our estimates to get best performance. Depending on client power (on high power devices (Desktop/VR) vs. low power devices (Mobile)), the performance may vary.

## Concurrent Users (CCU)

CCU (concurrent users) = # connected users across your hub instance

Example: **20 users per room \* 10 rooms = 200 CCU**

## Estimating Personal / Enterprise Costs with 1 server

| AWS Server Type                | Estimated CCU\*\* | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| ------------------------------ | ----------------- | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro _**NOT recommended**_ | 5                 | \$0.024           | \$0.050                          | \$0.098                           |
| t3.small _**NOT recommended**_ | 10                | \$0.035           | \$0.074                          | \$0.144                           |
| t3.medium                      | 50                | \$0.056           | \$0.118                          | \$0.230                           |
| t3.large                       | 50                | \$0.183           | \$0.384                          | \$0.750                           |
| t3.xlarge                      | 100               | \$0.266           | \$0.559                          | \$1.091                           |
| t3.2xlarge                     | 200               | \$0.433           | \$0.909                          | \$1.775                           |
| c4.large _**recommended**_     | 50                | \$0.200           | \$0.420                          | \$0.820                           |
| c5.large                       | 50                | \$0.185           | \$0.389                          | \$0.759                           |
| c5.xlarge                      | 100               | \$0.270           | \$0.567                          | \$1.107                           |
| c5.2xlarge                     | 200               | \$0.440           | \$0.924                          | \$1.804                           |
| c5.4xlarge                     | 400               | \$0.780           | \$1.638                          | \$3.198                           |
| c5.9xlarge                     | 900               | \$1.630           | \$3.423                          | \$6.683                           |
| c5.12xlarge                    | 1200              | \$2.140           | \$4.494                          | \$8.774                           |
| c5.18xlarge                    | 1800              | \$3.160           | \$6.636                          | \$12.956                          |
| c5.24xlarge                    | 2400              | \$4.180           | \$8.778                          | \$17.138                          |

## Estimating Enterprise Costs for 4 servers

2 app and 2 streaming servers recommended for best performance.

| AWS Server Type                | Estimated CCU\*\* | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| ------------------------------ | ----------------- | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro _**NOT recommended**_ | 20                | \$0.096           | \$0.202                          | \$0.298                           |
| t3.small _**NOT recommended**_ | 40                | \$0.140           | \$0.294                          | \$0.434                           |
| t3.medium                      | 100               | \$0.224           | \$0.470                          | \$0.694                           |
| t3.large                       | 300               | \$0.732           | \$1.537                          | \$2.269                           |
| t3.xlarge                      | 600               | \$1.064           | \$2.234                          | \$3.298                           |
| t3.2xlarge                     | 1000              | \$1.732           | \$3.637                          | \$5.369                           |
| c4.large _**recommended**_     | 400               | \$0.800           | \$1.680                          | \$2.480                           |
| c5.large                       | 400               | \$0.740           | \$1.554                          | \$2.294                           |
| c5.xlarge                      | 800               | \$1.080           | \$2.268                          | \$3.348                           |
| c5.2xlarge                     | 1600              | \$1.760           | \$3.696                          | \$5.456                           |
| c5.4xlarge                     | 3200              | \$3.120           | \$6.552                          | \$9.672                           |
| c5.9xlarge                     | 7200              | \$6.520           | \$13.692                         | \$20.212                          |
| c5.12xlarge                    | 9600              | \$8.560           | \$17.976                         | \$26.536                          |
| c5.18xlarge                    | 14400             | \$12.640          | \$26.544                         | \$39.184                          |
| c5.24xlarge                    | 19200             | \$16.720          | \$35.112                         | \$51.832                          |

## Are these estimates within range for you?

Tell us here: [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)
