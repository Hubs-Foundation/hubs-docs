---
id: beginners-guide-to-CE
title: Beginner’s Guide to CE
---

These instructions are written for users, newbies, or non-developers. This Hubs Community Edition installation uses Scaleway for an email service, Porkbun for a web domain, and DigitalOcean (DO) for hosting. If you vary from this path, your mileage may vary (YMMV).

## **Preparation**

### Before you start, you need:

* **An email address** that you can reliably access. We’ll refer to this as your admin email in these instructions.
* Safe **password storage.**
* A **Windows** computer. (Anyone using a Mac or Linux system should be able to follow this and just make adjustments.)
* Confidence to use a **command line interface or terminal**. These are step by step instructions. We’ll walk you through this.

### What you will get:

This Hubs build at DO supports 30-60 maximum concurrent users. Of course, heavy concurrent use *can* lower that number. YMMV

The cost is US$36 per month minimum, plus ~US$1 annual for the first year domain (August 2024 prices).

Scaleway provides you magic link log-in emails (SMTP), and Porkbun provides a web domain with DNS service.

You will be the captain of your own Hubs. You have control and privacy.

Note: images in this set of instructions have some lines blurred where there is personally identifiable information.

### What will you do?

1. Download stuff and open accounts: Steps 1 through 9
2. Connect to DigitalOcean: Steps 10 through 11
3. Upload your Hubs: Steps 12 through 15
4. Kick the tires and light the fires: Step 16

### How long will this take?

We estimate that proficient users might get this done in 45 minutes to 2 hours. It might take several days if you proceed very carefully and slowly. Parts of these instructions do take time on servers. Patience is necessary.

### How much will this cost?

We estimate US$1 per year for the first year of a domain and US$36 per month minimum. Your email SMTP service might be free or might cost a small amount of money (US$1-$5 per month). It might be safe to estimate US$40 per month.

### Got questions?

Check our [FAQs](./faq.md). Also, our community [Discord](https://discord.gg/hubs-498741086295031808) is standing by.

### Icons

🤔 Advice icons mean that we think this is the best choice.

💡Tips are extra information! Not necessary, but helpful.

☑️ Check your work. Extra instructions to make sure everything is working.

## **Section 1 Download stuff and open accounts**

### 1. Download and install Node.js

a. Go to [Node.js package manager](https://nodejs.org/en/download/package-manager).

![Capture of download Node.js home page. ](img/beginnersguide/image1.png)

b. Select **Download.** It does not matter where you save this; it can stay in Downloads.

![Capture of Node.js home page. Download green button is highlighted with purple.](img/beginnersguide/image2.png)

c. In your Download Folder, **double-click on the node file, or right-click and select Open** to install. The Node.js setup wizard will begin.

![Capture of node.js downloaded file icon. Computer screen and disk on black background. Text:  node-v20.15.1-x64](img/beginnersguide/image3.png)

![Capture of Node.js downloaded file icon. "Open" choice is highlighted with purple.](img/beginnersguide/image4.png)

d. Select **Next**

![Capture of Node.js Setup window. "Next" button at bottom right is highlighted in purple.](img/beginnersguide/image5.png)

e. For End-User License Agreement, select the **checkbox for I accept the Terms in the License Agreement**. Then, select **Next.**

![Capture of Node.js Setup End-User License Agreement text: "I accept the terms in the License Agreement" checked at lower left and "Next" at lower right both highlighted in bright purple.](img/beginnersguide/image6.png)

f. For Destination Folder, select **Next**.

![Capture of Node.js Setup, Destination Folder. "Next" at the lower right highlighted in purple.](img/beginnersguide/image7.png)

g. For Custom Setup, select **Next**.

![Capture of Node.js Setup, Custom Setup. "Next" at the lower right highlighted in purple.](img/beginnersguide/image8.png)

h. For Tools for Native Modules, **do not select the checkbox** for Automatically install… Select **Next**.

![Capture of Node.js, Setup Tools for Native Modules. "Next" at the lower right highlighted in purple.](img/beginnersguide/image9.png)

i. For Ready to install Node.js, select **Install**.

![Capture of Node.js Setup, Ready to install Node.js. "Install" at the lower right highlighted in purple.](img/beginnersguide/image10.png)

Installation notification window:

![Capture of Node.js Setup, Installing Node js. Notification with text: Please wait while the Setup Wizard installs Node.js.](img/beginnersguide/image11.png)

j. **In a separate pop-up window,** User Account Control prompts ‘Do you want this app to make changes to your device?’ Select **Yes**.

![Capture of User Account Control pop-up window with text: "Do you want to allow this app to make changes to your device?"  "Yes" gray button at lower left highlighted with  purple.](img/beginnersguide/image12.png)

k. For Completed the Node.js Setup Wizard, select **Finish**.

![Capture of Node.js Setup, Completed the Wizard screen. "Finish" button in lower right is highlighted in purple.](img/beginnersguide/image13.png)

### 2.  Download and install VS Code

a. Go to [Visual Studio Code](https://code.visualstudio.com/). This page should automatically detect what your system is and offer you the matching VS Code version. Select **Download for Windows**.

If you don’t like all of the extra tracking that Microsoft inserts into VS Code Studio, you can download [VS Codium](https://vscodium.com/).

![Capture of Visual Studio Code home page. Download for Windows blue button highlighted in purple.](img/beginnersguide/image14.png)

It is ~95MB.  💡 Your version number might not match this shown version. Don’t worry. It’s fine that you download the most recent version.

![Capture of VSCodeUserSetup-x64-1.90.1 dot exe downloading file process. ](img/beginnersguide/image15.png)

b. In your Downloads folder, **double-click the VS Code file** or **right-click and select Open.**

![Capture of VSCodeUserSetup-x64-1.90 dot exe blue icon in Downloads folder.](img/beginnersguide/image16.png)

c. For License Agreement, select  **I accept the agreement**. Select **Next**.

![Capture of Setup, Microsoft Visual Studio Code (User) License Agreement. Radio button for I accept the agreement on lower left highlighted in purple. Next button in lower right highlighted in  purple.](img/beginnersguide/image17.png)

d. For Select Additional Tasks, select these statements:

i. **Add “Open with Code” action to Windows Explorer file context menu**

ii. **Add “Open with Code” action to Windows Explorer directory context menu**

iii. The other two statements, Register Code and Add to Path, should be checked by default.

iv. Select ‘**Next**’.

![Capture of Setup, Microsoft Visual Studio Code (User) Select Additional Tasks prompt. Under Others, all boxes checked. Text: Make sure these are checked! for Add "Open with Code" action to the Windows Explorer file context menu and Add "Open with Code" action to Windows Explorer directory context menu.  Next button in lower right highlighted in purple.](img/beginnersguide/image18.png)

e. Select **Install**

![Capture of Setup, Ready to Install prompt with Install button in lower right highlighted in purple.](img/beginnersguide/image19.png)

While installing, there is an “Installing” notification.

![Capture of Setup notification screen, Installing. Green bar in middle of screen shows progress.](img/beginnersguide/image20.png)

f. After Visual Studio Code has installed, select **Finish**.

![Capture of Setup, Completing the Visual Studio Code Setup Wizard. Launch Visual Studio Code box checked in middle of prompt. Finish button at lower right highlighted in  purple.](img/beginnersguide/image21.png)

> 🤔 Advice: If at any time when you go to use VS Code, the Terminal Window is not appearing for you (the part where you will enter commands), select **View**, **Terminal**.

### 3. Purchase a web domain at Porkbun

a. Go to [Porkbun.com](https://porkbun.com/).

![Capture of header of Porkbun home page.](img/beginnersguide/image22.png)

b. Under Products, select **Domains**.

![Capture of Porkbun, Products menu with Domains as first choice down from the top, highlighted in purple.](img/beginnersguide/image23.png)

c. Search for a domain name if you already have a specific name in mind or you may shop by reviewing for different ending web domain extensions (the .com or .net or .xyz part of a web address) and their prices.

![Capture of Porkbun, Search for your new domain name search box in the top center of the page highlighted in  purple. Alternative text "Or scroll down" points to extensions available to select before searching for an entire domain name.](img/beginnersguide/image24.png)

Select column headers “Registration”, “Renewal”, or “Transfer” to sort by lowest price in each column.

![Capture of Porkbun, sorting of extensions by initial registration cost, ordering cheapest initial costs are top choices. For example, dot space or dot website were $1.11 in this capture.](img/beginnersguide/image25.png)

For example, let’s say you select the **.space** (dot space) extension because it is currently on a 1st Year Sale of US$1.11.
> 🤔 Advice: Pay special attention to the Renewal column, however, because that is what you will be charged every year after.

Next, search if your full domain name is available to buy. Let’s say you want “mycoolhubs.space”, **enter mycoolhubs in the search box** and **select the magnifying glass** (submit search).

Note from the future: Scaleway ONLY wants domains that meet these conditions, so follow them now: The domain can only contain alphanumeric characters, dots, and dashes.

![Capture of Porkbun, search for full domain name box in center of page. This is where both parts of a domain name are checked to see if they are available. In this example, "mycoolhubs" is available with the dot space for $1.11 for the first year and $21.09 per year after the first year (renewal).](img/beginnersguide/image26.png)

d. When you have chosen your full web domain address, **select the plus sign under sort by price** to add it to your shopping cart.

![Capture of Porkbun, adding a selected domain to the shopping cart. In the middle right side of the page, a plus sign button is highlighted in purple.](img/beginnersguide/image27.png)

e. Select **Checkout**.

![Capture of Porkbun, cart showing mycoolhubs.space on the left and "Checkout" button on the right highlighted in purple.](img/beginnersguide/image28.png)

f. At Your Cart, select **Continue Create account / Login**.

![Capture of Porkbun, cart page with "Continue. Create Account/Login" button at the lower right highlighted in purple.](img/beginnersguide/image29.png)

g. Under Create a New Account, **type in your information** to these required fields:  
Username, Password, Primary email address, First or Given Name, Address, Country, City, Zip / Postal, Phone Code, Phone Number

Select the checkbox for **You must agree to the following by checking the checkbox before continuing.**   
You may say yes or no to awesome emails.

Save your username and password somewhere.

Select **Create Account.**

![Capture of Porkbun, Create a New Account prompt on the right side of the page. Fields for Username and Password. See the Porkbun page for the IMPORTANT notice about giving valid information to Porkbun.](img/beginnersguide/image30.png)

h. Complete your purchase. Complete the email verification step. Enter **your verification code into the pop-up** and then select **Submit**.

![Capture of Porkbun, Email Address Verification prompt asking for the Verification Code in the field and the Submit button at the lower right highlighted in purple.](img/beginnersguide/image31.png)

> 🤔 Advice: Activate two factor authentication (2FA) for your account.

### 4.  Create a A DigitalOcean Account

a. Go to [DigitalOcean](https://www.digitalocean.com/). Select **Get started**. DigitalOcean (DO) “only bills for the services you use” so there is no initial startup charge.

Currently DO is offering a US$200 credit for the first 60 days for new customers. Alternatively, you can get the US$200 credit AND Hubs community member Hrithik receives a small credit via his [referral link](https://m.do.co/c/fbf891840808). The referral is no extra cost to you. These instructions follow the referral link.

![Capture of DigitalOcean home page. Popup in middle of page has blue "Get started" button.](img/beginnersguide/image32.png)

b. For Create your account, select Sign up with Google, Sign up with Github or **Sign up with Email,** your choice. These instructions will use Sign up with Email.

![Capture of DigitalOcean, Create your account page. Sign Up with Email blue button is highlighted with purple.](img/beginnersguide/image33.png)

c. **Enter in a required email address and password.** Keep these passwords somewhere safe. Select **Sign Up**.

![Capture of DigitalOcean Sign Up with Email prompt with fields for full name, email address, and password. Sign up green button is at bottom center of prompt.](img/beginnersguide/image34.png)

i. Notification to check your email for a confirmation link:

![Capture of DigitalOcean Confirm your email address notification. Text: We sent an email to [blurred email address].  Please confirm your email address by clicking the link we just sent to your inbox. Resend verification email blue button is at lower center of prompt box.](img/beginnersguide/image35.png)

d. Check your email and **select the confirmation link** that starts with [cloud.digitalocean.com/account_verification](http://cloud.digitalocean.com/account_verification). The link logs you into your DO account. You may close the *other* DO page now.

![Capture of example email from Digital Ocean. Text: To finish creating your DigitalOcean account, confirm your email address by clicking on this link. (link provided). Happy coding, Team DigitalOcean](img/beginnersguide/image36.png)

e. On this new page, you are asked some demographic questions that you must answer before selecting Submit:

i. What do you plan to build on DigitalOcean?<br>
Choices are An API, Data analytics infrastructure, Web3 or decentralized application, A website or content site, AI and machine learning, Video or livestreaming platform.

> 🤔 Advice: We recommend **Web3 or decentralized application**

ii. What is your role or business type?<br>
Choices are Digital agency / MSP, Freelancer or Consultant, Software company, E-commerce company, Hobbyist or Student, Other.

iii. What is your monthly spend on cloud infrastructure across cloud platforms? (provide an estimate)<br>
Choices are $0-$50, $50-$500, $500-$1,000,$1,000-$5,000, $5,000-$10,000, $10,000-$100,000, More than $100,000.

iv. How many employees work at your company?<br>
Choices are I work alone, 2-9, 10-99, 100-499, 500-999, 1000+

v. How do you prefer to manage cloud resources?<br>
Choices are: Cloud console, CLI or API, SDK, Infrastructure as Code, I’m not sure.
> 🤔 Advice: We recommend **I’m not sure**.

![Capture of DigitalOcean demographic questions prompt.](img/beginnersguide/image37.png)

f. For Verifying your Payment Information, **select** either **‘Add a Card’** or **‘Connect via PayPal’.**

g. If you choose Add a Card, **enter your Card number, Cardholder name, Country, and Street address**. Select **Save and Sign Up**.

![Capture of Digital Ocean Verify your Payment Information page with Add a Card or Connect via PayPal highlighted on the upper left in  purple. Save and Sign Up light blue button is in center bottom of page highlighted in purple.](img/beginnersguide/image38.png)

If you choose Connect via PayPal, for Choose an amount, select US$5.00, US$10.00, or US$20.00.

> 🤔 Advice: we recommend **$5.00**, and select **PayPal**.

![Capture of DigitalOcean Connect via PayPal example. Connect via PayPal on the left and $5.00 button  at the top center is highlighted in  purple.](img/beginnersguide/image39.png)

h. Once you have completed setting up your payment method, you are taken to a welcome page. Select **Explore our control panel**.

![Capture of Welcome to DigitalOcean Explore our Control Panel page. Explore our Control panel choice is in center right of page highlighted in purple.](img/beginnersguide/image40.png)

### 5. Create a Kubernetes cluster at DO

a. DO will create for you a default project called  “first-project”. From the MANAGE menu, select **Kubernetes**.

![Capture of Welcome to DigitalOcean Explore our Control Panel page. Explore our Control panel choice is in center right of page highlighted in purple.](img/beginnersguide/image41.png)

b. Select **Create a Kubernetes Cluster**.

![Capture of DigitalOcean, Kubernetes page. Create a Kubernetes Cluster blue button at middle right is highlighted with purple.](img/beginnersguide/image42.png)

c. For Create a Kubernetes cluster, Choose a data center region, **select a region geographically closest to you.** For ‘Select a version’- Keep whatever is recommended.

![Capture of DigitalOcean Create a Kubernetes cluster page. Under Your Kubernetes cluster will be located in a single datacenter with an example, Amsterdam, AMS3 highlighted with purple.](img/beginnersguide/image43.png)

Choices are in North America, Europe, Asia, and Australia.

![Capture of DigitalOcean Create a Kubernetes cluster page. Other datacenter choices include: New York, Toronto, San Francisco, London, Frankfurt, Singapore, Bangalore, and Sydney.](img/beginnersguide/image44.png)

d. For Choose cluster capacity, Select a scaling type, select **Fixed** or **Autoscale**.
> 🤔 Advice: Fixed will help control your costs, but Autoscale will make sure that the servers are up if and when you need them. You decide: Fixed = cheaper but slightly less reliable, Autoscale = more expensive but more reliable. We are selecting Fixed in these instructions.

Note: You may ignore this warning:  You have reached the 3 Droplet on your account. Request increase.

e. For Node pool name: **Change the name** to something that makes sense to you.
> 🤔 Advice: hcce-cluster-yoursetupreason-date

f. For Machine Type:  Leave selected as **Basic, Regular SSD**

g. For Node plan: Select **$24/month per node** ($0.036/hour) of 4GB total RAM / 2 vCPUs / 80 GB storage (June 2024 specifications) Tip 💡Hubs Community Edition needs 3-3.5 GB RAM to run. Choosing 4 GB RAM gets you *the minimum you need*.  If you run into too many problems, re-think this choice.

> 💡 Tip: DigitalOcean charges an extra $12/month for mandatory load balancing.   
So a $24 choice here will be $24 + $12 a month for a total of $36 a month.

h. For Nodes: Select **the negative sign to reduce this from 3 to 1**.

> 🤔 Advice:  One node is enough. **Warning:** if you increase the nodes to 2 or more, you will need to [set up external storage](https://hominidsoftware.com/tech-personal-growth/Hubs-on-DigitalOcean/) to prevent data loss.

Note: This warning should have changed to: You are near the 3 Droplet limit on your account. Request increase. You can continue to ignore this warning.

![Capture of DigitalOcean Close a cluster capacity options. "Fixed size" is highlighted in purple. Node pool name has example of hcce-cluster-myownhubs-june2024, with "Enter your own name choice" prompt. Node plan of $24/month per node is highlighted in bright purple. Nodes of 1 is highlighted in purple.](img/beginnersguide/image45.png)

i. For Select Additional options - If you need high Availability you can select the checkbox for Add high availability.
> 🤔 Advice: Do not buy this (it is an extra $40/month!), but you do what’s right for you. If you need to automate your database management, select the checkbox for Add database operator.  🤔 Advice: You do not need this.

![Capture of Digital Ocean, Select additional option page. Nothing is highlighted here.](img/beginnersguide/image46.png)

j. For Finalize, Name: **Enter a cluster name.** From DO, it “can only contain lowercase alphanumeric characters and dashes”.
> 💡 Tip: We picked “hcce-myfirstname”

k. Project: Leave this as first-project.

l. Tags: Tags are optional. Our advice is to add a minimum of one tag to help describe your project to yourself. You might use tags more if you have more than one cluster for, you know, later in life when you are a big deal.

m. Select **Create Cluster**.

![Capture of Digital Ocean finalize cluster options. Name can only contain lowercase letters and dashes. Tags are optional. Total monthly cost estimates are show. "Create Cluster" green button at the bottom left is highlighted in purple.](img/beginnersguide/image47.png)

In a few moments, your Kubernetes Cluster will be up and running. Hooray! Congratulations! You bought hosting services on the cloud.

![Capture of DigitalOcean, Kubernetes Clusters dashboard page. Example named cluster and region shown with Created time and tags.](img/beginnersguide/image48.png)

### 6. Set up SMTP email service, verify domain, & get credential.

1. Follow [these instructions](./set-up-SMTP-email-service.md) for Parts 1 - 4.

### 7. Download and install Kubectl

This software controls Kubernetes (k8s).

a. Go to [Kubernetes.io for Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/).

b. Select the link at Download the latest 1.30 patch release: kubectl 1.30.0. This link is a .exe file so selecting it will activate it to download. **Double-click** or **right-click and select Open** to install.

c. Refer to our [FAQs](./faq.md) for advice on making sure that your kubectl version aligns with your kubernetes version at DO.

![Capture of kubernetes.io page, Install and Set Up kubectl on Windows. Under Install kubectl binary with curl on Windows, "Download the latest 1.30 patch release: (link) kubectl 1.30.0 " highlighted with  purple.](img/beginnersguide/image49.png)

### 8. Download and Install Doctl

Doctl is the same idea as kubectl, it controls Digital Ocean via the command line interface.

Follow [instructions 1 through 10 here](./download-and-install-doctl.md).

### 9. Download Hubs CE

a. Go to the [Hubs Foundation Github repository for hubs-cloud](https://github.com/Hubs-Foundation/hubs-cloud).

> 💡 Tip: This link is for the “Hubs-Foundation / hubs-cloud (Public)” folder, also known as hubs-cloud-master. Do not be confused because this is called hubs-cloud. Community edition lives in a file structure within hubs-cloud because community edition was created from the hubs-cloud original (but now defunct) programming.

b. Select **Code**.

![Capture at Github, Hubs Foundation, hubs-cloud repository. Text prompt: "Make sure you see community-edition listed as a folder in the middle left." "<> Code" green button at the right is highlighted in purple.](img/beginnersguide/image50.png)

c. Select **Download ZIP**.

![Capture at Github, Hubs Foundation, hubs-cloud repository. Drop down menu from Code: "Download ZIP" as the lowest choice from the top, highlighted in bright purple.](img/beginnersguide/image51.png)

![Capture of hubs-cloud-master.zip download notification.](img/beginnersguide/image52.png)

d. In your Download Folder, **right-click on hubs-cloud-master and select Extract All…**

![Capture of hubs-cloud-master zipped folder icon.](img/beginnersguide/image53.png)

![Capture of "Extract All..." choice from menu, 6th from the top, highlighted in purple.](img/beginnersguide/image54.png)

e. Select **Browse**.

f. Select **Select Folder**. **Create a new folder** on your computer called **Hubs CE.** Do not place this code inside of too many other folders. 🤔We recommend that you keep it near your Desktop.

![Capture of Hubs CE folder icon. "Select Folder" button at lower right is highlighted in purple.](img/beginnersguide/image55.png)

g. Select **Extract.**

![Capture of Extract Compressed (Zipped) Folders prompt. "Extract" button at lower right highlighted with purple.](img/beginnersguide/image56.png)

![Capture of copying notification from hubs-cloud-master to Hubs CE showing progress. No interaction highlighted.](img/beginnersguide/image57.png)

Tip 💡 After the extraction, there is one folder called hubs-cloud-master.

![Capture of hubs-cloud-master as a file folder.](img/beginnersguide/image58.png)

h. At **‘hubs-cloud-master’ folder** that you downloaded, right-click on the ‘hubs-cloud-master’ folder. You might need to select ‘**Show more options**’ first then select ‘**Open with Code**’.

![Capture of right click on hubs-cloud-master folder, menu with items. "Open with Code" choice with blue Visual Studio Code icon is highlighted in purple.](img/beginnersguide/image59.png)

i. Visual Studio Code will open. Select ‘Yes, I trust the authors’.
> 💡 Tip: Ignore any other notifications from VS Code by closing the notification box.

![Capture of Visual Studio Code opening with notification "Do you trust the authors of the files in this folder?" "Yes, I trust the authors" is button to the lower left is highlighted in purple.  A lower pop-up with text "you have Windows Subsystem for Linux (WSL) installed..." can be ignored and closed.](img/beginnersguide/image60.png)

## **Section 2 Connect DO**

### 10. Generate DO API token

You need to get a ‘password’ in the form of an API Token from DO so that your modified Hubs code can be accepted by DO. You’ll insert that token into doctl so that DigitalOcean can understand it.

a. Go to [DigitalOcean](https://www.digitalocean.com/).  From the same sidebar where MANAGE is, go to the 4th menu section that has Billing, Support, Settings, API. Select **API**.

> 💡 Tip: We found that you can API via your Tab button.


![Capture of DigitalOcean left menu. API New button under Billing, Support, and Settings is highlighted in purple.](img/beginnersguide/image61.png)

b. Select **Generate New Token**.

![Capture of DigitalOcean, Applications & API page. "Generate New Token" blue button in center lower right of page highlighted in purple.](img/beginnersguide/image62.png)

c. Token Name:  This can be any text. The name will appear with dashes. For example: My-First-Token.

d. Expiration: Select **no expire**.

e. Scopes: Select **Full Access**.

f. Select **Generate Token**.

![Capture of DigitalOcean, Create A New Personal Access Token page. Field for Token Name highlighted in purple. Expiration menu choice "No expire" highlighted in purple.](img/beginnersguide/image63.png)

![Capture of DigitalOcean, Create A New Personal Access Token page, continued. For Scopes, Full Access and "Generate Token" green button are highlighted in purple.](img/beginnersguide/image64.png)

g. **Copy and save** your Token somewhere securely. If you ever change computers to control your Hubs, you’ll either need this Token or you’ll need to [generate a new Token](./faq.md#can-i-change-my-token-from-do-if-my-token-has-been-compromised).

![Capture of DigitalOcean Applications & API dashboard page. Token code is show under "Don't forget to copy your new personal access token". Copy icon is highlighted in purple.](img/beginnersguide/image65.png)

### 11. Authenticate doctl

a. Copy and paste or type **the following text** into the terminal window of VS Code, changing `<NAME>` to any generic name (e.g. MyHubsCE) and hit enter on your keyboard. No need to keep the less than or greater than symbols: `< >`

```shell
doctl auth init --context <NAME>
```

For example: `doctl auth init --context MyHubsCE`

![Capture of VS Code terminal window. Text: "doctl auth init --context (blurred)" and then "Enter your access token: *required" highlighted in purple.](img/beginnersguide/image66.png)

b. The terminal will prompt `> Enter your access token:`  **Paste in the DO API token.** Hit enter on your keyboard.

☑️ Green check mark means success!

![Capture of VS Code notification screen with text "Validating your token..." with a green check mark.](img/beginnersguide/image67.png)

c. Then type or paste this line, putting the name you used from Step 13a above for `<NAME>`

`doctl auth switch --context <NAME>`  *Make sure you type two dashes just before the text ‘context’

For example `doctl auth switch --context MyHubsCE`

![Capture of VS Code text: "doctl auth switch --context (blurred)" highlighted in purple.](img/beginnersguide/image68.png)

d. Return to DO, go to your Kubernetes cluster. You’ve already done step 1 so now go to step 2  called **‘Connecting to Kubernetes’**.

e. Copy the code presented in the **Automated (recommended)** tab and paste **it into your Terminal window** and **hit enter on your keyboard.**

![Capture from DigitalOcean, Getting Started with Kubernetes page. "2 Connecting to Kubernetes" at center left highlighted with purple. Copy icon in center right after "Run the command below to authenticate: doctl kubernetes cluster kubeconfig..." highlighted in purple.](img/beginnersguide/image69.png)

Results:

![Capture from VS Code. Notification text:  "Notice: Adding cluster credentials to kubeconfig file found in (blurred). Notice: Setting current-context to (blurred)."](img/beginnersguide/image70.png)

f. Select **Continue**.

![Capture from VS Code. Notification text:  "Notice: Adding cluster credentials to kubeconfig file found in (blurred). Notice: Setting current-context to (blurred)."](img/beginnersguide/image71.png)

g. Skip DO’s Step 3 called Verify Connectivity, select **Continue**.

h. Skip DO’s Step 4 called Deploy a workload, select **Great, I’m done**.


![Capture from DigitalOcean, 4 Deploy a workload page. "Great, I'm done" blue button in bottom center of page highlighted in purple.](img/beginnersguide/image72.png)

## **Section 3 Upload your Hubs**

### 12. Generate your config file

Here is where you are going to change your Hubs code so that all of the accounts and parts work under your authority (passwords, tokens, etc.).

a. In VS Code, at HUBS-CLOUD-MASTER, select **community-edition**.

![Capture of VS Code, Explorer tab, HUBS-CLOUD-MASTER folder, "community-edition" on left highlighted in purple.](img/beginnersguide/image73.png)

b. Select **input-values.yaml**  We will be working lines 1-21.

![Capture of VS Code, "input values.yaml" file on left under "community-edition" highlighted in purple.](img/beginnersguide/image74.png)

c. Enter these values as described below. Warning: Only change the lines that you are instructed to change. Do not change any line that you do not know what it does. In all cases, make sure your entry is between the quote marks (“) in VS Code with no extra spaces.

i. For HUB_DOMAIN: your domain purchased from Porkbun

ii. For ADM_EMAIL: Your **real, private** account.
> 🤔 Advice: This email account becomes the Admin of everything so choose the email you can reliably get into.

![Capture of VS Code, input-values.yaml file. Line 2: ADM_EMAIL: "admin@example.com" is highlighted with text: Click here and type your domain.](img/beginnersguide/image75.png)

iii. For Namespace: ”hcce’”<- Leave that

iv. For the SMTP_SERVER and the following SMTP lines, retrieve your Scaleway **Host**, **Port**, **Username**, and **Secret Key** entries that you saved from Step 7.

a. Server -> SMTP_SERVER: paste in **the server** you saved from Step 7 Set up SMTP email service, Part 4, Step 1.

b. Port -> SMTP_PORT: enter **2587**

c. Username -> SMTP_USER: paste in the **Username** you saved from Step 7, Set up SMTP email service Part 4, Step 1

d. Password -> SMTP_PASS: paste in the **Secret Key** you saved from Step 7 Set up SMTP email, Part 4, Step 15.
> 💡 Tip: Make sure you are using your Scaleway Username and Secret Key, not your Access Key ID.



d. For SKETCHFAB_API_KEY: ”?”

Get your API from your Sketchfab account. Wait, doesn’t this link your Sketchfab account to *any* use in your Hub? No, this API key allows access to Sketchfab, it doesn’t connect with any value to your personal Sketchfab account. Why are you doing this?
> 🤔 Advice: Sketchfab linkage is one of the most fun aspects of Hubs. You and your users will enjoy this feature.

i. Log into [Sketchfab](https://sketchfab.com/). Select your **profile icon** in the upper right corner. Select ‘**Settings**’.

![Capture of VS Code, input-values.yaml file. Line 2: ADM_EMAIL: "admin@example.com" is highlighted with text: Click here and type your domain.](img/beginnersguide/image76.png)

ii. Select Password & API. Copy the Token and paste it between the quotation marks, replacing the question mark.

![Capture from Sketchfab, My Settings page. "Password & API" on left menu is highlighted. "API token" with token code blurred in the center is highlighted with purple.](img/beginnersguide/image77.png)

e. Change `NODE_COOKIE`, `GUARDIAN_KEY`, & `PHX_KEY` to unique random values, using a password generator if you have one handy.

f. For now, leave all of the other fields unchanged. Here is an example, filled in:

![Capture from VS Code, input-values.yaml file. Example of filled in values, blurred in some lines.](img/beginnersguide/image78.png)

g. In VS Code, select **File, Save**. This will keep all of the changes you just made.

![Capture from VS Code, File menu. "File" and "Save" are highlighted in purple.](img/beginnersguide/image79.png)

h. To be sure you are in your community-edition directory, **copy and paste** this into the terminal and **hit enter**:

```shell
cd community-edition
```

![Capture from VS Code, terminal window. Text "cd community-edition" highlighted in purple.](img/beginnersguide/image80.png)

i. To install all of the dependencies for the generation commands we will run, **copy and paste the following text** and **hit enter on your keyboard** (you will only need to do this once, the first time):

```shell
npm ci
```

![Capture from VS Code, terminal window. After hubs-cloud\community-edition> text: "npm ci" highlighted in purple.](img/beginnersguide/image81.png)

j. To generate your Kubernetes config file for DO, **copy and paste the following text** and **hit enter on your keyboard:**

```shell
npm run gen-hcce
```

![Capture from VS Code, terminal window. Text after community-edition, "npm run gen-hcce" highlighted in purple.](img/beginnersguide/image82.png)

### 13. Using Kubectl to deploy to DigitalOcean

Now it is time to upload your custom hcce.yaml file to DigitalOcean.

a. Now we need to apply your changes to Kubernetes on DO. **Copy and paste** this into the terminal and **hit enter on your keyboard**:

```shell
kubectl apply -f hcce.yaml
```

It will take a few seconds. Ongoing results look like this:

![Capture from VS Code, terminal window. Notification that kubernetes is applying the customized hubs file.](img/beginnersguide/image83.png)

Final result looks like this:

![Capture from VS Code, terminal window. Notification that updating hubs file (hcce) is done. Text includes items like "deployment.apps/dialog created" and "service/lb created".](img/beginnersguide/image84.png)

b. **Copy and paste** this into the terminal and hit **enter** on your keyboard:

```shell
kubectl get deployment -n hcce
```

![Capture from VS Code, terminal window. Text "kubectl get deployment -n hcce" entered. Result is a table of items with their READY, UP-TO-DATE, AVAILABLE, and AGE statuses. ](img/beginnersguide/image85.png)

> 💡 Tip: It will take time for everything to be up and running, typically around 70-90 seconds.

**Ensure that everything shows the value of  1 for READY and UP-TO-DATE.**

* If you do have all 1s, go to step f.
* In case you do NOT have all 1s, follow steps c, d, and e below.


c. If you do NOT have all 1s, delete the deployment by **copying and pasting this into the terminal and hit enter** on your keyboard.

```shell
kubectl delete deployment --all --namespace=hcce
```

d. Redeploy by **copying and pasting this into the terminal and hit enter** on your keyboard. (This is a repeat of Step 14a: you have deleted your prior data and you are re-applying or re-uploading it again.)

```shell
kubectl apply -f hcce.yaml
```

e. Copy and paste this into the terminal and hit enter on your keyboard. (This is a repeat of Step 14b: You are re-checking that all of the Hubs pieces are ready to go)

```shell
kubectl get deployment -n hcce
```

It will take time for everything to be up and running, typically around 70-90 seconds.

**Ensure that everything shows the value of  1 for READY and UP-TO-DATE.**

> 💡 Tip: Further errors? See our [FAQs](./faq.md) or ask for help in Discord.

f. After your Kubernetes server is up, it will take a few more minutes for DO to set up your load balancer. (In our testing, it was quick; we continued with these steps.) Then, you need to point your domains to the IP address of the load balancer.

**Copy and paste** this into the terminal and **hit enter**:

```shell
kubectl -n hcce get svc lb
```

![Capture from VS Code, terminal window. Text "kubectl -n hcce get svc lb" entered. Resulting "EXTERNAL-IP" is highlighted with text "Copy and save".](img/beginnersguide/image86.png)

g. For EXTERNAL-IP, **copy and save** the number string Terminal window

h. ☑️ [Extra instructions to check that your SMTP email is working](./faq.html#checking-that-my-smtp-is-reachable-from-my-kubernetes-cluster).


> 🤔 Advice: Never share your config file with anyone.

Congratulations!! If you have got your external IP, you have your Hubs running on a DigitalOcean Kubernetes cluster. Next, we will work on accessing it!

### 14. Add new A records

This step will be very similar to Step 7, Part 3. You will add 4 more new A records. You will copy from Scaleway and paste into Porkbun.

a. Log in to [Porkbun](https://porkbun.com/).

b. Select **Account**, select **Domain Management**.

![Capture from Porkbun, Account menu. "Domain Management" highlighted in purple.](img/beginnersguide/image87.png)

c. Select **Details**, select **DNS Records**.

![Capture from Porkbun. For DNS Records, upward facing arrow highlighted in purple.](img/beginnersguide/image88.png)

d. Back in Step 7, we asked you to delete any records with the text pixie in them that appear by default. If you didn’t do that OR the pixie records have re-appeared, **delete any existing A records** that you didn’t create. You will create additional new A records in this step.

![Capture from Porkbun. For DNS Records, upward facing arrow highlighted in purple.](img/beginnersguide/image89.png)

e. You are adding 4 new ‘A records’ using that EXTERNAL-IP that you saved; one each for these 4 types
* @
* assets
* cors
* stream

f. For Type: Select **A - Address record**

g. For Host: enter one of each of the A record types: @, assets, cors, or stream

* Note: in our testing, we found that Porkbun deletes the “@” as Host after we clicked Add. Do not be dismayed. We think it’s fine.

h. Answer: **paste the external IP** that you saved from Step 13, g.

i. Notes: Optional

j. **Select Add.**
* Example of cors:

![Capture from Porkbun, Manage DNS Records page. For "Host" field, "cors" is entered as an example. For "Answer" , the EXTERNAL-IP (blurred) is pasted here.  "Add" button in lower right is highlighted in purple.](img/beginnersguide/image90.png)

* Results:

![Capture from Porkbun, DNS Records. Results after entering 4 new records shown highlighted (blurred) in purple.](img/beginnersguide/image91.png)

k. Check that your SSL certificates are missing. At this point, they should be. **Go to your Hubs domain address** (the full website address you purchased in Step 4). You should receive a warning that says something like Warning: Potential Security Risk Ahead.  This is normal.

![Capture from Firefox browser. Text: Warning: Potential Security Risk Ahead. Choices are "Go Back (Recommended)" in blue or "Advanced" in gray.](img/beginnersguide/image92.png)

l. If you go ahead to the site by selecting **Advanced…** (in this Firefox example), the word admin will be in the address bar and the screen will be blank (or white)

![Capture from Firefox after selecting "advanced". Screen is empty of text. This is normal at this stage.](img/beginnersguide/image93.png)

In the next Step, you’ll generate the proper security certificates.

### 15. Generate certificates

These steps add SSL certificates to your domain so that your admin log-in adds security certificates to the domain and thus everyone else will not receive security warnings.

> 🤔 Note: Your SSL certificates expire **every 90 days**. Don’t worry. We’ve [got instructions for you when that happens](https://docs.google.com/document/d/1Ne4Aqe-YY9shvi8La_5dF2Qq3VOoLIrfbpFgE15RjRQ/edit?usp=sharing).

a. Return to VS Code.

b. **Copy and paste** this into the terminal and hit **enter** on your keyboard:

```shell
npm run gen-ssl
```

> 💡 Tip: It will take time for everything to be up and running, it might take ~5 minutes. Dots may appear, this is normal. This capture below shows the end of the generating certificates process.

![Capture from VS code, terminal window. After entering "npm run gen-ssl" resulting text includes "Generating SSL certificate for: assets..." and "Generated SSL certificate for: cors..."](img/beginnersguide/image94.png)

c. In VS Code, select **hcce.yaml**

![Capture from VS Code, community-edition. "hcce.yaml" file highlighted in purple.](img/beginnersguide/image95.png)

d. Select **Control + F** on your keyboard and search for this text: **default-ssl-certificate.**

![Capture from VS code, center code panel. After searching on "default-ssl-certificate" line, the line containing that code is highlighted.](img/beginnersguide/image96.png)

e. Enter a # (number sign) at the beginning of the text line, to the left of the dashes. It will be correct if the line turns green; this means the line has been disabled.

![Capture from VS code, center code panel. After searching on "default-ssl-certificate" line, adding a number sign turned the line from orange to green showing that the default certificates are now disabled.](img/beginnersguide/image97.png)

f. Select **File, Save**. This will keep all of the changes you just made.

![Capture from VS Code, File menu. "File" and "Save" highlighted in purple.](img/beginnersguide/image79.png)

g. Now we need to apply your changes to Kubernetes on DO. **Copy and paste** this into the terminal and **hit enter on your keyboard** (this is similar to Step 13, d.)

```shell
kubectl apply -f hcce.yaml
```

h. After it's complete, your instance is running successfully. **Go to your Hubs domain address** (the full website address you purchased in Step 4).  You should not see the Warning that you saw in Step 14, k.  **Enter your admin email**. Select **Next**.

![Capture from Firefox browser. Prompt to "Please sign in" with your  email and "Next" green button highlighted with purple.](img/beginnersguide/image99.png)

i. Check your email inbox. You should receive the magic link email. Select **the magic link**. Go back to **your Hubs domain address**. It should look like this:

![Capture from Firefox browser showing user logged in as Admin to their Hubs domain main page.](img/beginnersguide/image100.png)

j. You should be able to now test your Hubs. Select **Create Room**. At this point your room may just be a dark horizon but it works!

![Capture from Chromium browser. Default hubs space is gray with a dark horizon and box avatars. This is a working Hubs instance!](img/beginnersguide/image101.png)

## **Section 4 Kick the tires and light the fires**

### 16. Create Firewall

Now you have to whitelist a few ports so that the voice chat and screen share/video share work properly.

a. At DigitalOcean, select **Networking**.

![Capture from DigitalOcean, MANAGE menu. "Networking" highlighted with purple.](img/beginnersguide/image102.png)

b.  At Networking, select the **Firewalls** tab.

![Capture from DigitalOcean, Networking page. "Firewalls" tab highlighted with purple.](img/beginnersguide/image103.png)
c. Do not be concerned if you see a Firewall already there. That is the default created by DO. Select **Create Firewall**.

![Capture from DigitalOcean, Networking page. "Create Firewall" blue button highlighted with purple.](img/beginnersguide/image104.png)

d. At Create Firewall, Name, enter **a firewall name** (no dashes allowed in the name).
> 🤔 Advice: We used FirstFirewall.

![Capture from DigitalOcean, Networking, Create Firewall page.  Under Name field, "FirstFirewall" (example) highlighted with purple.](img/beginnersguide/image105.png)

e. For Inbound Rules, delete the SSH rule that comes predefined by selecting **Delete**.

![Capture from DigitalOcean, Networking, Create Firewall page. For Inbound Rules, SSH, TCP, 22, "Delete" highlighted with purple.](img/beginnersguide/image106.png)

f. Create three (3) new Inbound Rules. These will whitelist these ports for Hubs to use them.

i. First rule
1. For Type, select **Custom**.
2. For Protocol: select **TCP**
3. For Port Range: enter **4443**
4. For Sources: leave as default (All IPv4 and AllIPv6)
5. Select **New rule** to start the next entry.

ii. Second rule
1. For Type, select **Custom**.
2. For Protocol: select **TCP**
3. For Port Range: enter **5349**
4. For Sources: leave as default (All IPv4 and AllIPv6)
5. Select **New rule** to start the next entry.

iii. Third rule
1. For Type, select **Custom**.
2. For Protocol: select **UDP**
3. For Port Range: enter **35000-60000**
4. For Sources: leave as default (All IPv4 and AllIPv6)

![Capture from DigitalOcean, Networking, Create Firewall page. For Inbound Rules, values entered for TCP Port 4443, TCP Port 5329, and UDP Ports 35000-60000.](img/beginnersguide/image107.png)

g. At Apply to Droplets, **type in the name you entered at Step 6,e.** Hint: it probably starts with hcce.

![Capture from DigitalOcean, Networking, Create Firewall page. Apply to Droplets field. "h" entered as an example and highlighted with purple.](img/beginnersguide/image108.png)

> 🤔  Advice: we typed h and waited. Your one droplet should appear in the drop down box.

![Capture from DigitalOcean, Networking, Create Firewall page. Apply to Droplets field. "hcce-cluster...." highlighted in purple.](img/beginnersguide/image109.png)

**Note**: If you have added tags to your cluster, just use that one tag. It's enough for all the nodes and node groups.

h. Select **Create Firewall.**  There will be a notification that the ‘Firewall created successfully’.

i. You may log out of Scaleway, Porkbun, and DigitalOcean. You may close VS Code.

## Your Hubs is up!

* Go to your domain and log in.
* Visit [**What's next?**](./whats-next.md) for tips on room settings, importing scenes, and backups.

## Got questions?

* Check our [FAQs](./faq.md). Also, our community [Discord](https://discord.gg/hubs-498741086295031808) is standing by.

## **Sources**

1. [Hrithik Tiwari’s original DigitalOcean instructions](https://github.com/Hubs-Foundation/hubs-blender-files/blob/main/creator-labs-files/CL-archive/ghost-to-md-output/2024-05-13-hubs-community-edition-how-to-deploy-on-digital-ocean.md).
2. \[Video\] [DigitalOcean Quick Start with Hrithik Tiwari - Community Edition Setup Session - April 3, 2024](https://youtu.be/x9Ld6Mi64pk?si=ittf6QprKsHOiof2)
3. [Using Sendgrid for SMTP](https://discord.com/channels/498741086295031808/819203046931693589/840151692275613697)
4. \[Video\] [Doctl for Windows installation video](https://youtu.be/6EubUwP5gN0?si=zNZeX2ZJcXNBOksA)
5. \[Video\] [Visual Studio code tutorial](https://youtu.be/B-s71n0dHUk?si=SM_htKj7Bw0K5FXV)
6. \[Video\] [Config file tutorial from Stan](https://youtu.be/j8dQEEEX4OA?si=AWndPWsuU7rAX5GC&t=822)
7. [Installing WSL in Windows](https://learn.microsoft.com/en-us/windows/wsl/install) - didn’t use WSL after all
8. [Username and password advice for Linux](https://learn.microsoft.com/en-us/windows/wsl/setup/environment#set-up-your-linux-username-and-password) - didn’t use after all
9. Using [SendGrid for SMTP](https://discord.com/channels/498741086295031808/819203046931693589/840153117105455134) - Tutorial from Fabien
10. [Brevo How to Authenticate your domain](https://help.brevo.com/hc/en-us/articles/12163873383186-Authenticate-your-domain-with-Brevo-Brevo-code-DKIM-record-DMARC-record)
11. [Setting up AWS SES](https://github.com/Hubs-Foundation/hubs-blender-files/blob/main/creator-labs-files/CL-archive/ghost-to-md-output/2023-10-16-community-edition-case-study-quick-start-on-gcp-w-aws-services.md)
12. [Community Edition Case Study: Quick Start on Google Cloud with AWS Services](https://github.com/Hubs-Foundation/hubs-blender-files/blob/main/creator-labs-files/CL-archive/ghost-to-md-output/2023-10-16-community-edition-case-study-quick-start-on-gcp-w-aws-services.md)
