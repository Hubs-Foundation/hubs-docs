---
id: hubs-cloud-aws-estimated-cost-charts
title: AWS Estimating Costs and Cost Charts (Alpha)
sidebar_label: Estimating Cost Charts (Alpha)
---

This document explains how to estimate your costs. For a full description on:

- How do costs work for Hubs Cloud?
- Minimizing costs - Recommended user story
- Minimizing costs - Settings in stack template
- The AWS tech stack in detail in terms of cost
- Recommended Server Types

See our [Costs and Minimizing Costs Information](./hubs-cloud-aws-costs.md) page.

## Disclaimer for Estimating Costs

Costs are impossible to predict because everyone uses Hubs differently. Below are **estimates** from our tests and should not be used as a source of truth for your AWS Hubs Cloud costs.

**Are these estimates within range for you?** [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)

## Accurately Predict Future Costs - AWS Cost Explorer

For the **most accurate** way to see previous costs to predict your future costs enable:

- [AWS Cost Explorer](https://console.aws.amazon.com/billing/home)
- [AWS Cost Explorer Documentation](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html)

## Estimate your Event Cost

Database pausing is assumed on.

1. **\# of hours at top user capacity?** Will you be streaming video from webcams or vimeo?
2. **\# of hours users are connected but not at top user capacity?**
3. **\# hours with no one connected?**
4. **Can you turn your hub Offline? # of hours?**

**Rough Estimate for Event = (#1 \* 'High Use $') + (#2 \*'Avg Use $') + (#3 \* 'Minimum $') + (#4 \* $0)**

## Estimated Cost Charts

AWS Server Type costs are from us-east-1 (N. Virginia).

**Estimated CCU\*\*** : Below are our estimates to get best performance. Depending on client power (on high power devices (Desktop/VR) vs. low power devices (Mobile)), the performance may vary.

### AWS Server Type Recommendations

**See Cost Charts BELOW to factor costs with the recommendations.**

For development with only a few users connecting + setting rooms + scenes, we recommend the **t3.medium** instance. 
**Note:** This does **not** exclude the **t3.small**, see what works for you. Scale the server type up or down ad hoc via [updating the stack](./hubs-cloud-aws-updating-the-stack.md).

For an event, we recommend the **c4.large** instance. 
**Note:** This does **not** exclude any other instances types, see what works for you. Scale the server type up or down ad hoc based on performance via [updating the stack](./hubs-cloud-aws-updating-the-stack.md).

Read the user story for minimizing costs for more minimizing cost information: [Costs and Minimizing Costs Information](./hubs-cloud-aws-costs.md) 

**We do not recommend using a t3.micro because of low memory.**

### Concurrent Users (CCU)

Please see [AWS Estimated CCU Limits](./hubs-cloud-aws-estimated-ccu-limits.md).

### Estimating Personal / Enterprise Costs with 1 server

| AWS Server Type                | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| ------------------------------ | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro _**NOT recommended**_ | \$0.024           | \$0.050                          | \$0.098                           |
| t3.small                       | \$0.035           | \$0.074                          | \$0.144                           |
| t3.medium                      | \$0.056           | \$0.118                          | \$0.230                           |
| t3.large                       | \$0.183           | \$0.384                          | \$0.750                           |
| t3.xlarge                      | \$0.266           | \$0.559                          | \$1.091                           |
| t3.2xlarge                     | \$0.433           | \$0.909                          | \$1.775                           |
| c4.large                       | \$0.200           | \$0.420                          | \$0.820                           |
| c5.large                       | \$0.185           | \$0.389                          | \$0.759                           |
| c5.xlarge                      | \$0.270           | \$0.567                          | \$1.107                           |
| c5.2xlarge                     | \$0.440           | \$0.924                          | \$1.804                           |
| c5.4xlarge                     | \$0.780           | \$1.638                          | \$3.198                           |
| c5.9xlarge                     | \$1.630           | \$3.423                          | \$6.683                           |
| c5.12xlarge                    | \$2.140           | \$4.494                          | \$8.774                           |
| c5.18xlarge                    | \$3.160           | \$6.636                          | \$12.956                          |
| c5.24xlarge                    | \$4.180           | \$8.778                          | \$17.138                          |

### Estimating Enterprise Costs for 4 servers

2 app and 2 streaming servers recommended for best performance.

| AWS Server Type                | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| ------------------------------ | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro _**NOT recommended**_ | \$0.096           | \$0.202                          | \$0.298                           |
| t3.small                       | \$0.140           | \$0.294                          | \$0.434                           |
| t3.medium                      | \$0.224           | \$0.470                          | \$0.694                           |
| t3.large                       | \$0.732           | \$1.537                          | \$2.269                           |
| t3.xlarge                      | \$1.064           | \$2.234                          | \$3.298                           |
| t3.2xlarge                     | \$1.732           | \$3.637                          | \$5.369                           |
| c4.large                       | \$0.800           | \$1.680                          | \$2.480                           |
| c5.large                       | \$0.740           | \$1.554                          | \$2.294                           |
| c5.xlarge                      | \$1.080           | \$2.268                          | \$3.348                           |
| c5.2xlarge                     | \$1.760           | \$3.696                          | \$5.456                           |
| c5.4xlarge                     | \$3.120           | \$6.552                          | \$9.672                           |
| c5.9xlarge                     | \$6.520           | \$13.692                         | \$20.212                          |
| c5.12xlarge                    | \$8.560           | \$17.976                         | \$26.536                          |
| c5.18xlarge                    | \$12.640          | \$26.544                         | \$39.184                          |
| c5.24xlarge                    | \$16.720          | \$35.112                         | \$51.832                          |

## Are these estimates within range for you?

Tell us here: [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)
