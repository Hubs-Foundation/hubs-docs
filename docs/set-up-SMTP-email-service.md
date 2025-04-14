# **Set up SMTP email service**

Hubs software needs to send out emails with magic links to verify that your visitors are real people and \*not\* sentient AI bots here to destroy humanity. 🤖 

If there are emails that need to be sent, there needs to be a controlling entity that does the work of sending the emails around. You will control that email service.

Tip: Do not be confused that there are 2 types of email when setting up Hubs.

* Your admin email is the main email account you’ve been using to set up accounts. It will control your Hubs. To help you, we’ve tried to refer to your controlling email as your admin email. Your admin email could be hosted nearly anywhere (work email, home email, etc.). We used gmail in our testing.  
* This set of instructions (Set up SMTP email service) is about setting up the magic link emails. These are the automatic emails sent via SMTP services when a user tries to log into Hubs.

You can pick any email service that provides SMTP. These instructions will use Scaleway. 

Scaleway offers a free service for 300 emails maximum per month. (See our [FAQs](https://docs.google.com/document/d/17TSXEuisDYRl8MEJIbv_envxqoEm3f3Z_E9U3Ci7_oU/pub) if you need more than 300 emails per month.)  We find this reasonable. Additionally, Scaleway is based in France, [has a satisfactory Privacy Policy](https://www.scaleway.com/en/privacy-policy/), and has [an environmentally-friendly approach](https://www.scaleway.com/en/about-us/).)

# **Part 1 Set up an account at Scaleway**

1. Go to [Scaleway](https://www.scaleway.com/en/transactional-email-tem/). Select **Get started**.

![Capture of Scaleway homepage.](img/smtp/image1.png)

2. At New to Scalway, select **Sign up**.

![Capture of Scaleway Get Started page with Text "New to Scaleway? Sign up at center bottom highlighted in purple.](img/smtp/image2.png)

3. At Personal, enter your **first name, last name, email address**, select **I accept Scaleway’s Terms of Services and Scaleway’s Data Protection Agreement**. The FriendlyCaptcha  should already say I am human. Select **Create account**.  

![Capture of Scaleway Create your Scaleway account page. Fields for First name, Last Name, Email address filled in but blurred. Checkbox for "I Accept Scaleway's Terms of Services And Scaleway's Data Protection Agreement" is checked. Friendly Captcha completed. Create account purple button is at the center bottom of page.](img/smtp/image3.png)  

You do not need to select these options, Open in Gmail or Open in Outlook. Notification to check your email:

![Capture of Scaleway confirmation that they sent a link to an email address. Text: Check your email.](img/smtp/image4.png)

4. **Check your email.** Within the confirmation email, select **Confirm my email address.** 

Scaleway account registration email:

![Capture of confirmation example email. "Confirm my email address" button in lower left is highlighted in purple.](img/smtp/image5.png)

5. You may close the previous window at Scaleway. In the window that opened from the email confirmation link, you are taken to the Scaleway Console page, Enter your billing page. 

Enter **your street address, postal code, city**. Select **your Country**, and then select **your Region** from the drop down menus. Select **add billing address**.

![Capture of Scaleway Enter your billing information page. Fields for Street address, Postal code, City, Country, and Region are blurred. "Add billing address" purple button is highlighted at center bottom.](img/smtp/image6.png)

6. To use SMTP services from Scaleway, you must validate a payment method. Scaleway only has a pay by credit card option. For Enter your billing information, **enter your credit card number, expiration date, CVV or CVC, Name on card,** and select **Add credit card.**

There will be a notification that your account is free, however, Scaleway will charge you a one (1) euro charge that you will need to use to verify the billing connection between Scaleway and your payment source.

![Capture of Scaleway Enter your billing information page. Card number, Expiration date, CVV/CVC, and Name on card fields blurred. "Add credit card" purple button in low center highlighted in purple.](img/smtp/image7.png)

This is an example Mastercard credit card confirmation screen.

![Capture of Mastercard credit card confirmation screen. Text explains that the receiver at a phone number will receive a text with verification code. "Continue" button in blue is in the low center of the page.](img/smtp/image8.png)

Note: Scaleway requests Enter the 4-digit code included in the temporary one euro charge ID. It will be similar to this format: SCW\* C-7699. This can be a problematic step. In our testing, it worked fine for one user, showing up immediately in a text alert and also as a pending charge at the credit card account site. The four digit code in this example was 4550\.

Text:

![Capture of an example text notification of Scaleway charge with example verification code of C-4550.](img/smtp/image9.png)

Pending charge at credit card site:  
![Capture of credit card site details of Scaleway charge showing the verification code of C-4550 in the Description field.](img/smtp/image10.png)

If the 4-digit code does not show on your transaction, you may need to contact your bank or credit card company.![Capture of Scaleway confirmation page to submit the verification code. Instructions indicate that the code is the transaction label. For example, from the prior captures, the code would be 4550.](img/smtp/image11.png)

7. At the Welcome to Scaleway question box, What will you be using Scaleway for pop up, our advice is to answer: select **Other**, enter text **Sending magic link emails**. Select **Start exploring**.

![Capture of Scaleway demographic question of "What will be you using Scaleway for?"  "Other" choice is checked. For "Tell us more..." text: Sending Magic link emails. is entered. "Start exploring" purple button is at the center bottom.](img/smtp/image12.png)

# **Part 2 Connect Scaleway to Porkbun**

1. At the Scaleway Console, Organization Dashboard, you will be offered more options to further verify your account. This is optional. 

2. In the Scaleway Console menu, in **Products**, **Managed Services**, select **Transactional Email.** 💡Tip: We had to scroll down to find this.

![Capture of Scalway Console, Transactional Email section.](img/smtp/image13.png)

3. Select **Add domain.**

![Capture of Scaleway Transaction Email page. "+ Add domain" purple button highlighted in purple.](img/smtp/image14.png)

4. At Add a New Domain

a. For Enter domain name, **enter your porkbun domain.** For example: mycoolhubs.space 

The domain can only contain alphanumeric characters, dots, and dashes. 

b. At Estimated monthly cost, this would be your estimated number of emails beyond 300 transactional emails. 🤔 Advice:  You can enter zero here OR whatever you think you’ll need beyond 300 emails. Select the checkbox for I have read and accept Scaleway’s antispam policy. Select **Validate domain name**. 

![Capture of Scaleway Add a New Domain page. Field for domain name, monthly number of emails and, checkbox for "I have read and accept Scaleway's antispam policy" and "Validate domain name" button are highlighted in purple.](img/smtp/image15.png)

# **Part 3 Domain verification and adding A Records**

In this step, you will add in the SPF, DKIM, MX, and DMARC records between Scaleway and Porkbun.

1. Log into [Porkbun.com](https://porkbun.com/), if you are not already logged in. Under ACCOUNT, select **Domain Management.**

![Capture of Porkbun Account page, Domain Management from drop down menu.](img/smtp/image16.png)

2. For your domain, select **Details**. 

![Capture of Porkbun Domain Management page. "Details" button to the right bottom is highlighted in purple.](img/smtp/image17.png)

3. Select **DNS Records** (the active link is the little edit symbol).

![Capture of Porkbun, Domain Management, Details page. "DNS Records" pop out button is highlighted in purple.](img/smtp/image18.png)

Your DNS Records popup, the top will look like this:

![Capture of Porkbun Manage DNS Records popup page. Fields for Type, Host, Answer, and TTL are empty. "Add" blue button is at lower right of popup.](img/smtp/image19.png)

At the bottom of the popup, you should have 2 existing default records, possibly with the word “pixie” in them.

![Capture of Capture of Porkbun Manage DNS Records popup page, lower section with Current Records. Could be showing ALIAS and CNAME records.](img/smtp/image20.png)

4. Delete any records that have “pixie” in them. Select **the trashcan icon.** Porkbun will not need them.![Capture of Porkbun Manage DNS Records popup page. Example of why and how to delete any default DNS records that Porkbun has already made. A trashcan icon the right is highlighted with an arrow.](img/smtp/image21.png)

5. Now, you will copy and paste *from* Scaleway *to* Porkbun.   

a. Scaleway’s Type is Porkbun’s Type

![Capture of comparison from Scaleway's "Add SPF record" page and Porkbun's "Manage DNS Records" page. Scaleway's Type is entered in the Porkbun Type field.](img/smtp/image22.png)

b. Scaleway’s Name is Porkbun’s Host

![Capture of comparison from Scaleway's "Add DKIM record" page and Porkbun's "Manage DNS Records" page. Scaleway's Name is entered in the Porkbun Host field.](img/smtp/image23.png)

c. Scaleway’s Value is Porkbun’s Answer

![Capture of comparison from Scaleway's "Add SPF record" page and Porkbun's "Manage DNS Records" page. Scaleway's Value is entered in the Porkbun Answer field.](img/smtp/image24.png)

d. You will cut and paste entries for each of 4 entries: 1 for SPF, 1 for DKIM, 1 for MX, and 1 for DMARC. 

💡 Tip: You may want to have 3 screens simultaneously open on your computer: 1\. These instructions 2\. Scaleway 3\. Porkbun

i. SPF 

1. At Porkbun, from the Type menu, select **TXT** 💡Tip: be sure to change *from* CNAME *to* TXT.  
2. At Scaleway, there is no entry to copy this time At Porkbun, **leave Host blank**.  
3. At Scaleway, copy the **Value data**. 🤔Advice: we think it is the upper Value as you should have no SPF Name yet. At Porkbun, paste it into **Answer**.  
4. Leave TTL as 600\.  
5. For Notes:💡This is optional. We used Scaleway SPF entry  
6. Select **Add.**  
7. Once you do this, the record should appear down below on the popup.  

ii. DKIM  

1. At Porkbun, from the Type menu, select **TXT**   
2. At Scaleway, copy the **Name data.** At Porkbun, paste it into **Host**.  
3. At Scaleway, copy the **Value data**. At Porkbun, paste it into **Answer**.  
4. Leave TTL as 600\.  
5. For Notes:💡This is optional. We used Scaleway DKIM entry  
6. Select **Add** 

iii. MX  

1. At Porkbun, from the Type menu, select **MX**   
2. At Scaleway, there is no **Name data.** Leave **Host** blank.  
3. At Scaleway, copy the **Value data**. At Porkbun, paste it into **Answer**.  
4. Leave TTL as 600\.  
5. For Notes:💡This is optional. We used Scaleway MX entry  
6. Select **Add**. 

iv. DMARC  

1. At Porkbun, from the Type menu, select **TXT**   
2. At Scaleway, copy the **Name data.** At Porkbun, paste it into **Host**.  
3. At Scaleway, copy the **Value data**. At Porkbun, paste it into **Answer**.  
4. Leave TTL as 600\.  
5. For Notes:💡This is optional. We used Scaleway DMARC entry  
6. Select **Add**.  

e. WARNING: In our testing, we found that Porkbun added an extra domain name to the end of the DKIM record, Host field.

![Capture of Porkbun DNS Management, A records page. The A record type "TEXT" might repeat a domain name twice. For example: xxx.domainky.mycoolhubs.space.mycoolhubs.space.](img/smtp/image25.png)

For example, we found that Porkbun did this: 7yadyayayayayayaydydyaady.\_domainkey.mycoolhubs.space.mycoolhubs.space

This link will not work.

We tested this and found that it is best to make sure that the domain is only listed ONE TIME at most inside a link. Porkbun is going to add it on the end automatically for you.

For example, if Scaleway gives you this link: 7yadyayayayayayaydydyaady.\_domainkey.mycoolhubs.space

To delete the extra domain (the mycoolhubs.space part) at the end of the link, at that entry, select **the edit pencil**.

![Capture of Porkbun DNS Management, A records. The A record type "TEXT" might repeat a domain name twice. For example: xxx.domainky.mycoolhubs.space.mycoolhubs.space.Edit this entry with the pencil icon highlighted in purple.](img/smtp/image26.png)

In the Host field, delete all of the text after domainkey.  You can either **cut and paste the Scaleway text *like this* into the host field** (notice no domain is after domainkey):

7yadyayayayayayaydydyaady.\_domainkey

![Capture of Scaleway Add DKIM record page. This is a password-type of text ending in .\_domainkey pasted into the Name field.](img/smtp/image27.png)

Alternatively, you may have to use your keyboard arrowkeys to move to where the domain text is and then use delete on your keyboard.

![Capture of Porkbun DNS management, A records page, DKIM entry with text entry field highlighted in purple.](img/smtp/image28.png)

Select **the disk to save.**

![Capture of Porkbun DNS management, A records page, DKIM entry with save icon highlighted in purple.](img/smtp/image29.png)

Porkbun will then add your domain on the end automatically once you’ve added it. That is fine.

The final displayed result at Porkbun will be:  
   7yadyayayayayayaydydyaady.\_domainkey.mycoolhubs.space

![Capture of Porkbun DNS Management, A records. The A record corrected with domain name.](img/smtp/image30.png)

7. Once your 4 entries are in, the lower part of the page will look similar to this below. 💡 Tip: We added ‘Notes’ to our entries. We found that it helped to keep track of what each entry was.

![Capture of Porkbun, DNS Management, A records entries. Types are MX (noted as MX entry), TXT (noted as SPF entry), TXT (noted as DKIM entry), and TXT (noted as DMARC entry).](img/smtp/image31.png)

8. Back at Scaleway, select the checkbox for **I have added these DNS records to my DNS zone**. Select **Verify domain**. Scaleway says “The verification of your domain might take 48 hours.” We found that it was quick.

![Capture of Scaleway, Add a new domain page. Text: I have added these DNS records to my DNS zone is checked. "Verify domain" purple box is highlighted in purple.](img/smtp/image32.png)

9. **Check your email.** Scaleway sends you an email with the status of your domain. Your domain will be either verified or not verified.

Example email:

![Capture of confirmation email from Scaleway that domain is verified.](img/smtp/image33.png)

a. At Scaleway, on the Transactional Email page, you may have a red dot for your domain name with a popup that says Your domain is unverified.  Check your email for more details.  

i. If you see a notification that your DKIM entry “missing or incorrect DNS records on your domain”, you may check that you entered the data correctly at Porkbun.

ii. Also, make sure you carefully follow the steps within these instructions at Step 3, f.  

iii. If you’ve cleared up any problems, just refresh this page at Scaleway and the red dot should turn into a green dot.

![Capture of Scaleway, Transactional Email page. For Domains, the Name field is blurred. There is a small red dot, indicating not verified, to the left of the blurred field.](img/smtp/image34.png)

b. If you have a green dot next to your domain name, it is verified. You will be notified by email as well.

![Capture of Scaleway, Transactional Email page. For Domains, the Name field is blurred. There is a small green dot, indicating verified, to the left of the blurred field.](img/smtp/image35.png)

# **Part 4 Generate SMTP API token**

1. At Transactional Email. Select **your domain** (the one you purchased at Porkbun. You will arrive at the Email activity tab.

![Capture of Scaleway, Transactional Email page. For Domains, the Name field is filled in with mycoolhubs.space as an example.](img/smtp/image36.png)

2. Select the **Overview** tab.  
a. At SMTP configuration, these listed items listed below are shown. **Copy and save the server, default port, and username somewhere securely.**  

i. Server \- **copy and save**  

ii. TLS connection ports \- ignore  

iii. Default ports \- **copy and save 2587**  

1. 🤔 Advice: When collecting email parameters: check what ports your email provider supports for SMTP. The standard ports are 25, 465 and 587, but your Kubernetes provider may block those ports as a spam-fighting measure. If your email provider supports non-standard ports, use one of them. (For Scaleway, use port 2587.)  

iv. Username \- **copy and save**  
v. For Password, select **Generate an API key for your IAM application.**

![Capture of Scaleway, Overview tab, SMTP configuration. Server and Username text is blurred.](img/smtp/image37.png)

3. For **Identify and Access Management,** select **Create an application.**

![Capture of Scaleway, Identity and Access Management (IAM) page, Applications tab. "Create an application" purple button in low center highlighted in purple.](img/smtp/image38.png)

4. For Create an Application, **Enter a name** and optional description.    

a. 🤔Advice: For Name, we used MyHubsCE.  

b. 🤔 Advice: For Description, we used Our Hubs SMTP application.  

c. For key value tags and attach a policy, skip this.  

d. Select **Create application**.

![Capture of Scaleway, Identity and Access Management (IAM) page, Applications, Create an Application page. "Enter a name and optional description" and "Create application" purple button highlighted in purple.](img/smtp/image39.png)

5. At Identity and Access Management (IAM), your application should be listed. Select the **Policies** tab.

![Capture of Scaleway, Identity and Access Management (IAM) page. Policies tab highlighted in purple.](img/smtp/image40.png)

6. Leave the three default policies there. Select **Create policy**.

![Capture of Scaleway, Identity and Access Management (IAM) page, Policies tab. "Create policy" purple button highlighted in purple near top right.](img/smtp/image41.png) 

7. At Create A Policy, **enter a name** and optional description.  

a. 🤔Advice: For Name, we used MyHubsCEPolicy.  

b. 🤔 Advice: For Description, we used Our Hubs SMTP policy.  

c. For key value tags, skip this.  

d. For Select a principal, Principal Type, select **the drop down arrow** and select **Application**, then at Select or type an application, select **whatever name you created for your application** (in these instructions, Part 4, Step 4). For our example, we selected MyHubsCE.  

e. Select **Add rules**.

![Capture of Scaleway, Identity and Access Management (IAM), Policies, Create a Policy page. Examples name "MyHubsCEPolicy" and description "Our Hubs SMTP policy" filled in. For Select a principal (optional), Principle Type is Application and for Select or type an application, MyHubsCE is chosen. "Add rules" purple button is highlighted in purple.](img/smtp/image42.png)

8. At Create rules, Rule \#1, Scope, select **Access to resources**. At Select or Type Project name, select **All current and future projects**. Select **Validate**.

![Capture of Scaleway, Identity and Access Management (IAM), Policies, Create a Policy, Create rules page. For Rule \#1, "Access to resources" is selected with "All current and future project"  chosen in the drop down menu. "Validate" purple button highlighted in purple.](img/smtp/image43.png)

9. At Create Rules, Rule \#1, Permission sets, in the Products Menu, select **Managed Services**, in the Permission sets, select **TransactionalEmailFullAccess.** 

🤔Advice: Be careful to select TransactionalEmailFullAccess\!\! There are other accesses that look very similar, but won’t work\!

Select **Validate.**

![Capture of Scaleway, Identity and Access Management (IAM), Policies, Create a Policy, Create rules, Rule \#1 page. For Permission sets, "Managed Services" is selected with "TransactionalEmailFullAccess". Validate purple button is highlighted in purple.](img/smtp/image44.png)

10. At Create a Policy, Create rules, Rule \#1, select **Create policy.**

![Capture of Scaleway, Identity and Access Management (IAM), Policies, Create a Policy, Create rules, Rule \#1 page. "Create policy" purple button at bottom right is highlighted in purple.](img/smtp/image45.png)

11. At MyHubsCEPolicy, select **Back to Policies**.

![Capture of Scaleway, Identity and Access Management (IAM), Policies, Create a Policy, Create rules page. Policy example "MyHubsCEPolicy" is shown with "Back to Policies" button in upper left corner highlighted in purple.](img/smtp/image46.png)

12. Select the **API keys** tab. 

![Capture of Scaleway, Identity and Access Management (IAM), Policies page. "API keys" tab highlighted. The new MyHubsCEPolicy is listed at the bottom.](img/smtp/image47.png)

13. Select **Generate an API key**.

![Capture of Scaleway, Identity and Access Management (IAM), Policies page, API keys tab. "Generate an API key" purple button highlighted in purple.](img/smtp/image48.png)

14. At the Generate an API key popup,   

a. For Select API key bearer, Select **An application**.  

b. Select **your named application** from the dropdown menu.  

c. For the Optional description. Enter any text here. 🤔 Advice: We entered Our Hubs CE SMTP API token.  

d. For Expiration, the default should be Never. Leave it on that setting.  

e. For Will this API key be used for Object Storage, select No, skip for now (default). Select **Generate API key.**

![Capture of Scaleway, Identity and Access Management (IAM), Policies page, API keys tab, Generate an API key page. For Select API key bearer, "An application" "MyHubsCE" and description "Our Hubs CE SMTP API token" included. "Generate API key" purple button highlighted in purple.](img/smtp/image49.png)

15. At Credentials Usage, Copy and **save your Access Key ID** and **Secret Key** somewhere securely. Select **Close**.

![Capture of Scaleway, Identity and Access Management (IAM), Policies page, API keys tab, Generate an API key page. Access Key ID and Secret ID codes are blurred. Copy text button to the right of the codes and "Close" gray button is highlighted in purple.](img/smtp/image50.png)

Result:

![Capture of Scaleway, Identity and Access Management (IAM), Policies page, API keys tabs. New MyHubsCE key shown.](img/smtp/image51.png)

Yay\! You’ve done it\! Your new API key will be assigned to your domain.

![Capture of Scaleway, Identity and Access Management (IAM), Policies page. Transactional Email menu on the left is highlighted in purple.](img/smtp/image52.png)  

Return to the Beginner’s Guide. 

# **Sources**

[How to generate API keys for API and SMTP sending with IAM](https://www.scaleway.com/en/docs/managed-services/transactional-email/how-to/generate-api-keys-for-tem-with-iam/)

[How to create an IAM application](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-application/)

[How to create an IAM policy](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-policy/)

[Permission sets](https://www.scaleway.com/en/docs/identity-and-access-management/iam/reference-content/permission-sets/)

[How to create API keys](https://www.scaleway.com/en/docs/identity-and-access-management/iam/how-to/create-api-keys/#how-to-create-an-api-key-for-an-iam-application)

[Setting up SMTP Standard settings](https://www.scaleway.com/en/docs/managed-services/transactional-email/reference-content/smtp-configuration/#standard-settings)

[Why is SMTP blocked?](https://docs.digitalocean.com/support/why-is-smtp-blocked/)