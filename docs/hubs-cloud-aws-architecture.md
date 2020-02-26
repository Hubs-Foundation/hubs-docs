---
id: hubs-cloud-aws-architecture
title: AWS System Architecture
sidebar_label: System Architecture
---

![AWS Architecture](img/hubs-cloud-aws-architecture.jpeg)

When you create your stack, a new VPC is created with two public subnets.

Hubs Cloud on AWS sets up two auto-scaling groups, one for app servers and one for (optional) streaming servers. Servers are balanced across two AZs. App servers provide the core app functionality and streaming servers can be added to increase resources for voice and video streaming.

AWS Cloudfront is configured for edge caching of content, and AWS lambda is used for several features such as image resizing, video transcoding, and website thumbnailing.

When setting up your stack, you can also optionally enable an Application Load Balancer to balance load across multiple servers. If you do not use an ALB, DNS based round robin load balancing is used instead.

AWS Simple Email Service is used for email unless you configure a custom SMTP server.

Uploaded assets are stored on Elastic File Store, and static assets (JS/CSS/Images) are stored on S3. The database is a PostgreSQL compatible AWS Aurora Serverless database, which will be paused if not in-use unless configured to have pausing disabled.

Configuration secrets are stored in AWS Secrets Manager as well as AWS Parameter Store as encrypted strings.

Data in EFS and RDS is stored encrypted-at-rest.
