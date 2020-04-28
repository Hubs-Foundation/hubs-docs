---
id: hubs-cloud-aws-troubleshooting
title: AWS Troubleshooting
sidebar_label: AWS Troubleshooting
---

## You're in the "AWS Sandbox" and people don't receive "magic link" emails

You finished deployment and can access the Hubs Admin console. The Hubs Admin console will also say you're in the "AWS Sandbox." Your stack AWS email service is limited.

#### Solution options:

1.  **Verify individual email addresses for administrators**
    - If you only have a few people who will be administrating using your site, you can have them verify their email addresses with SES.
    - Go to Simple Email Service on the AWS Console and then under "Email Addresses" add the email addresses who will be using the site.
    - Each person will receive a verification email they will need to click on.
    - Once they have verified their email address, they will be able to receive the "magic link" emails.

2.  **Send request to AWS for a limit increase**

    - Use this process if you have 24 hours to wait for AWS technical support to grant your email service limit increase
    - Go to [AWS create case](https://console.aws.amazon.com/support/home?#/case/create?issueType=technical)
    - Select "Service limit increase"
    - Fill in your email and copy & paste this message below:

    ```
    Hi there, we are deploying a product called Hubs Cloud to our AWS infrastructure. This product uses "magic links" sent via email to log in users. The product does not support passwords, only email links to log in. As such, would like to use SES to send these emails. There are no other emails sent by the product other than these automated sign-in emails, sent at the time a user requests to log in. We do not send any unsolicited emails or other content-oriented emails, only sign in link emails. We do not store the email addresses of visitors. The emails are securely transmitted to our server at log-in time to send the email link.

    We expect to have an influx of users over the coming weeks using Hubs Cloud. As such, we need to be able to send these log in emails for them to use the site.

    We've set up bounce and complaints to forward to an administrative email address.
    Thank you!
    ```

    - Submit form
    - Email will arrive granting your service limit increase request

3.  **Setup SMTP via SendGrid**
    - Use this process if you need an immediate fix
    - Sign up on [SendGrid](https://sendgrid.com/)
    - Create a new API Key
    - Grant the API key email send ability
    - Update settings in Hubs Cloud Admin console
      1.  Server settings > SMTP
      2.  Enter "apikey" as "Username"
      3.  Enter the API key itself as "Password"
      4.  Enter "smtp.sendgrid.net" as "Host"
      5.  Enter "2525" as "Port"

## My AWS stack says "rollback complete" after deploying, what went wrong?

You encountered an issue during Hubs Cloud stack deployment. By default, AWS rolls back the changes and deletes the stack.

#### To see the last error event

1. Navigate to AWS EC2 > Select "Events" Tab on left sidebar
2. Scroll down the list to any red error(s) in the "Status" column
3. Log those errors for later troubleshooting

#### To turn rollback completely off

1. Start the [AWS Hubs deployment process](https://hubs.mozilla.com/cloud) > Finish steps 1 and 2 > "Step 3 Configure stack options" > "Advanced options" > Expand "Stack creation options" > Select "Disabled" for "Rollback on failure"
2. Continue with the stack creation and discover which error the stack failed on
3. Delete the stack in AWS CloudFormation manually to restart the deployment process

## The specified key does not exist. (Service: Amazon S3; Status Code: 404; Error Code: NoSuchKey

This is a bug in AWS Cloudformation that Amazon is working to address. Unfortunately, you'll have to delete and re-create the stack.

## "ExternalZoneSSLCertLocalIfEast" error or timeout

You have an issue with SSL certificate verification.

#### Potential solutions:

1. **Check your domains**
   - Are your domain names typed correctly?
   - Check that you registered the domains on AWS Route 53
2. **Certificate limit reached, must ask AWS for increase.**
   - Have you deployed this stack multiple times? If so, AWS defaults that you can create only 25 certificates per month. Create a AWS help desk ticket to request for a certificate increase. In a few days, you'll be able to deploy Hubs Cloud again.
3. **DNS CNAME issues.**
   - Before deploying Hubs Cloud stack again, go to AWS Route 53
   - Select the domains you're using for Hubs Cloud
   - Delete the CNAMEs from left from the last Hubs stack deployment -- Careful not to delete any CNAMEs that your domains use for another service
   - Deploy the Hubs Cloud stack again
4. **Are your Name Servers the default AWS ones?**
   - You may have changed your Name Servers to point ot another service. Delete the current ones to revert back to the defaults.

## Missing a solution?

Let us know! hubs-support@mozilla.com
