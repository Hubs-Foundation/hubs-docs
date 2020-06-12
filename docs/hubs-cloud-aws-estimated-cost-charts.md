---
id: hubs-cloud-aws-estimated-cost-charts
title: AWS Estimated Cost Charts
sidebar_label: Estimated Cost Charts (alpha)
---

Costs are impossible to predict because everyone uses Hubs differently. Below charts are **estimates** from our tests and should not be used as a source of truth for your AWS Hubs Cloud costs.

## For best accuracy, use AWS Cost Explorer

For the **most accurate** way to see previous costs to predict your future costs enable:

- [AWS Cost Explorer](https://console.aws.amazon.com/billing/home)
- [AWS Cost Explorer Documentation](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html)

## Factors creating AWS cost estimates [Hubs Cloud AWS Costs](./hubs-cloud-aws-costs.md)

- Server type on AWS EC2
- Number of servers
- Database usage
- Storage for 3D assets for scenes and avatars
- Data transfer costs
- Domain costs ($1 per domain/mo.) + $0.40/mo for the database secrets

## How do costs work for Hubs Cloud?

EC2 instances, while "Online", will cost the minimum cost per hour per server for your instance AWS server type. This minimum cost is hourly regardless of how many people connect at a time. You can manually turn off your EC2 instance + database via turning on "Offline" mode where no one can connect to your server at the time.

Database costs is the largest factor, you can set database pausing on to stop costs incurring when no one is connected.

## Minimize your Hubs Cloud Costs - A User Story

Our recommendation to minimize costs for automatic settings is to turn [**database pausing**](./hubs-cloud-aws-estimated-cost-charts.md#database-pausing---automatic) on by default. When no one is using your hub, turn your hub to [**Offline mode**](./hubs-cloud-aws-estimated-cost-charts.md#offline-mode---manual) or a small instance type like **t3.medium**.

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

### Database Pausing - automatic

If **Auto-Pause Database** or **database pausing** is "Yes - Pause database when not in use", after no one has connected to your instance for a while, your database and the costs incurred by your database will stop until a user connects again. It takes 1-3 minutes for the database to turn back on and allow the first user to connect. Subsequent connections will occur quickly afterward.

### Offline Mode - manual

When you set **Offline mode** to "Offline", you've completely turned off your servers and stopped all EC2 costs + database costs. You're still paying for storage for your backups and data. No one can connect to your hub while your servers are "Offline". While "Offline," your hubs instance will redirect you to the specified offline url.

Turning **Offline mode** to "Offline" to "Online" and vice versa is a manual process. Wait 10 minutes afterward to connect.

### Monthly Database Budget - automatic

Careful with the **Monthly Database Budget** setting, we recommend $0 (unlimited) or at least $20 or more. If costs hit your set database budget (set other than \$0), your database will forcibly shut off for the month. This allows no surprise costs for the cost sensitive.

Personal and Enterprise defaults to \$0 (unlimited).

## Estimate your Event Cost

Database pausing is assumed on.

1. **\# of hours at top user capacity?** Will you be streaming video from webcams or vimeo?
2. **\# of hours users are connected but not at top user capacity?**
3. **\# hours with no one connected?**
4. **Can you turn your hub Offline? # of hours?**

**Rough Estimate for Event = (#1 \* 'High Use $') + (#2 \*'Avg Use $') + (#3 \* 'Minimum $') + (#4 \* $0)**

## Concurrent Users (CCU)

CCU (concurrent users) = # connected users across your hub instance

Example: **20 users per room \* 10 rooms = 200 CCU**

## AWS Server Type Recommendations

**See Cost Charts BELOW to factor costs with the recommendations.**

For development with only a few users connecting + setting rooms + scenes, we recommend at least a **t3.medium** instance.

For any event, we recommend **at least** a **c4.large** instance. Scale up or down ad hoc based on performance.

**We do not recommend using a t3.micro or t3.small because of low memory.**

# Estimated Cost Charts

AWS Server Type costs are from us-east-1 (N. Virginia).

**Estimated CCU\*\*** : Below are our estimates to get best performance. Depending on client power (on high power devices (Desktop/VR) vs. low power devices (Mobile)), the performance may vary.

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
