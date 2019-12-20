---
id: hubs-cloud-aws-known-issues
title: AWS Known Issues
sidebar_label: Known Issues
---

#### I get the error "Value for parameter availabilityZone is invalid. Subnets can currently only be created in the following availability zones: X, Y

This is a known issue with AWS. See: https://github.com/widdix/aws-cf-templates/issues/36. To fix it, you will need to adjust the "Subnet Availability Zones" values in the 'Advanced' section to select an alternative Subnet configuration that matches X, Y and try again.
