---
id: setup-custom-client
title: Custom Clients (Pro Plan)
---

_This guide walks you through the steps of setting up and removing a custom client on your Hub for Professional plan subscribers._

**Table of Contents**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Introduction](#introduction)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Prerequisites](#prerequisites)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part A: Set Up the Hubs Client](#part-a-set-up-the-hubs-client)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part B: Prepare Your Custom Client Tarball](#part-b-prepare-your-custom-client-tarball)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part C: Locate Your turkeyauthtoken](#part-c-locate-your-turkeyauthtoken)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Part D: Deploy Your Custom Client](#part-d-deploy-your-custom-client)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Removing Your Custom Client](#removing-your-custom-client)

---

## Introduction

Deploying a custom client to your Hub allows you to fully control the appearance and functionality of [the Hubs 3D engine and frontend code](https://github.com/mozilla/hubs). This feature is intended for subscribers with at least a beginner level of javascript development experience. Please be advised that deploying a custom client disables the automatic updates that the Hubs Team regularly deploys to subscription instances. You can follow our regular updates [here](https://github.com/mozilla/hubs/releases).

If you need more assistance, we recommend following along with our [Custom Client Tutorial Video](https://www.youtube.com/watch?v=dJAy1gk5Ow0).

## Prerequisites

1. You must have a [Custom Domain](./setup-custom-domain.html) deployed on your Hub before you can upload a custom client.

2. Make sure you have [docker](https://www.docker.com/) installed on your device. Testing for this feature utilized docker version `20.10.21`.

## Part A: Set Up the Hubs Client

1. Clone the [Hubs github repository](https://github.com/mozilla/hubs) onto your device. Users deploying custom clients to subscriptions should use the `master` branch of the repository.

2. Install the project's node dependencies by running `npm ci`. Make sure you are using node version `16.16`. This process may take up to 30 minutes.

3. Change directory into the folder of your project and run `npm run dev` to start a development server. Once the code has compiled, you will be able to access this development server at `localhost:8080` on your web browser.

4. Add your customizations to the Hubs code. See the [For Developers](./system-overview.html) section of these docs for information about how to get started with your customizations.

&nbsp;&nbsp;&nbsp;<u>**Troubleshooting**</u>

- The backend dev server is configured with CORS to only accept connections from "hubs.local:8080", so you will need to access it from that host. To do this, you likely want to add "hubs.local" and "hubs-proxy.local" to the local "hosts" file on your computer:

```
127.0.0.1       hubs.local
127.0.0.1       hubs-proxy.local
```

## Part B: Prepare Your Custom Client Tarball

1. Change directory to the main folder of your project, make sure you have docker opened, and run `bash retpack.sh`

2. The code may take up to an hour to complete depending on the size of your customizations and processing power of your computer. Once complete, it will return the following message and your tarball will be located at `./.retpack/retpack.tar.gz`.

```
### done ###
-rw-r--r--@ 1 mozilla staff {timestamp} ./.retpack/retpack.tar.gz
```

&nbsp;&nbsp;&nbsp;<u>**Troubleshooting**</u>

- If `npm ci` fails during the build process, there are a couple of options to fix this. First, verify that you are using node version `16.16.0`. Second, if you are using a Mac computer with M1 silicon, run `export DOCKER_DEFAULT_PLATFORM=linux/amd64` before running `bash retpack.sh`.

## Part C: Locate Your `turkeyauthtoken`

1. Open the [developer tools](https://support.monday.com/hc/en-us/articles/360002197259-How-to-open-the-developer-console) in the subscription dashboard and navigate to the “Console” tab.

2. Run the following code in the console to get your token: `console.log(RegExp("_turkeyauthtoken"+"=[^;]+").exec(document.cookie)[0].slice(17))`

3. Copy the long string of characters to be used in Part D. **Please note that turkeyauthtokens are only valid for 12 hours.**

## Part D: Deploy Your Custom Client

_Deploying a custom client will disable the automatic updates that the Hubs Team regularly deploys to subscription instances. If you choose to use a custom client, you are responsible for keeping up with these regular updates to ensure your code is functional._

1. Open your terminal, and run the following command with the 3 parameters surrounded by `< >` populated with your specific information from previous steps:\
   `curl -X POST -F file='@<path-to-client-tarball-on-your-device>' -H "turkeyauthtoken:<token-value-from-part-c>" 'https://<native-hub-domain>/api/ita/deploy?app=hubs'`

2. The terminal command may take several minutes to complete depending on the quantity and nature of your customization. **Do not exit the terminal until the upload process has completed.** Once successfully complete, it will return `done, reqId: <unique-ID-string>`. After a few minutes, you should see your customization on your Hub.

3. After deploying, try to create a room to verify your customizations have taken place. If you are unable to see your customizations, email [hubs-feedback@mozilla.com](mailto:hubs-feedback@mozilla.com) with the subject line `Hubs Custom Client Deployment Troubleshooting` and a description of your problem.

## Removing Your Custom Client

_Removing a custom client will re-enable the automatic updates that the Hubs Team regularly deploys to subscription instances._

1. Open your terminal, and run the following command with the 2 parameters surrounded by `< >` populated with your specific information from previous steps:\
   `curl -X PATCH -H "turkeyauthtoken:<token-value-from-part-c>" 'https://<native-hub-domain>/api/ita/undeploy?app=hubs'`

2. The terminal command should execute quickly and return the value `done`. After a few minutes, you should be able to access your Hub and should no longer see your customizations.
