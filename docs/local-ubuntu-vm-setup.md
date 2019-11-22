---
id: local-ubuntu-vm-setup
title: Local Ubuntu VM Setup
---
When developing on Windows it's advised to use a local Ubuntu VM, since `yarn` and the various other tools needed to work on Hubs run fastest when running on Linux natively (vs within WSL.)

In order to properly test Hubs from your host OS, here are some suggested network configurations:

- Set up port forwarding on your VM to forward ports 8080 (for `webpack-dev-server`) and 4000 (for reticulum) to `127.0.1.1` (or some other locally addressable IP address from your host OS)

- Add an entry to your `hosts` file (on Windows, `C:\windows\system32\drivers\etc\hosts`) that registers the domain `hubs.local` to `127.0.1.1` (or whatever IP you chose.)

The net effect of this is that when the stack is running on your VM, you can hit your servers via `https://hubs.local` (with port 8080 or 4000) -- and because of the CSP configuration you will be able to use the entire app properly.