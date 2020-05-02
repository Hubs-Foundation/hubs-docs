---
id: hubs-cloud-do-quick-start
title: DigitalOcean Quick Start
sidebar_label: DigitalOcean Quick Start
---

Hubs Cloud DigitalOcean can be found on [DigitalOcean Marketplace](https://marketplace.digitalocean.com/apps/hubs-cloud-personal).

1. First, you'll need to [Create a New Project](https://cloud.digitalocean.com/projects/new) for your hub.

2. You'll need two registered domain names, one for your hub and one for short room links. We recommend using .link domains for short links.

3. If possible, add your two domains to your DigitalOcean project by [adding them to networking](https://cloud.digitalocean.com/networking/domains) and then moving them to the project via the "Move Resources" button in the project view. 
    - If you do so, we'll be able to automatically add the necessary DNS records for you.
    - Otherwise, you'll have to add the necessary DNS records yourself. The setup process will tell you what records to add.

4. Hubs Cloud uses email magic links to log in. You'll need SMTP connection info from an email provider to send these emails.
    - We recommend using [SendGrid](https://www.sendgrid.com) and using port 2525 to prevent firewall blocking. To use SendGrid for SMTP, create an account and then go to the [SMTP Integration](https://app.sendgrid.com/guide/integrate/langs/smtp) to get an SMTP username and password.

5. If you want additional storage for uploads, avatars, and scenes, you should attach a block storage volume.

6. [Create a writable DigitalOcean API token](https://cloud.digitalocean.com/account/api/tokens/new). This token will be needed during during setup for configuring DNS, firewall, etc.
    - The token **won't** be saved and you can remove it from your account once your hub is up.

7. [Create your Droplet](https://marketplace.digitalocean.com/apps/hubs-cloud-personal) via the DigitalOcean Marketplace.

8. Once your droplet has started, SSH in to complete the setup process. Your hub will be up in no time!

DigitalOcean is currently an **alpha** pre-release. Please report any issues to [Hubs Support](mailto:hubs@mozilla.com).
