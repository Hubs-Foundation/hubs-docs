---
id: hubs-cloud-aws-costs
title: AWS Estimated Costs
sidebar_label: Estimated Costs
---

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

To estimate your costs, you can see our AWS Calculator estimates for a [Single Server, Personal](https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-780fd694890a75cdb1b295a77845c3ecb31ba889&v=ver20191121vC) deployment and a [Multi-Server, Enterprise](https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-c29e6ec8edcd38e7bd01b3e9284863f4f5fed318&v=ver20191121vC) deployment.

| AWS Server Type | Estimated CCU | Minimum (US\$/hr) | ~Avg Use with services (US\$/hr) | ~High Use with services (US\$/hr) |
| --------------- | ------------- | ----------------- | -------------------------------- | --------------------------------- |
| t3.micro        | 50            | \$0.024           | \$0.050                          | \$0.098                           |
| t3.small        | 50            | \$0.035           | \$0.074                          | \$0.144                           |
| t3.medium       | 50            | \$0.056           | \$0.118                          | \$0.230                           |
| t3.large        | 50            | \$0.183           | \$0.384                          | \$0.750                           |
| t3.xlarge       | 100           | \$0.266           | \$0.559                          | \$1.091                           |
| t3.2xlarge      | 200           | \$0.433           | \$0.909                          | \$1.775                           |
| c4.large        | 50            | \$0.200           | \$0.420                          | \$0.820                           |
| c5.large        | 50            | \$0.185           | \$0.389                          | \$0.759                           |
| c5.xlarge       | 100           | \$0.270           | \$0.567                          | \$1.107                           |
| c5.2xlarge      | 200           | \$0.440           | \$0.924                          | \$1.804                           |
| c5.4xlarge      | 400           | \$0.780           | \$1.638                          | \$3.198                           |
| c5.9xlarge      | 900           | \$1.630           | \$3.423                          | \$6.683                           |
| c5.12xlarge     | 1200          | \$2.140           | \$4.494                          | \$8.774                           |
| c5.18xlarge     | 1800          | \$3.160           | \$6.636                          | \$12.956                          |
| c5.24xlarge     | 2400          | \$4.180           | \$8.778                          | \$17.138                          |
