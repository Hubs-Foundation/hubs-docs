---
id: install-overview
title: Overview of Installling Community Edition
sidebar_label: Overview of Installation
---

[*N.B.: this heirarchy is not final; it's just a first pass*]

The exact steps you take will depend on which providers you use.
These directions assume you use Windows.  
On MacOS and Linux you'll need to take similar but not identical steps.

## Preparation

[*N.B.: as in current Beginner's Guide*]

## Section 1: Download stuff

[*N.B.: as in the first part of "Download stuff and open accounts"*]

## Section 2: Open accounts

### 3. Purchase a web domain

You need control of a domain name. 
Your Hubs instance can have a name like `example.com` if it is the only server on your domain.
Your instance can have a name like `hubs.example.com` if you have other servers on your domain. 

Follow the directions for one of these providers, or use an existing domain name you control.

* [Porkbun](./install-domain-porkbun.md)
* [NameCheap](./install-domain-namecheap.md)

> 💡️ Your domain name service will probably show some filler at your domain name after your purchase.
> This will go away when you set up new DNS records.

### 4: Set up an account and create a managed Kubernetes cluster

* [DigitalOcean](./install-kubernetes-digitalocean)
* [Scaleway](./install-kubernetes-scaleway)
* [AWS](./install-kubernetes-aws)

[*N.B.: "Download and Install Doctl" and "Authenticate doctl" will be merged into the DigitalOcean directions here.  Other providers will have different tools, which typically won't be needed in later steps.  "Connect DO" might be merged here or be its own step.*]

### 5. Set up SMTP email service, verify domain, & get credential.

There are two types of email when setting up Hubs.
The first is an account where you can receive email. You probably already have one. (work email, home email, etc.). We used gMail in our testing.
We call this your “admin email”. It will control your Hubs instance.

The second is an account to send the automatic login emails from.
As many similar emails will be sent from this account, you need a setup that won't be blocked as spam.
We call this your SMTP email service.

* [Scaleway](./install-smtp-scaleway)
* [Sendlayer](./install-smtp-sendlayer)
* [GMail](./install-smtp-gmail)

### 6. Domain verification and adding DNS Records

In this step, you will add in the SPF, DKIM, MX, and DMARC records for your SMTP email service in the DNS records for your web domain.

> 💡 Here we assume you use the DNS service of your domain name service.
> You can use a different DNS service if you want to.
> If your Kubernetes cluster is on DigitalOcean, you may find it more convenient to use the DO DNS service.

* [Porkbun](./install-mx-porkbun)
* [NameCheap](./install-mx-namecheap)

### 7. Download and install Kubectl 

[*N.B.: as in "Download and install Kubectl"*]

> ☑️ To verify that kubectl is configured correctly, at the command line type
> ```shell
> kubectl cluster-info
> ```
> The output should resemble
> ```angular2html
> Kubernetes control plane is running at https://127.0.0.1:66666
> CoreDNS is running at https://127.0.0.1:66666/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
> 
> To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
> ```

## Section 3: Download Hubs and Upload it to your cluster

### 8. Download Hubs Community Edition (a.k.a. Hubs CE and HCCE)

[*N.B.: as in "Download Hubs CE"*]

### 9. Upload your Hubs to your cluster

[*N.B.: as in "Upload your Hubs"*]

> ☑️ Now is a good time to check that your SMTP email service is reachable from your Kubernetes cluster.  See [Checking that my SMTP is reachable from my Kubernetes cluster](./troubleshooting-smtp)

### 10. Add new A records to DNS

This step will be very similar to "Domain verification and adding DNS Records" above. You will add four more new A records. You will copy from your Kubernetes hoster and paste into your DNS provider/domain name provider.

* [Porkbun](./install-dns-porkbun)
* [NameCheap](./install-dns-namecheap.md)

> ☑️ You can verify that the new DNS records are being used.
> Type your domain name into your Web browser.
> You should get a warning that the connection is insecure.
> **That's great!** It means you're connecting to your cluster, but the connection isn't secure yet.
> Once your cluster is reachable, you can make that connection secure, in the next step.

### 11. Generate certificates

[*N.B.: as in "Generate certificates"*]

## Section 4: Kick the tires and light the fires

### 12. Configure Firewall

Now you have to whitelist a few ports so that the voice chat and screen share/video share work properly.

* [DigitalOcean](./install-firewall-digitalocean)
* [Scaleway](./install-firewall-scaleway)
* [AWS](./install-firewall-aws)

> ☑️ To check that your firewall is correctly configured, type your domain name into your Web browser.
> You should see the root page of your Hubs instance, without any warning about an insecure connection.
> [*N.B.: insert screenshot here*]

### 13. Your Hubs is up!

Go to your domain and log in.

Visit What's next? for tips on room settings, importing scenes, and backups.

### 14. Got questions?

Check our FAQs. Also, our community Discord is standing by.

## Sources

* Hrithik Tiwari’s original DigitalOcean instructions.
* [Video] DigitalOcean Quick Start with Hrithik Tiwari - Community Edition Setup Session - April 3, 2024
* Using Sendgrid for SMTP
* [Video] Doctl for Windows installation video
* [Video] Visual Studio code tutorial
* [Video] Config file tutorial from Stan
~~* Installing WSL in Windows - didn’t use WSL after all~~
~~* Username and password advice for Linux - didn’t use after all~~
* Using SendGrid for SMTP- Tutorial from Fabien
* Brevo How to Authenticate your domain
* Setting up AWS SES
* Community Edition Case Study: Quick Start on Google Cloud with AWS Services


