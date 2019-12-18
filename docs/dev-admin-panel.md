---
id: admin-panel
title: Admin Panel
---


## Setup

- Make sure you have the 2FA token set up
- Make sure you have the SSH key saved and passphrased with a unique, strong passphrase
- Make sure your account has had the admin bit flipped. To do so, contact a team member with your account ID which can be found in the Javascript console when loading a Hubs room in the line that says with "Logged into account <ACCOUNT_ID>"
- Clone out the [Hubs Ops](http://github.com/mozilla/hubs-ops) repo somewhere
- Make sure you have a working copy of [Hubs](http://github.com/mozilla/hubs) running locally (see the README)
- Add "hubs.local" as a local host entry pointing to 127.0.0.1 (or your local VM IP running Hubs on an exposed port, eg 127.0.1.1) in your local hosts file. On Windows this is in `C:\windows\system32\drivers\etc\hosts` on UNIX typically `/etc/hosts`
- Make sure Hubs loads properly at https://hubs.local:8080

## Using admin console

To connect and use the admin console:

- In the `hubs-ops` repo, run the `bin/tunnel_postgrest_prod.sh` script to open an SSL tunnel to PostgREST. You'll be prompted for a 2fa token.

- Once tunneled, hit `https://hubs.local:3000` in your browser and accept the certificate. (This is unverified TLS over a secure SSL tunnel, so it is reasonably safe to do so.) If you are paranoid, you'll want to make sure the SSL tunnel was opened successfully on port 3000 in the previous step, SSH will complain about a port already being is use if it failed to bind to the port. Once you've accepted the cert you should see a JSON blob responds describing the PostgREST service instance.

- Once that works, simply hit https://hubs.mozilla.com/admin in another tab when logged into your administrator account.

- If you are ever gated on a login dialog, just fill anything in for username/password and submit. Your credentials from Hubs will be used regardless, and your secured connection to the server is over a private, 2fa-gated SSL tunnel -- the login dialog is just an unused UI flow.
