---
id: hubs-cloud-accessing-servers
title: SSH Access
sidebar_label: Advanced: SSH Access
---

To access your servers over SSH, in the the [Admin Console](./hubs-cloud-getting-started.md) choose **Server Access** and follow the guide. Note that 2-factor authentication is set up by default, so you will need a 2FA device with an application installed like Google Authenticator to connect to your servers.

Your servers are running [Ubuntu 18.04 Bionic Beaver](http://releases.ubuntu.com/18.04/).

### Biome Services

The services required for Hubs Cloud are installed, managed, and supervised with the [Biome Supervisor](https://biome.sh/en/), which is the community distribution of [Chef Habitat](https://www.habitat.sh/). To better understand how Biome works, you can read the [Chef Habitat Guide](https://www.habitat.sh/docs/using-habitat/).

The biome commandline tool is `bio`, and services run under the `hab` user.

#### Logging

Logging is sent to journald. To tail the log, as `root` you can use [`journalctl`](https://www.freedesktop.org/software/systemd/man/journalctl.html):

```
journalctl -f
```

#### Managing services

To see the list of running services, as root:

```
bio sup status
```

You can start/stop services via `bio svc start` and `bio svc stop`. It's advised that you **not** unload or load services via `bio svc load` or `bio svc unload` manually since that will disconnect from the channel, preventing updates, etc.
