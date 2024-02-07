---
sidebar_position: 7
---

# AWS Troubleshooting

## Deployment

### My AWS stack says "rollback complete" after deploying, what went wrong?

You encountered an issue during Hubs Cloud stack deployment. By default, AWS rolls back the changes and deletes the stack.

#### To see the first error event

1. Navigate to AWS Cloudformation > Select your stack name in Stacks > Select "Events" Tab on right sidebar
2. Scroll All the way down the event list to where the **FIRST** red error appears in the "Status" column. This should be a specific error of what went wrong.
3. Log, note, or screenshot those errors for troubleshooting
4. Redeploy the stack again with the same parameters (sometimes it takes 2 times to go through), then if you get the same error...
5. Search specific error _on this page (AWS Troubleshooting)_
6. Search specific error on [Hubs Github Discussions](https://github.com/mozilla/hubs/discussions)
7. Make a thread on [Hubs Github Discussions](https://github.com/mozilla/hubs/discussions), if none of the searches found a solution for you.

#### To turn rollback completely off

1. Start the [AWS Hubs deployment process](https://hubs.mozilla.com/cloud) > Finish steps 1 and 2 > "Step 3 Configure stack options" > "Advanced options" > Expand "Stack creation options" > Select "Disabled" for "Rollback on failure"
2. Continue with the stack creation and discover which error the stack failed on
3. Delete the stack in AWS CloudFormation manually to restart the deployment process

### ExternalZoneSSLCertLocalIfEast error or InternalZoneSSLCert error or timeout

You have an issue with SSL certificate verification.

#### Potential solutions:

1. **Check your domains**
   - Are your domain names typed correctly?
   - Check that you registered the domains on AWS Route 53
2. **Is Transfer Lock on your domains?**
   - Check your aws Management console > Route 53 > "Registered Domains" > Are _ALL_ "Transfer Locks" "X"s (aka disabled) ?
     - To disable: Click on domain > Select "disable" for Transfer Lock option
   - Try deploy again
3. **Certificate limit reached, must ask AWS for increase.**
   - Have you deployed this stack multiple times? If so, AWS defaults that you can create only 25 certificates per month. Create a AWS help desk ticket to request for a certificate increase. In a few days, you'll be able to deploy Hubs Cloud again.
4. **DNS CNAME issues.**
   - Before deploying Hubs Cloud stack again, go to AWS Route 53
   - Select the domains you're using for Hubs Cloud
   - Delete the CNAMEs from left from the last Hubs stack deployment -- Careful not to delete any CNAMEs that your domains use for another service
   - Deploy the Hubs Cloud stack again
5. **Are your Name Servers the default AWS ones?**
   - You may have changed your Name Servers to point to another service. Delete the current ones to revert back to the defaults.

### Using a Second Level domain like (.co.uk or .com.fr)

Use Recipe 3 for deployment, this is a known bug.

## After Successful Deployment

### You're in the "AWS Sandbox" and people don't receive "magic link" emails

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
    - Select the "Service limit increase" radio button
      - **Limit type:** "SES Sending Limits"
      - **Mail Type:** "System Notifications"
      - **Website URL - optional**
      - **Describe ... who have requested your mail:** "We authenticate users using email links only. Users who want to join and connect to the hosted Mozilla Hubs Room, will enter their email address to get this 'magic hub' link to authenticate. Anyone can choose to not enter their email and not join."
      - **Describe ... and complaint notifications:** "We've set up bounce and complaints to forward to an administrative email address. And we do not send any emails other than this 'magic' authentication email link to join a Hubs room. We don't store emails on our server."
      - **Will you comply with AWS Service Terms?:** "Yes"
    - Request 1
      - Region: Select `US East (Northern Virginia)`
      - Limit: Desired Daily Sending Quota
      - New Limit Value: 50,000
    - Case description: Answer the questions below in the message field:
      - What does your Hubs Cloud instance do? Add anything relevant to your use case in the request
      - Add this to your message: "The product does not support passwords, only email links to log in. As such, would like to use SES to send these emails. There are no other emails sent by the product other than these automated sign-in emails, sent at the time a user requests to log in. We do not send any unsolicited emails or other content-oriented emails, only sign in link emails. We do not store the email addresses of visitors. The emails are securely transmitted to our server at log-in time to send the email link."
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

### The specified key does not exist. Service: Amazon S3; Status Code: 404; Error Code: NoSuchKey

This is a bug in AWS Cloudformation that Amazon is working to address. Unfortunately, you'll have to delete and re-create the stack.

### My servers are Offline or "NoSuchKey" Error on my Hubs Cloud domain after successful deploy Hubs Cloud

Did you choose "Offline mode" when creating the stack? If so, you deployed correctly but your servers aren't running!

To get them running and take them "Online" follow the [Update the Stack Guide](./updating-the-stack.md). When you want to take them "Offline" again, follow the same process and select "Offline".

You can also specify a url to redirect traffic to when your servers are offline to avoid this error page.

### Our users are experiencing "Unable to connect to this room, please try again later."

We fixed this error with Hubs Cloud version 1.1.0 with an added TURN server. You need to upgrade from 1.0.0 to 1.1.0. Follow the process outlined in [Upgrade to a new stack release](./updating-the-stack.md#upgrade-to-a-new-stack-release)

And verify you're on 1.1.0 by following the steps in [Check if you're on version 1.1.0](./updating-the-stack.md#check-if-youre-on-version-110)

### In my hubs admin panel, I see NetworkError or Not Found page or no data populates in any of the admin menus.

Your account is likely **NOT** an admin! Switch account or check your hub stack parameters for the email address below.

#### Then, what is my hub stack's admin email address?

**Check Email via Cloudformation Stack**

1. Go to aws Management Console (check your **region**!)
2. Search and go to Cloudformation
3. Select Stacks
4. Select your hub stack - _No stacks? Did you delete it or are you in the wrong region?_
5. "Parameters" tab
6. Check "AdminEmailAddress" parameter. Make sure there are no capital letters!

**Check Email in aws Simple Email Service menu (SES)**

1. Go to aws Management Console (check your **region**!)
2. Select region **N. Virginia (us-east-1)** for _ALL_ region deploys! in upper right hand corner
3. Search and go to Simple Email Service
4. Select "Email Addresses"
5. One of these listed is your stack's admin email address.
   - Make sure there's no capital letters!
   - If your email is not "verified" yet, you need to click on confirmation link amazon sends you during cloud formation.

### How can I tell I'm on version 1.1.0?

Follow steps in [Check if you're on version 1.1.0](./updating-the-stack.md#check-if-youre-on-version-110)

## Missing a solution?

If you can't find what you need in the rest of the documentation, see the help page for ways to get in touch.
