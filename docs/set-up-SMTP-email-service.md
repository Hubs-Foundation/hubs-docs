---
id: set-up-SMTP-email-service
title: Set up SMTP email service
description: Instructions on how to set up a simple mail transfer protocol (SMTP) email service to verify user accounts. Details include setting up an account at Scaleway, connecting it to Porkbun for domain verification and generating an API token. These items are needed for setting up your own Hubs instance.
---

Hubs software needs to send out emails with magic links to verify that your visitors are real people and \*not\* sentient AI bots here to destroy humanity. 🤖

If there are emails that need to be sent, there needs to be a controlling entity that does the work of sending the emails around. You will control that email service.

> 💡Tip: Do not be confused that there are 2 types of email when setting up Hubs.

* Your admin email is the main email account you have been using to set up accounts. It will control your Hubs. To help you, we have tried to refer to your controlling email as your admin email. Your admin email could be hosted nearly anywhere (work email, home email, etc.). We used gmail in our testing.  
* This set of instructions (Set up SMTP email service) is about setting up the magic link emails. These are the automatic emails sent via SMTP services when a user tries to log into Hubs.

You can pick any email service that provides SMTP. These instructions will use Scaleway.

Scaleway offers a free service for 300 emails maximum per month. (See our [FAQs](./faq.html#i-need-more-than-300-emails-per-month) if you need more than 300 emails per month.)  We find this reasonable. Additionally, Scaleway is based in France, [has a satisfactory Privacy Policy](https://www.scaleway.com/en/privacy-policy/), and has [an environmentally-friendly approach](https://www.scaleway.com/en/about-us/).)

## **Part 1 Set up an account at Scaleway**

1\. Go to [Scaleway](https://www.scaleway.com/en/transactional-email-tem/). Select **Sign up**

![Capture of Scaleway Transactional Email home page. Sign up button in upper right corner is highlighted.](img/smtp/image1.png)

2\. At Account type, we recommend **Personal project.**

![Capture of Welcome to Scaleway, Account Type query box. Personal project menu option is highlighted.](img/smtp/image2.png)

3\. Select **Sign up with your email**.

![Capture of Welcome to Scaleway, Account Type query box. Personal project menu option and Sign up with your email is highlighted.](img/smtp/image3.png)

4\. Enter **your email address**. Select **I accept Scaleway’s Terms of Services and Scaleway’s Data Protection Agreement**. Select **Confirm email address**. 

![Capture of Welcome to Scaleway, Account Type query box. Email address, acceptance of Terms of Service and Data Protection Agreement, Friendly Captcha, and Confirm email address are highlighted.](img/smtp/image4.png)

![Capture of Scaleway confirmation that they sent a link to an email address. Text: Check your inbox to log in.](img/smtp/image5.png)

5\. **Check your email.** Within the confirmation email, select **Confirm my email address.** 

Scaleway account registration email:

![Capture of confirmation example email. "Confirm my email address" button is highlighted.](img/smtp/image6.png)

6\. You may close the previous window at Scaleway. In the window that opened from the email confirmation link, you are taken to Personal details, Set up your account. Enter **First name, Last name**. Select **Create account**. 

![Capture of Scaleway, Personal details, Set up your account page. First name, Last name (both required) and Create account are highlighted.](img/smtp/image7.png)

7\. At Billing address, enter your billing address, enter **your street address, postal code, city**. Select **your Country**, and then select **your Region** from the drop down menus. and select **Add billing address**. 

![Capture of Scaleway Enter your billing information page. Fields for Street address, Postal code, City, Country, and Region are blurred. "Add billing address" button is highlighted.](img/smtp/image8.png)

<a id="part-1-step-8">8\.</a> To use SMTP services from Scaleway, you must validate a payment method. Scaleway only has a pay by credit card option. For Add your payment method, enter your credit card number, expiration date, CVV or CVC, Name on card, and select **Add payment method.**

There will be a notification that your account is free, however, Scaleway will charge you a one (1) euro charge that you will need to use to verify the billing connection between Scaleway and your payment source.

![Capture of Scaleway Add your payment method page. Card number, Expiration date, CVV/CVC, and Name on card fields, and Add payment method button are highlighted.](img/smtp/image9.png)

This is an example Mastercard credit card confirmation screen.

![Capture of Mastercard credit card confirmation screen. Text explains that the receiver at a phone number will receive a text with verification code. "Continue" button in blue is in the low center of the page.](img/smtp/image10.png)

Note: Scaleway requests Enter the 4-digit code included in the temporary one euro charge ID. It will be similar to this format: SCW\* C-7699. This can be a problematic step. It can show up immediately in a text alert or a pending charge at the credit card account site. If the 4-digit code does not show on your transaction, you may need to contact your bank or credit card company. The four digit code in this example below was 4550.

Text:

![Capture of an example text notification of Scaleway charge with example verification code of C-4550.](img/smtp/image11.png)

Pending charge at credit card site:<br>
![Capture of credit card site details of Scaleway charge showing the verification code of C-4550 in the Description field.](img/smtp/image12.png)

At Scaleway Console, after entering the 4-digit code, select **Verify payment method**.
![Capture of Scaleway confirmation page to submit the verification code. Instructions indicate that the code is the transaction label. For example, from the prior captures, the code would be 4550.](img/smtp/image13.png)

9\. At Create your first Project, enter a Project name and Project description. Select **Continue**. 

> 🤔 Advice: We used HubsCEProject and magic link emails for your HubsCE instance.

![Capture of Scaleway, Project details, Create your first Project page. Project name, Project description, and Continue are highlighted.](img/smtp/image14.png)

10\. At Project use case, Configure your project dashboard, select **Other or I don’t know**. Select **Start working**.  

> 🤔 Advice: if you have not entered the credit card information in [Part 1, Step 8](#part-1-step-8), Scaleway will not allow you to proceed to use their services (buttons will be grayed out or not available).

![Capture of Scaleway, Project use case, Configure your Project Dashboard page. Other or I don't know and Start working are highlighted.](img/smtp/image15.png)

This is what the Scaleway Console page could look like:

![Capture of Scaleway Console. Project HubsCEproject shown with tabs for Overview, Settings, and SSH keys.](img/smtp/image16.png)

##  **Part 2 Connect Scaleway to Porkbun**

11\. At the Scaleway Console, in the Products menu (sidebar), select **Domains & Web Hosting,** then select **Transactional Emails.** 

![Capture of Scaleway Menu section. Domains & Web Hosting and Transactional Email are highlighted.](img/smtp/image17.png)

12\. For Domains, select **Add domain**.

![Capture of Scaleway, Transactional email page. Add domain is highlighted.](img/smtp/image18.png)

13\. At Add a new email domain: 

  a. Add your domain, for Add a domain external to Scaleway, enter **your porkbun domain.** For example: mycoolhubs.space  

  > 💡Tip: The domain can only contain alphanumeric characters, dots, and dashes. 

  b. For Estimated monthly cost, this would be your estimated number of emails beyond 300 transactional emails. 
  
  > 💡Tip: You can enter zero here OR whatever you think you’ll need beyond 300 emails. In our example, we entered 5\. 

  c. Select **Validate domain name**.

![Capture of Scaleway, Add your domain page. Domain name, Monthly number of emails, and Validate domain name are highlighted.](img/smtp/image19.png)

14\. At Verification, **Choose your configuration mode**, **Configure your DNS records manually** may be default selected. That is OK.

> 💡Tip: Scaleway says “The verification of your domain might take 48 hours.” We found that it was quick.

Lower on this same page, Scaleway shows the Add SPF record, Add DKIM record, Add MX record, and the Add DMARC record information. You will use these values at Porkbun.

![Capture of Scaleway Add a new email domain page. Choose your configuration mode, Configure your DNS records manually is automatically selected if the domain is not a Scaleway-hosted domain. Lower on page is Add SPF record.](img/smtp/image20.png)

## **Part 3 Domain verification and adding A Records**

Now you will add in the SPF, DKIM, MX, and DMARC records from Scaleway to Porkbun DNS records.

15\. Log into [Porkbun.com](https://porkbun.com/), if you are not already logged in. Under ACCOUNT, select **Domain Management**.

![Capture of Porkbun Account page, Domain Management from drop down menu.](img/smtp/image21.png)

16\. For your domain, select **Details**.

![Capture of Porkbun Domain Management page. Details button to the right bottom is highlighted in purple.](img/smtp/image22.png)
 
17\. Select **DNS Records** (the active link is the little edit symbol).

![Capture of Porkbun, Domain Management, Details page. DNS Records pop out button is highlighted in purple.](img/smtp/image23.png)

Your DNS Records popup, the top will look like this:

![Capture of Porkbun Manage DNS Records popup page. Fields for Type, Host, Answer, and TTL are empty. Add blue button is at lower right of popup.](img/smtp/image24.png)

At the bottom of the popup, you should have 2 existing default records, possibly with the word “pixie” in them.

![Capture of Capture of Porkbun Manage DNS Records popup page, lower section with Current Records. Could be showing ALIAS and CNAME records.](img/smtp/image25.png)

18\. Delete any records that have “pixie” in them. Select **the trashcan icon.** Porkbun will not need them.

![Capture of Porkbun Manage DNS Records popup page. Example of why and how to delete any default DNS records that Porkbun has already made. A trashcan icon is highlighted with an arrow.](img/smtp/image26.png) 

19\. Now, you will copy and paste *from* Scaleway *to* Porkbun. 

You will cut and paste entries for each of 4 entries: 1 for SPF, 1 for DKIM, 1 for MX, and 1 for DMARC. 

> 💡 Tip: You may want to have 3 screens simultaneously open on your computer: 1. These instructions 2. Scaleway 3. Porkbun

## SPF

1. At Porkbun, at the top of the DNS Records popup, at the Type menu, select **TXT** (see second capture below).  
2. At Porkbun, leave **Host** blank.  
3. At Scaleway, copy the **Value**. At Porkbun, paste it into **Answer/Value**.  
4. Leave TTL as 600.  
5. Leave Priority blank.  
6. For Notes: This is optional. We used Scaleway SPF entry  
7. Select **Add.**

![Capture of Scaleway Add a new email domain page, Add SPF record (\#2) section. The copy icon for the Value is highlighted.](img/smtp/image27.png)

Once you do this, the record should appear down below on the Porkbun DNS records popup.

![Capture of Porkbun Manage DNS Records popup page. Field for Type is highlighted and set to TXT - Text Record. Host is blank. Answer/Value has Scaleway SPF Value highlighted. Notes of "Scaleway SPF record" is highlighted.  Add button is highlighted.](img/smtp/image28.png)

The DKIM, MX, and DMARC entries follow the same procedure.

## DKIM

1. At Porkbun, from the Type menu, select **TXT.**  
2. At Scaleway, copy the **Name data.** At Porkbun, paste it into **Host**.  
3. At Scaleway, copy the **Value data**. At Porkbun, paste it into **Answer/Value**.  
4. Leave TTL as 600.  
5. Leave Priority blank.  
6. For Notes: This is optional. We used Scaleway DKIM entry  
7. Select **Add.**

### WARNING about DKIM entries and Porkbun

In our testing, we found that Porkbun added an extra domain name to the end of the DKIM record, Host field.

For example, if Scaleway offers this link: 7yadyayayayayayaydydyaady._domainkey.mycoolhubs.space

Porkbun is going to automatically change it to: 7yadyayayayayayaydydyaady._domainkey.mycoolhubs.space.mycoolhubs.space

This will not work.

![Capture of Porkbun DNS Management, A records page. The A record type "TEXT" might repeat a domain name twice. For example: xxx.domainky.mycoolhubs.space.mycoolhubs.space.](img/smtp/image29.png)

We tested this and found that it is best to make sure that the domain is only listed ONE TIME at most inside a link. Porkbun is going to add it on the end automatically for you.

At Porkbun, to delete the extra domain (the mycoolhubs.space part) at the end of the link, at that entry, select **the edit pencil**. Then you can edit the entry either by cutting and pasting in a shorter link (Method 1 below) or by deleting the extra link added by Porkbun (Method 2 below).

![Capture of Porkbun DNS Management, A records. The A record type "TEXT" might repeat a domain name twice. For example: xxx.domainky.mycoolhubs.space.mycoolhubs.space.Edit this entry with the pencil icon highlighted in purple.](img/smtp/image30.png)

#### Method 1

**Cut like this from Scaleway** and **paste like this into the Porkbun host field** (notice no domain is after domainkey):

7yadyayayayayayaydydyaady._domainkey

> 💡 Tip: don’t copy the period after domainkey

![Capture of Scaleway Add a new email domain page, Add DKIM record (\#2) section. The text up to domainkey is highlighted.](img/smtp/image31.png)

####   Method 2

In the Porkbun Host field, delete all of the text after domainkey. You may have to use your keyboard arrow keys to move to where the domain text is and then use delete on your keyboard.

![Capture of Porkbun DNS management, A records page, DKIM entry with text entry field highlighted.](img/smtp/image32.png)

After either Method 1 or Method 2, to save, select **the floppy disk**.

![Capture of Porkbun DNS management, A records page, DKIM entry with save icon highlighted.](img/smtp/image33.png)

Porkbun will then add your domain on the end automatically once you’ve added it. That is fine.

For example, the final displayed result at Porkbun will be:  
7yadyayayayayayaydydyaady._domainkey.mycoolhubs.space

![Capture of Porkbun DNS Management, A records. The A record corrected with domain name.](img/smtp/image34.png)

## MX

1. At Porkbun, from the Type menu, select **MX**   
2. At Scaleway, there is no **Name data.** Leave **Host** blank.  
3. At Scaleway, copy the **Value data**. At Porkbun, paste it into **Answer/Value**.  
4. Leave TTL as 600.  
5. Leave Priority blank.  
6. For Notes: This is optional. We used Scaleway MX entry  
7. Select **Add**.

## DMARC 

1. At Porkbun, from the Type menu, select **TXT.**  
2. At Scaleway, copy the **Name data.** At Porkbun, paste it into **Host**.  
3. At Scaleway, copy the **Value data**. At Porkbun, paste it into **Answer/Value**.  
4. Leave TTL as 600.  
5. Leave Priority blank.  
6. For Notes: This is optional. We used Scaleway DMARC entry  
7. Select **Add**.

Once your 4 entries are in, the lower part of the page will look similar to this below.

>💡 Tip: We added optional ‘Notes’ to our entries. We found that it helped to keep track of what each entry was.

![Capture of Porkbun, DNS Management, A records entries. Types are MX (noted as MX entry), TXT (noted as SPF entry), TXT (noted as DKIM entry), and TXT (noted as DMARC entry).](img/smtp/image35.png)

20\. Back at Scaleway, select the checkbox for **I have added these DNS records to my DNS zone**. Select **Verify domain**. Scaleway says “The verification of your domain might take 48 hours.” We found that it was quick.

![Capture of Scaleway Add a new email domain page, Add DMARC record (\#4) section. The I have added these DNS records to my DNS zone checkbox is checked and verify domain button is highlighted.](img/smtp/image36.png)

21\. **Check your email.** Scaleway sends you an email with the status of your domain. Your domain will be either verified or not verified.

Example email:

![Capture of confirmation email from Scaleway that domain is verified.](img/smtp/image37.png)

At Scaleway, on the Transactional Email page, you may have a red dot for your domain name with a popup that says Your domain is unverified.  Check your email for more details.

![Capture of Scaleway, Transactional Email page. For Domains, the Name field is blurred. There is a small red dot, indicating not verified, to the left of the blurred field.](img/smtp/image38.png)

If you see a notification that your DKIM entry is “missing or incorrect DNS records on your domain”, you may check that you entered the data correctly at Porkbun.

Also, make sure you carefully follow the steps within these instructions at Part 3, Step 19 about [DKIM entries](#warning-about-dkim-entries-and-porkbun).

If you’ve cleared up any problems, just refresh this page at Scaleway and the red dot should turn into a green dot.

If you have a green dot next to your domain name, it is verified. You will be notified by email as well.

![Capture of Scaleway, Transactional Email page. For Domains, the Name field is blurred. There is a small green dot, indicating verified, to the left of the blurred field.](img/smtp/image39.png)

## **Part 4 Generate SMTP API token**

22\. At Scaleway, Transactional Email. Select **your domain**. You will arrive at the Email activity tab.

![Capture of Scaleway, Transactional Email. Domain is highlighted.](img/smtp/image40.png)

23\. Select the **Overview** tab.

![Capture of Scaleway, domain page. Overview tab is highlighted.](img/smtp/image41.png)

24\. At SMTP configuration, the listed items are shown below. **Copy and save the server, default port, and username somewhere securely.**

   a. Server - **copy and save**

   b. TLS connection ports - ignore

   c. Default ports - **copy and save 2587**  
   
   > 🤔 Advice: When collecting email parameters: check what ports your email provider supports for SMTP. The standard ports are 25, 465 and 587, but your Kubernetes provider may block those ports as a spam-fighting measure. If your email provider supports non-standard ports, use one of them. (For Scaleway, use port 2587.)

   d. Username - **copy and save**

![Capture of Scaleway, domain page, Overview tab, API key and SMTP configuration sections. Server, Default ports, Username are highlighted. Also, Generate an API key for your IAM application is highlighted.](img/smtp/image42.png)

25\. For Password, go to the API key section. Select **Generate an API key for your IAM application**. 

> 💡 Tip: In case you log off and restart here, you are heading to the Scaleway, Security & Identity menu, IAM section.

![Capture of Scaleway Console menu. Security & Identify and IAM section are highlighted.](img/smtp/image43.png)

26\. For **Identify and Access Management, Applications tab,** select **Create application**.

   ![Capture of Scaleway, Identity and Access Management (IAM) page. Applications tab is highlighted. Create an application is highlighted.](img/smtp/image44.png)

<a id="part-4-step-27">27\.</a> For Create an Application, **Enter a name** and optional description. 

   a. For Name, we used MyHubsCE.  

   b. For Description, we used My Hubs SMTP application.  

   c. Skip the **Enter key value tags** and **Attach a policy** sections.  

   d. Select **Create application**.

![Capture of Scaleway, Create an Application page. Enter a name and optional description and Create application buttons are highlighted.](img/smtp/image45.png)

28\. At Identity and Access Management (IAM), your application should be listed. Select the **Policies** tab. Leave the three default policies there. Then select **Create policy**.

![Capture of Scaleway, Identity and Access Management (IAM) page. Policies tab is highlighted. Create policy is highlighted.](img/smtp/image46.png)

29\. At Create A Policy, **enter a name** and optional description.  

   a. For Name, we used MyHubsCEPolicy.  

   b. For Description, we used My Hubs SMTP policy.  

   c. For key value tags, skip this.  

   d. For Select a principal, select **the drop down menu**, and pick **Application**. Then select **whatever name you created for your application** (in these instructions, [Part 4, Step 27](#part-4-step-27)). For our example, we selected MyHubsCE.  

   e. Select **Add rules**.

![Capture of Scaleway, Create a Policy page. Enter a name and optional description, Select a principal, and Add rules button are highlighted.](img/smtp/image47.png)

30\. At Create rules, Rule #1, Scope, select **Access to resources**. At Select or Type Project name, select **All current and future projects**. Select **Validate**.

![Capture of Scaleway, Create a Policy page. For Rule #1, Scope, Access to resources is set to All current and future projects and highlighted. Validate button is highlighted.](img/smtp/image48.png)

31\. At Create Rules, Rule #1, Permission sets, in the Products Menu, select **Domains & Web Hosting**, in the Permission sets, select **TransactionalEmailFullAccess.** 

> 🤔 Advice: Be careful to select TransactionalEmailFullAccess. There are other accesses that look very similar, but won’t work! Select **Validate**.

![Capture of Scaleway, Rule #1 page, Permission sets. Domains & Web Hosting, TransactionalEmailFullAccess and the Validate button are highlighted.](img/smtp/image49.png)

32\. In Add a condition using CEL, you do not need to change or add anything here. Select **Validate**. 

![Capture of Scaleway, Rule #1 page.Validate button is highlighted.](img/smtp/image50.png)

33\. Select **Create policy.**

![Capture of Scaleway, Create a Policy page. Create policy button is highlighted.](img/smtp/image51.png)

34\. At MyHubsCEPolicy, select **Back to Policies**.

![Capture of Scaleway, MyHubsCEPolicy page. Back to Policies link is highlighted.](img/smtp/image52.png)

35\. Select the **API keys** tab. Select **Generate API key**.

![Capture of Scaleway, Identity and Access Management (IAM) page. Generate API key button is highlighted.](img/smtp/image53.png)

36\. At the Generate an API key popup, Generate key, 

a. For Select API key bearer, Select **An application**.

b. Select **your named application** from the dropdown menu.

c. For the Description, **enter optional text** here. We entered My Hubs CE SMTP API token. 

d. For Expiration, set it to **Never**. 

e. For Will this API key be used for Object Storage, select **No, skip for now** (default). 

f. Select **Generate API key.**

![Capture of Scaleway, Generate an API key page. For Generate key, Select API key bearer, An application with the MyHubsCE is highlighted. Description field with text: My Hubs CE SMTP API token is highlighted.  Generate API key is highlighted.](img/smtp/image54.png)

37\. At Credentials Usage, Copy and save your **Access Key ID** and **Secret Key** somewhere securely. Select **Close**.

![Capture of Scaleway, Identity and Access Management (IAM), Policies page, API keys tab, Generate an API key page. Access Key ID and Secret ID codes are blurred. The copy text button to the right of the codes and the Close gray button are highlighted.](img/smtp/image55.png)

Result:

![Capture of Scaleway, Identity and Access Management (IAM), Policies page, API keys tabs. New MyHubsCE key shown.](img/smtp/image56.png)

Yay! You’ve done it! Your new API key will be assigned to your domain. You may logout of Scaleway and return to the [Beginner’s Guide](https://docs.hubsfoundation.org/beginners-guide-to-CE.html#7-download-and-install-kubectl). 

## **Sources**

[Scaleway Transactional Email Quickstart guide](https://www.scaleway.com/en/docs/transactional-email/quickstart/)

[How to generate API keys for API and SMTP sending with IAM](https://www.scaleway.com/en/docs/managed-services/transactional-email/how-to/generate-api-keys-for-tem-with-iam/)

[How to create an IAM application](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-application/)

[How to create an IAM policy](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-policy/)

[Permission sets](https://www.scaleway.com/en/docs/identity-and-access-management/iam/reference-content/permission-sets/)

[How to create API keys](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/#how-to-create-an-api-key-for-an-iam-application)

[Setting up SMTP Standard settings](https://www.scaleway.com/en/docs/managed-services/transactional-email/reference-content/smtp-configuration/#standard-settings)

[Why is SMTP blocked?](https://docs.digitalocean.com/support/why-is-smtp-blocked/)