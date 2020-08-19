---
id: hubs-cloud-aws-estimated-cost-charts
title: AWS Estimating Costs and Cost Charts (Alpha)
sidebar_label: Estimating Cost Charts (Alpha)
---

This document explains how to estimate your costs. For a full description on:

- How do costs work for Hubs Cloud?
- Minimizing costs - Recommended user story
- Minimizing costs - Settings in stack template

See our [Costs and Minimizing Costs Information](./hubs-cloud-aws-costs.md) page.

## Disclaimer for Estimating Costs

Estimating costs is extremely difficult because AWS bills by resource usage and everyone uses Hubs differently. Below are **estimates** from our tests and should not be used as a source of truth for your AWS Hubs Cloud costs.

**Are these estimates within range for you?** [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)

### Accurately Predict Future Costs - AWS Cost Explorer

For the **most accurate** way to see previous costs to predict your future costs enable:

- [AWS Cost Explorer](https://console.aws.amazon.com/billing/home)
- [AWS Cost Explorer Documentation](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html)

## Estimate your Event Cost

Read the [Recommended User Story in Minimizing Costs Page](./hubs-cloud-aws-costs.md#minimize-your-hubs-cloud-costs---a-user-story) first, to understand this calculation better.

## Rough Calculation for Estimating Costs

- **\# of servers** = Personal (1 server), Enterprise multi-server (varies, 2 app x 2 stream = 4 servers)
- **Scalar**: Estimates other services like RDS, EFS, and Data transfer costs. The **high scalar** can be lower if you are larger instance size, it's a very rough estimate.
- **NOTE SCALAR**: Both low and high estimates estimate having users connected to instance. High scalar estimates highest capacity and is an _upper bound_. With Cloudflare workers enabled, likely you will not hit this cost as it is for heavy heavy use. Most cost estimate cases are ranged within a scalar range of 2 and 3.

> **Low estimate (\$)** = **# Hours** x **Cost for EC2 (US\$/hr)** x **# of servers** x **2** (low scalar to estimate other services)

> **High estimate (\$)** = **# Hours** x **Cost for EC2 (US\$/hr)** x **# of servers** x **5** (high scalar to estimate other services)

> \+ Use low estimation with smaller EC2 instance to estimate setting up event costs - _[see minimizing costs user story](./hubs-cloud-aws-costs.md#minimize-your-hubs-cloud-costs---a-user-story)_

> \+ Estimate for setting your stack to offline mode - _[see minimizing costs user story](./hubs-cloud-aws-costs.md#minimize-your-hubs-cloud-costs---a-user-story)_

### Minimize # Hours at top Capacity to Minimize Cost

**If you are diligent with decreasing the # of hours at top capacity**, outlined in the [minimizing costs user story](./hubs-cloud-aws-costs.md#minimize-your-hubs-cloud-costs---a-user-story), your event costs can be extremely low especially when comparing an in-person event:

- Scale the EC2 instance down during lower traffic
- Turn on offline mode (costs are extremely minimal because the EC2 costs + RDS costs + EFS costs are down and you're only storing backups)
- Enable database pausing
- Use Cloudflare for content CDN - not recommended if you're streaming videos
- Read more about these settings in [minimizing costs user story](./hubs-cloud-aws-costs.md#minimize-your-hubs-cloud-costs---a-user-story)

## EC2 Server Type Recommendations

**See Cost Charts BELOW to factor costs with the recommendations.**

For development with only a few users connecting + setting rooms + scenes, we recommend the **t3.medium** instance.
**Note:** This does **not** exclude the **t3.small**, see what works for you. Scale the server type up or down ad hoc via [updating the stack](./hubs-cloud-aws-updating-the-stack.md).

For an event, we recommend the **c4.large** instance.
**Note:** This does **not** exclude any other instances types, see what works for you. Scale the server type up or down ad hoc based on performance via [updating the stack](./hubs-cloud-aws-updating-the-stack.md).

**We do not recommend using a t3.micro because of low memory.**

### Why Enterprise 2 app x 2 stream?

**We recommend using an Enterprise 2x2 multi-server setup to optimize for resiliency.** If one server goes down suddenly, the other will take its place without your users noticing.

**Scale vertically before scaling horizontally.** Horizontal scaling can result in running out of Let's Encrypt Certificates between servers (we've seen this for 12x12 builds).

For very large events 4x4 and 8x8 Enterprise multiserver stacks are recommended.

### How to read and use Alpha Cost Charts

- **vCPU (#)** is defined by the EC2 Server Type see [Amazon EC2 Instance Types Documentation](https://aws.amazon.com/ec2/instance-types/).
- **CCU Min** - Max CCU for active avatars (lot of avatar movement, talking, at a meetup, etc.)
- **CCU Max** - Max CCU for mostly inactive avatars (only watching a video, 1 avatar speaking)
- **Cost for EC2 (US\$/hr)** - Cost per hour for running the EC2 instance type in us-east-1 (N. Virginia).
- Note: t3.micro, t3.small, t3.medium have smaller CCU/vCPU because of past performance experience and lower memory.

Below are our CCU estimates for best performance. Performance may vary depending on client power: high power devices (Desktop/VR) vs. low power devices (Mobile).

Use the [Rough calculation section](****) to get estimates.

To see how vCPU to CCU Min/Max was estimated see [AWS Estimated CCU Limits](./hubs-cloud-aws-estimated-ccu-limits.md).

### Estimating Personal / Enterprise Costs with 1 server

[How to read and use Alpha Cost Charts](./hubs-cloud-aws-estimated-cost-charts.md#how-to-read-and-use-alpha-cost-charts)

| EC2 Server Type                | vCPU (#) | CCU Min | CCU Max | Cost for EC2 (US\$/hr) |
| ------------------------------ | -------- | ------- | ------- | ---------------------- |
| t3.micro _**NOT recommended**_ | 2        | N/A     | N/A     | \$0.024                |
| t3.small                       | 2        | 10      | 20      | \$0.035                |
| t3.medium                      | 2        | 20      | 40      | \$0.056                |
| t3.large                       | 2        | 40      | 80      | \$0.183                |
| t3.xlarge                      | 4        | 80      | 160     | \$0.266                |
| t3.2xlarge                     | 8        | 160     | 320     | \$0.433                |
| c4.large                       | 2        | 40      | 80      | \$0.200                |
| c5.large                       | 2        | 40      | 80      | \$0.185                |
| c5.xlarge                      | 4        | 80      | 160     | \$0.270                |
| c5.2xlarge                     | 8        | 160     | 320     | \$0.440                |
| c5.4xlarge                     | 16       | 320     | 640     | \$0.780                |
| c5.9xlarge                     | 36       | 720     | 1,440   | \$1.630                |
| c5.12xlarge                    | 48       | 960     | 1,920   | \$2.140                |
| c5.18xlarge                    | 72       | 1,440   | 2,880   | \$3.160                |
| c5.24xlarge                    | 96       | 1,920   | 3,840   | \$4.180                |

### Estimating Enterprise Costs for 4 servers

2 app x 2 streaming servers recommended for best performance. [Why?](./hubs-cloud-aws-estimated-cost-charts.md#why-enterprise-2-app-x-2-stream)

[How to read and use Alpha Cost Charts](./hubs-cloud-aws-estimated-cost-charts.md#how-to-read-and-use-alpha-cost-charts)

| EC2 Server Type                | Total vCPU (#) | Min CCU | Max CCU | Cost for EC2 (US\$/hr) |
| ------------------------------ | -------------- | ------- | ------- | ---------------------- |
| t3.micro _**NOT recommended**_ | 8              | N/A     | N/A     | \$0.096                |
| t3.small                       | 8              | 80      | 160     | \$0.140                |
| t3.medium                      | 8              | 80      | 160     | \$0.224                |
| t3.large                       | 8              | 240     | 400     | \$0.732                |
| t3.xlarge                      | 16             | 480     | 800     | \$1.064                |
| t3.2xlarge                     | 32             | 960     | 1,600   | \$1.732                |
| c4.large                       | 8              | 240     | 400     | \$0.800                |
| c5.large                       | 8              | 240     | 400     | \$0.740                |
| c5.xlarge                      | 16             | 480     | 800     | \$1.080                |
| c5.2xlarge                     | 32             | 960     | 1,600   | \$1.760                |
| c5.4xlarge                     | 64             | 1,920   | 3,200   | \$3.120                |
| c5.9xlarge                     | 144            | 4,320   | 7,200   | \$6.520                |
| c5.12xlarge                    | 192            | 5,760   | 9,600   | \$8.560                |
| c5.18xlarge                    | 288            | 8,640   | 14,400  | \$12.640               |
| c5.24xlarge                    | 384            | 1,1520  | 19,200  | \$16.720               |

## Are these estimates within range for you?

Tell us here: [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)
