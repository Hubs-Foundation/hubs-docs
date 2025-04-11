---
id: install-kubernetes-digitalocean
title: Setting up a DigitalOcean account and Managed Kubernetes
sidebar_label: Setting up DOKS
---

[*N.B.: This is a placeholder without screenshots]

## Create a DigitalOcean Account

1. Go to DigitalOcean. Select Get started. 
 
   DigitalOcean (DO) “only bills for the services you use” so there is no initial startup charge.
Currently DO is offering a US$200 credit for the first 60 days for new customers. Alternatively, you can get the US$200 credit AND Hubs community member Hrithik receives a small credit via his referral link. The referral is no extra cost to you. These instructions follow the referral link.

2. For Create your account, select “Sign up with Google”, “Sign up with Github” or “Sign up with Email”, your choice. These instructions will use “Sign up with Email”.

3. Enter in a required email address and password. Keep these passwords somewhere safe. Select Sign Up.

    1. Notification to check your email for a confirmation link:

4. Check your email and select the confirmation link that starts with cloud.digitalocean.com/account_verification. The link logs you into your DigitalOcean account. You may close the other DO page now.

5. On this new page, you are asked some demographic questions that you must answer before selecting Submit:
   1. What do you plan to build on DigitalOcean?
      
      Choices are: An API, Data analytics infrastructure, Web3 or decentralized application, A website or content site, AI and machine learning, Video or livestreaming platform.
      > 🤔 Advice: We recommend Web3 or decentralized application
   2. What is your role or business type?

      Choices are Digital agency / MSP, Freelancer or Consultant, Software company, E-commerce company, Hobbyist or Student, Other.
   3. What is your monthly spend on cloud infrastructure across cloud platforms? (provide an estimate)

      Choices are $0-$50, $50-$500, $500-$1,000,$1,000-$5,000, $5,000-$10,000, $10,000-$100,000, More than $100,000.
   4. How many employees work at your company?

      Choices are I work alone, 2-9, 10-99, 100-499, 500-999, 1000+
   5. How do you prefer to manage cloud resources?

      Choices are: Cloud console, CLI or API, SDK, Infrastructure as Code, I’m not sure.
      > 🤔 Advice: We recommend I’m not sure.

6. For Verifying your Payment Information, select either ‘Add a Card’ or ‘Connect via PayPal’.
   1. If you choose Add a Card, enter your Card number, Cardholder name, Country, and Street address. Select Save and Sign Up.

   2. If you choose Connect via PayPal, for Choose an amount, select US$5.00, US$10.00, or US$20.00.
      >🤔 Advice: we recommend $5.00, and select PayPal.

7. Once you have completed setting up your payment method, you are taken to a welcome page. Select Explore our control panel.

## Set up managed Kubernetes cluster

1. DigitalOcean will create for you a default project called  “first-project”. From the MANAGE menu, select Kubernetes.

2. Select Create a Kubernetes Cluster.

3. For Create a Kubernetes cluster, Choose a data center region, select a region geographically closest to you. For ‘Select a version’- Keep whatever is recommended.

    Choices are in North America, Europe, Asia, and Australia.

4. For Choose cluster capacity, Select a scaling type, select Fixed or Autoscale.  
      > 🤔 Advice: Fixed will help control your costs, but Autoscale will make sure that the servers are up if and when you need them. You decide: Fixed = cheaper but slightly less reliable, Autoscale = more expensive but more reliable. We are selecting Fixed in these instructions.
      
      > Note: You may ignore this warning:  You have reached the 3 Droplet on your account. Request increase.

5. For Node pool name: Change the name to something that makes sense to you.  
      > 🤔 Advice: hcce-cluster-yoursetupreason-date
6. For Machine Type:  Leave selected as Basic, Regular SSD
7. For Node plan: Select $24/month per node ($0.036/hour) of 4GB total RAM / 2 vCPUs / 80 GB storage (June 2024 specifications) Tip 💡Hubs Community Edition needs 3-3.5 GB RAM to run. Choosing 4 GB RAM gets you the minimum you need.  If you run into too many problems, re-think this choice.
        > 💡Tip: DigitalOcean charges an extra $12/month for mandatory load balancing.
         So a $24 choice here will be $24 + $12 a month for a total of $36 a month.
   
8. For Nodes: Select the negative sign to reduce this from 3 to 1. 
       > 🤔 Advice:  One node is enough. Warning: if you increase the nodes to 2 or more, you will need to set up external storage and an external database to prevent data loss. This is beyond the capabilities of this Beginner’s Guide.

   Note: This warning should have changed to: You are near the 3 Droplet limit on your account. Request increase. You can continue to ignore this warning.

9. For Select Additional options- If you need high Availability you can select the checkbox for Add high availability.  
      > 🤔 Advice: For a production-ready cluster, there are a number of other actions that will have more impact. Do not buy this (it is an extra $40/month!), but you do what’s right for you. 

     If you need to automate your database management, select the checkbox for Add database operator.  
      > 🤔 Advice: You do not need this.

10. For Finalize, Name: Enter a cluster name. From DigitalOcean, it “can only contain lowercase alphanumeric characters and dashes”. 💡 Tip: We picked “hcce-myfirstname”

11. Project: Leave this as first-project.

12. Tags: Tags are optional. Our advice is to add a minimum of one tag to help describe your project to yourself. You might use tags more if you have more than one cluster for, you know, later in life when you are a big deal.

13. Select Create Cluster.

In a few seconds or minutes, your Kubernetes Cluster will be up and running. Hooray! Congratulations! You bought hosting services on the cloud.

## Download `doctl`

Doctl is the same idea as kubectl, it controls Digital Ocean via the command line interface.

DigitalOcean documents [downloading and installing `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-1-install-doctl)

Here are the steps for Windows:

1. Select GitHub Download (Windows).

2. For Windows, we’ll go to the Releases page for the doctl GitHub project.

3. Select the latest release for your version of Windows. It might be a windows-amd64.zip file like doctl-1.110.0-windows.amd64.zip

4. Right-click the zip file and select Extract All…  It’s OK to extract it right back into the downloads folder.


5. Select the doctl.exe file and move it (cut and paste is OK) to a separate folder just for code that is on your Local Disk (C :) drive.

6. Create a new folder called Code. Paste in the doctl.exe file.

## Install `doctl` in your paths

1. In Windows 11, enter System in your taskbar. Select System Information.

2. Select System, then select About.

3. Select Advanced System Settings.

4. In System Properties, select Environment Variables.

5. Select Path, then select Edit.

6. Select New, then at Browse for folder, select This PC.

7. Select Local disk, then select Code (this is the folder you made in Step 5), and select doctl.

8. Then select OK four (4) times to leave these screens.

## Verify `doctl` is working

To verify that `doctl` was installed, in Windows 11, enter command in your taskbar and for Command Prompt, select the Command Prompt image or Open.

There should be a flashing cursor.

Enter `doctl version` and hit enter on your keyboard. If you see `doctl version #.##` you did it!

## Authenticate `doctl`

You need to get a ‘password’ in the form of an API Token from DO so that your modified Hubs code can be accepted by DO. You’ll insert that token into doctl so that DigitalOcean can understand it.

1. Go to DigitalOcean.  From the same sidebar where MANAGE is, go to the 4th menu section that has Billing, Support, Settings, API. Select **API**.
💡Tip: We found that you can API via your Tab button.

2. Select **Generate New Token**.

3. Token Name:  This can be any text. The name will appear with dashes. For example: My-First-Token.

4. Expiration: Select **no expire**.

5. Scopes: Select **Full Access**.

6. Select **Generate Token**.

7. _Copy and save_ your Token somewhere securely. If you ever change computers to control your Hubs, you’ll either need this Token or you’ll need to generate a new Token.

8. Copy and paste or type _the following text_ into the terminal window of VS Code, changing \<NAME\> to any generic name (e.g. MyHubsCE) and hit enter on your keyboard. No need to keep the less than or greater than symbols: < >
    ```shell 
    doctl auth init --context <NAME>
   ```
   For example:
   ```shell
    doctl auth init --context MyHubsCE
    ```

9. The terminal will prompt `> Enter your access token:`  **Paste in the DO API token.** Hit enter on your keyboard.

    Green check mark means success!

10. Then type or paste this line, putting the name you used from Step 13a above for <\NAME\>
```
doctl auth switch --context <NAME>
```
*Make sure you type two dashes just before the text ‘context’
For example doctl auth switch --context MyHubsCE

11. Return to DO, go to your Kubernetes cluster. You’ve already done step 1 so now go to step 2  called ‘Connecting to Kubernetes’.

12. Copy the code presented in the **Automated (recommended)** tab and paste it _into your Terminal window_ and _hit enter on your keyboard_.

    Results:

13. Select **Continue**.

14. Skip DO’s Step 3 called **Verify Connectivity**, select **Continue**.

15. Skip DO’s Step 4 called **Deploy a workload**, select **Great, I’m done**.


[Back to Overview](./install-overview.md#4-set-up-an-account-and-create-a-managed-kubernetes-cluster)
