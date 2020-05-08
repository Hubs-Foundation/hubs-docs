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

7. [Create your Droplet](https://marketplace.digitalocean.com/apps/hubs-cloud-personal) via the DigitalOcean Marketplace. For testing a $5 droplet will work just fine. Larger droplets will be required to support more users. In the alpha stage we don't really have particular recomendations, so experiment and let us know what works for you!

8. Once your droplet has started, SSH in as root to complete the setup process. Ex: `ssh root@x.x.x.x` You can find the ip address of your droplet at the top of the droplet detail page in the DigitalOcean dashboard. Depending on how you configured authentication when creating your droplet you will need to either provide the one time password given to you or simply use a pre-configured ssh key.

9. Upon login the Hubs Cloud setup wizard will start automatically. This will guide you through all the rest of the steps required to get you Hubs Cloud instance up and running. If you ever need to change the settings you entered during setup or if you exited it for any other reason you can re-run it by running `/opt/polycosm/setup.sh`

DigitalOcean is currently an **alpha** pre-release. Please report any issues to [Hubs Support](mailto:hubs@mozilla.com).
