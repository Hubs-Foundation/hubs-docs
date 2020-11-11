---
id: hubs-cloud-do-quick-start
title: DigitalOcean Quick Start
sidebar_label: DigitalOcean Quick Start
---

> **Warning! Hubs Cloud for DigitalOcean is in alpha and provided as is.**
>
> We're unable to provide the level of support as we do for the AWS version.

Hubs Cloud DigitalOcean can be found on [DigitalOcean Marketplace](https://marketplace.digitalocean.com/apps/hubs-cloud-personal).

1. You'll need two registered domain names, one for your hub and one for short room links. We recommend using .link domains for short links. Make sure to update the DNS for your domains to [point to DigitalOcean's nameservers](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars).

2. [Create your Droplet](https://marketplace.digitalocean.com/apps/hubs-cloud-personal) via the DigitalOcean Marketplace. For testing a \$5 droplet will work just fine. Larger droplets will be required to support more users. In the alpha stage we don't really have particular recommendations, so experiment and let us know what works for you!

   - If you want additional storage for uploads, avatars, and scenes, you should attach a block storage volume.
   - If you already have a DigitalOcean project, assign your droplet to your project now. Otherwise you can do this when you create your project in step 4.

3. Add your two domains to your DigitalOcean project by [adding them to networking](https://cloud.digitalocean.com/networking/domains).

   - If you've already created a DigitalOcean project, add the domains to your project via the "Move Resources" button in the project view. Otherwise, you can add them in the next step when creating a new project.

4. [Create a New Project](https://cloud.digitalocean.com/projects/new) for your hub and assign your domains and droplet as resources.

   - By associating your domains with your project, we'll be able to automatically add the necessary DNS records for you.
   - Otherwise, you'll have to add the necessary DNS records yourself. The setup script (step 8) will tell you what records to add.

5. Hubs Cloud uses email magic links to log in. You'll need SMTP connection info from an email provider to send these emails.

   - We recommend using [SendGrid](https://www.sendgrid.com) and using port 2525 to prevent firewall blocking. To use SendGrid for SMTP, create an account and then go to the [SMTP Integration](https://app.sendgrid.com/guide/integrate/langs/smtp) to get an SMTP username and password.
   - SendGrid has an additional step to [authenticate your domain](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication) before your emails will start being sent.

6. [Create a writable DigitalOcean API token](https://cloud.digitalocean.com/account/api/tokens/new). This token will be needed during during setup for configuring DNS, firewall, etc as it allows the setup script to update your project/droplet as needed.

   - The token **won't** be saved and you can remove it from your account once your hub is up.

7. Once your droplet has started, SSH in as root to complete the setup process. Ex: `ssh root@x.x.x.x` You can find the ip address of your droplet at the top of the droplet detail page in the DigitalOcean dashboard. Depending on how you configured authentication when creating your droplet you will need to either provide the one time password given to you or simply use a pre-configured ssh key.

8. Upon login the Hubs Cloud setup wizard will start automatically. This will guide you through all the rest of the steps required to get you Hubs Cloud instance up and running. If you ever need to change the settings you entered during setup or if you exited it for any other reason you can re-run it by running `/opt/polycosm/setup.sh`
   - You will need to provide a database or create a DigitalOcean Managed Database during setup. DigitalOcean Managed Databases start at \$15/mo [See pricing for all DigitalOcean services here](https://www.digitalocean.com/pricing/).

DigitalOcean is currently an **alpha** pre-release. If you run into any issues, see the [help page](./help.html) for ways you can get in touch.

> **Warning! Hubs Cloud for DigitalOcean is in alpha and provided as is.**
>
> We're unable to provide the level of support as we do for the AWS version.
