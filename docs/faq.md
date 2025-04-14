# **Troubleshooting and FAQs**

# **Email**

## Why is my email address so important?

**Your email address becomes the admin account of your Hubs.** Said another way, the admin account controls all of the Hubs settings, it allows your CE to work with DigitalOcean. It’s very important. The security features of Hubs predict that if you cannot log in as your own admin, you are in trouble.

## I tried setting up an SMTP email service but my gmail account keeps getting rejected to be the admin or controlling account.

Yes, this problem happened to us too.  We initially tried [Elastic Email](https://elasticemail.com/), but it only sends out emails *to the single admin* (that is, to one account, which could be a gmail account) and won’t send any other emails to any other users at the free level. If only one person EVER needs to log-in (and that one person must be the admin), Elastic Email could work for that specific use. However, we find it to be a real downer because anyone else joining your Hubs cannot log in.

We tried [Postmark](https://postmarkapp.com/) and [SendGrid](https://sendgrid.com/), but they reject gmail accounts as untrustworthy for the admin account.

We investigated [Brevo](https://www.brevo.com/) (formerly Sendinblue) but it does not offer all of the SMTP settings we need *at the free level*. If you want to pay more, Brevo might work.

[Sendlayer](https://sendlayer.com/) looks good, but their lowest price account is US$5/month. We did not try Sendlayer in our testing.

[Mailtrap](http://mailtrap.io) starts right off the bat with collecting your email to share with Facebook. If that doesn’t bother you, you will still have to disclose your purpose and LinkedIn account to Mailtrap in the step of verifying your domain with them. That verification took us about 2 hours total: to wait and write back our justification by email to a specific customer service person. In the end, we found Mailtrap to be fussy.

[Amazon Web Services (AWS)](https://docs.aws.amazon.com/ses/latest/dg/send-email.html) \- This costs money but does appear to be very cheap, well under US$1 per month. The main problems appear to be:

1. Setting up your account and appearing legitimate to AWS.  
2. [Getting out of the sandbox environment](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html) by proving that your intended use is legitimate.

We ended up going with [Scaleway](https://www.scaleway.com/en/transactional-email-tem/) because it aligns with our purpose.

## I need more than 300 emails per month.

[Scaleway does provide higher email quotas](https://www.scaleway.com/en/docs/identity-and-access-management/organizations-and-projects/additional-content/organization-quotas/). These instructions used the Transactional Email tier which is limited to 300 emails per month. Scaleway will send 500 per month maximum in this same Transactional Email tier if you do not complete their identity verification process. They will send 5,000 per month if you complete their identity verification process. For more than 5,000 emails per month, contact Scaleway’s customer support team.

## Why do my magic link emails never arrive?

DigitalOcean may be [blocking your SMTP for spam](https://docs.digitalocean.com/support/why-is-smtp-blocked/). In our testing, we found that DO inconsistently blocked port 587\. This blockage could happen with any Kubernetes provider. Check what ports your email provider supports for SMTP. The standard ports are 25, 465 and 587, but your Kubernetes provider may block those ports as a spam-fighting measure. If your email provider supports non-standard ports, use one of them. (For Scaleway, use port 2587.)  Refer to these instructions for [How to check that your SMTP server is reachable](#quick-check).

To fix this, start by updating your input-values.yaml file and change your SMTP\_PORT to **2587** (for example, for Scaleway).

This is similar to the [Beginner’s Guide, Step 12 Generate your config file](https://docs.google.com/document/d/1BXSxTNFLjx8dtz26_OAFJParGdz8qTE2XvVAxwoJwrQ/edit?tab=t.0#heading=h.oq59qmpdhu9c), section c, iv, ii.  However, **you are ONLY changing the SMTP port number.**  Don’t forget to  save the file in VS Code.

Then, complete the [After updating your Hubs CE deployment scripts](#heading=h.8xelcofdmfuf) section to redeploy your Hubs CE instance so that it uses the new port number.

# **Web Domain**

## Can I use another web domain service instead of Porkbun? 

Yes. Sure. Go ahead.

## I keep getting logged out of Porkbun\!

We found that Porkbun kept logging us out in the middle of the purchase step. 

Additionally, Porkbun might log  you out in the middle of your domain setup.

You might need to either fight with your cookies to get that worked out OR just keep logging back in.

## Generating new SSL Certificates

🤔 Note: Your SSL certificates expire **every 90 days**. Don’t worry. We’ve [got instructions for you when that happens](https://docs.google.com/document/d/1BXSxTNFLjx8dtz26_OAFJParGdz8qTE2XvVAxwoJwrQ/edit?usp=sharing).

# **DigitalOcean**

## Why do the instructions say US$ 36 per month minimum?

DigitalOcean’s single node option is US$24 per month and this is their lowest price offering. They also charge a mandatory extra US$12 per month for load balancing. So $24 plus $12 equals $36.  

We are still working on estimating what a 1 hour meetup in Hubs for 5-6 people would cost.

## I don’t see my $200 credit on my account with DigitalOcean.

The $200 credit appeared after a couple of days for one user. Additionally, you can possibly contact DO customer support to ask for the credit if you don’t see it. In our trial, the credit appeared after a couple of days.

## Can I set up DigitalOcean for less than 60 days and pay nothing?

Yes and no.

Yes, DO gives you US$200 in credits to use over your first 60 days. You would only owe DO if your charges totaled up *to more than* US$200. Our testing found that US$200 was more than enough to cover 60 days of beginner use. But we don’t know your use. YMMV.

We’ve heard that DO does find (and charge) accounts that try to string multiple “new” accounts along to get a free ride. You’ve been warned. 

## Can I change the cluster capacity setting of Fixed or Autoscale later?

Yes, you can. At DO, **Kubernetes**, **Resource** tab, At **Node Pools**, in the three dots menu, select **Resize (the fixed size) or Autoscale**.

![Capture of DigitalOcean, Kubernetes page, Resources tab.  Under Name, three dot menu to the far right drop down includes Resize or Autoscale as an option.](img/faq/image1.png)

## Can I change my token from DO if my token has been compromised?

Yes. According to [DO documentation on APIs](https://docs.digitalocean.com/reference/api/create-personal-access-token/): In the **…** menu for a token, you can rename, regenerate, or delete the token.

## I made custom changes to my hcce file but my Hubs is not updating?

The pods need to be rebuilt at DO. You need to delete your deployment at DO and apply again. In the Beginner’s Guide, this is Step 13 c (delete deployment), d (apply deployment), and e (get deployment).

## At Step 13, I have FailedScheduling and/or unbound immediate PersistentVolumeClaims messages.

Note: This is a technical fix. Stop by a live event for assistance if you need help running these commands.

![Capture from VS Code, terminal window. Notification includes language like Warning Failed Scheduling and Normal Not Trigger Scale Up.](img/faq/image2.png)

This image shows the default-scheduler and cluster-autoscaler (which control the pgsql and reticulum pods) have not started up.

To resolve this, restart your pods by entering each of these commands in a Command prompt:

kubectl delete \--all pods \-n hcce

kubectl delete pvc pgsql-pvc \-n hcce

kubectl delete pv pgsql-pv \-n hcce

kubectl delete pvc ret-pvc \-n hcce

kubectl delete pv ret-pv \-n hcce

kubectl apply \-f hcce.yaml

##  Checking that my SMTP is reachable from my Kubernetes cluster.

### Quick check

The first thing to check is whether the SMTP port is reachable from your Kubernetes cluster and open on the SMTP server.  To do that, you will first need to get the name of your reticulum pod, **copy and paste** this into the terminal and **hit enter**:

kubectl get pods \-n hcce

Then **copy and paste** this into the terminal, substitute \<podname\> with the value you got from the previous command, substitute \<SMTP\_SERVER\> and \<SMTP\_PORT\> with the values from input-values.yaml, and **hit enter**:

kubectl exec \<podname\> \-c reticulum \-n hcce \-- nc \-zv \<SMTP\_SERVER\> \<SMTP\_PORT\>

If your email server is reachable from your Kubernetes cluster, the output in the terminal will be something like:  
example.com (xx.xx.xx.xx:2587) open

If it's not reachable, the command will hang for a long time and the resulting output in the terminal when it finally returns will be something like:  
nc: example.example.example.com (xx.xx.xx.xx:587): Operation timed out

### Sending an actual email

If you want to be extra sure and your email provider does not require TLS or authentication, you can send an actual email.

🤔 Advice: Scaleway does require authentication, so even with a successful test of the port, it will be normal to receive output like:

502 5.7.0. Please authenticate first.

Your email service provider might return a different response.

To get the name of your reticulum pod, **copy and paste** this into the terminal and **hit enter**:

kubectl get pods \-n hcce

Then connect to a shell in your reticulum pod, **copy and paste** this into the terminal, substitute \<podname\> with the value you got from the previous command, and **hit enter**:

kubectl exec \-it \<podname\> \-c reticulum \-n hcce \-- bash

Then copy the following into a text editor (i.e. Notepad) and substitute \<SMTP\_SERVER\> \<SMTP\_PORT\> and \<ADM\_EMAIL\> with the values from input-values.yaml:

nc \<SMTP\_SERVER\> \<SMTP\_PORT\> \<\< EOF  
HELO \<SMTP\_SERVER\>  
MAIL FROM: \<[probe@example.com](mailto:probe@example.com)\>  
RCPT TO: \<ADM\_EMAIL\>  
DATA  
From: probe@example.com (netcat)  
To: whomever  
Subject: probe email

Sent using netcat.

.  
QUIT  
EOF

Example from KWrite:![Capture from KWrite (alt Notepad). Example test email with formatting.](img/faq/image3.png)

Finally, **copy and paste** the command from the text editor into the terminal and **hit enter**.

If sending an email works from your Kubernetes cluster, the output in the terminal will be something like:

220 example.example.example.com ESMTP Service Ready  
250 2.0.0 Hello \<SMTP\_SERVER\>  
….

If it's not sendable, the command will hang for a long time and there will be no output in the terminal.

## General SMTP testing

For general testing of what your SMTP server accepts, swaks ([https://jetmore.org/john/code/swaks/](https://jetmore.org/john/code/swaks/)) is a general-purpose tool that can connect using TLS and authenticate with the SMTP server. It requires perl which is not available in Kubernetes nodes of Hubs, but is installed on most \*nix machines.

## What about persistent volumes?

Persistent volumes allow for your Hubs to save scenes, avatars, and room object data. This installation uses 10 GB for persistent volumes and there is plenty of space for that within the 80 GB in the one node DO recommendations: 4GB total RAM / 2 vCPUs / 80 GB storage (June 2024 specifications).

## Installing doctl for Mac and Linux

For Mac, watch this video here: [https://youtu.be/x9Ld6Mi64pk?si=NvoTy98O2g\_rh0OV\&t=866](https://youtu.be/x9Ld6Mi64pk?si=NvoTy98O2g_rh0OV&t=866)

For Linux: [https://docs.digitalocean.com/reference/doctl/how-to/install/\#step-1-install-doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/#step-1-install-doctl)

## Help\!  My Hubs is down with the error: This site can't be reached ERR\_CONNECTION\_RESET

Note: This is a technical fix. Stop by a live event for assistance if you need help running these commands.

Try turning your Droplet off and on again in DigitalOcean, and then running this command in your terminal:

kubectl rollout restart deployment \-n hcce

## I’m interested in automatic backups. How can I do this with DO? 

We’ve investigated SnapShooter, which is a service within DO.

# **Kubernetes and kubectl versions**

In Step 8 of the Beginner’s Guide, you should get a version of kubectl that is within one version (within 1 number) of your version of kubernetes on DigitalOcean. For example, if you have 1.30 version of kubernetes, you need version 1.29, 1.30, or 1.31 of kubectl.

How do you know what version of kubernetes you have at DO? 

1\. When logged into DO, from the Manage menu, select **Kubernetes**, select **your cluster name.**

![Capture of DigitalOcean, MANAGE, Kubernetes Clusters. Name of cluster blurred and highlighted in purple.](img/faq/image4.png)

2.Select **Overview**, **VERSION** section, there is a number for Current Version, Kubernetes.

![Capture of DigitalOcean, MANAGE, Kubernetes Clusters. Overview tab highlighted in purple. Text: Scroll down.](img/faq/image5.png)

In this example, I have version 1.30

![Capture of DigitalOcean, MANAGE, Kubernetes Clusters. VERSION section. For Current version: text like Kubernetes 1.30.1-do.0.](img/faq/image6.png)

Therefore, the version I’m being offered of kubectl at kubernetes.io is fine. It is also the 1.30 version, so I’m within 1 number (actually *I’m the same number* as) of 1.30.

In our testing, you will be safe with the default versions you are offered. Still, if you run into errors, it might be good to check that your kubernetes can be controlled by your kubectl.

# **The Linux difference**

Extracting is slightly different if you are Linux, rather than Windows. We’re going to assume that you know how to do this.

Node.js \- your Linux distribution might already have this, so you would just need to install this. 

If you do need to install Node.js, at the Node.js website, you would click on **copy to clipboard** and then paste it into your terminal.

# **Scene Editor**

## I’ve uploaded a scene in the scene editor but I see an error. All of my pods are up and running.

Note: This is a technical fix. Stop by a live event for assistance if you need help running these commands.

![Capture of Hubs Spoke, Publish Scene From Blender. Scene thumbnail image, Name, Attribution, and other options with Publish blue button.](img/faq/image7.png)

Error code: 

Failed to fetch “https://……………/scenes”: Cause: Network Error: 500 Unknown Error. Possibly a CORS error.

Try scaling down and rescaling up your deployment using these commands in a Command Prompt:

kubectl scale deployments \--all \--replicas=0 \-n hcce

kubectl scale deployments \--all \--replicas=1 \-n hcce