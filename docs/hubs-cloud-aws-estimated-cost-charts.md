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

## How to minimize your costs

- Enable database pausing. Enabled by default for Personal.
- Enable offline mode. Your costs will be \$0/hour when you've turned your servers off. Your hubs instance will redirect you to the offline url.

**Are these estimates within range for you?** Tell us here: [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)

## Calculator

1. How many hours do you expect your event to be at top user capacity? Will you be streaming video from webcams or vimeo? (use 'Avg Use' if not at full capacity)
2. How many hours do you expect to have users connect but not at top user capacity?
3. How many hours do you expect to not have anyone connected?
4. Can you shut your Hub servers down when not in use? How many hours?

**Rough Estimate for Event Cost = (#1 \* 'High Use') + (#2 \*'Avg Use') + (#3 \* 'Minimum') + (#4 \* 0)**

## Concurrent Users (CCU)

CCU (concurrent users) = # people \* # rooms

Desktop/VR # users / room max capacity = 25 users

Mobile # users / room max capacity = ~6 mobile users

**Estimated CCU\*\*** : Below are our estimates to get best performance. Depending on client power (on Mobile or Desktop/VR), the performance may vary.

## Estimating Personal / Enterprise Costs with 1 server

AWS Server Type costs are from US East (N. Virginia).
Estimated

| AWS Server Type | Estimated CCU\*\* | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| --------------- | ----------------- | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro        | 50                | \$0.024           | \$0.050                          | \$0.098                           |
| t3.small        | 50                | \$0.035           | \$0.074                          | \$0.144                           |
| t3.medium       | 50                | \$0.056           | \$0.118                          | \$0.230                           |
| t3.large        | 50                | \$0.183           | \$0.384                          | \$0.750                           |
| t3.xlarge       | 100               | \$0.266           | \$0.559                          | \$1.091                           |
| t3.2xlarge      | 200               | \$0.433           | \$0.909                          | \$1.775                           |
| c4.large        | 50                | \$0.200           | \$0.420                          | \$0.820                           |
| c5.large        | 50                | \$0.185           | \$0.389                          | \$0.759                           |
| c5.xlarge       | 100               | \$0.270           | \$0.567                          | \$1.107                           |
| c5.2xlarge      | 200               | \$0.440           | \$0.924                          | \$1.804                           |
| c5.4xlarge      | 400               | \$0.780           | \$1.638                          | \$3.198                           |
| c5.9xlarge      | 900               | \$1.630           | \$3.423                          | \$6.683                           |
| c5.12xlarge     | 1200              | \$2.140           | \$4.494                          | \$8.774                           |
| c5.18xlarge     | 1800              | \$3.160           | \$6.636                          | \$12.956                          |
| c5.24xlarge     | 2400              | \$4.180           | \$8.778                          | \$17.138                          |

## Estimating Enterprise Costs for 4 servers

2 app and 2 streaming servers recommended for best performance.

| AWS Server Type | Estimated CCU\*\* | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| --------------- | ----------------- | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro        | 200               | \$0.096           | \$0.202                          | \$0.298                           |
| t3.small        | 200               | \$0.140           | \$0.294                          | \$0.434                           |
| t3.medium       | 200               | \$0.224           | \$0.470                          | \$0.694                           |
| t3.large        | 300               | \$0.732           | \$1.537                          | \$2.269                           |
| t3.xlarge       | 600               | \$1.064           | \$2.234                          | \$3.298                           |
| t3.2xlarge      | 1000              | \$1.732           | \$3.637                          | \$5.369                           |
| c4.large        | 400               | \$0.800           | \$1.680                          | \$2.480                           |
| c5.large        | 400               | \$0.740           | \$1.554                          | \$2.294                           |
| c5.xlarge       | 800               | \$1.080           | \$2.268                          | \$3.348                           |
| c5.2xlarge      | 1600              | \$1.760           | \$3.696                          | \$5.456                           |
| c5.4xlarge      | 3200              | \$3.120           | \$6.552                          | \$9.672                           |
| c5.9xlarge      | 7200              | \$6.520           | \$13.692                         | \$20.212                          |
| c5.12xlarge     | 9600              | \$8.560           | \$17.976                         | \$26.536                          |
| c5.18xlarge     | 14400             | \$12.640          | \$26.544                         | \$39.184                          |
| c5.24xlarge     | 19200             | \$16.720          | \$35.112                         | \$51.832                          |

## Are these estimates within range for you?

Tell us here: [Accuracy Assessment Hubs Cloud AWS Cost Charts](https://forms.gle/WD5dQ6k2zEjTkYQR6)
