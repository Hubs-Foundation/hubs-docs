---
id: hubs-cloud-custom-clients
title: Creating and Deploying Custom Clients
sidebar_label: Custom Clients
---

Once you have a working hub on Hubs Cloud, you can easily create and deploy custom versions of the [Hubs Client](https://hubs.mozilla.com) by cloning the [repository](https://github.com/mozilla/hubs).

When working on a custom client, you should base your code on the `hubs-cloud` [branch](https://github.com/mozilla/hubs/tree/hubs-cloud) branch, which will be the branch that has client changes compatible with Hubs Cloud servers. When server upgrades occur (approximately once a month), you should merge with the latest changes to this branch. Changes due to upgrades will be visible in merged PRs on the branch.

```bash
git clone https://github.com/mozilla/hubs
cd hubs
git checkout hubs-cloud
```

Now that you have the Hubs repository cloned you'll need to install some dependencies. You'll need [Node JS](https://nodejs.org/en/) installed first. Then you'll install the hubs dependencies. We recommend using `npm ci` instead of `npm install` so that you always use the versions of modules in the `package-lock.json` file.

```bash
npm ci
```

To run the client against your Hubs Cloud stack and deploy code to it, you'll need to be authenticated. Run `npm run login` and follow the instructions to authenticate.

```bash
npm run login
```

Once you are logged in you can start up the local development server with `npm start`. Your local development server will automatically rebuild your javascript project and refresh the page when you make changes. It will also connect to your Hubs Cloud server for all API requests, game/voice networking, and fetching configurations set in your admin panel.

```bash
npm start
```

After you've made changes to your client's code you can deploy the changes to your Hubs Cloud stack with the `npm run deploy` command. Once that has finished you should see the changes live on your site! Please expect the `npm run deploy` command to take a while.

```bash
npm run deploy
```

> Note: When running a deploy, ensure webpack-dev-server (`npm start`) is **not** running. This may cause conflicts in the build process.

If `npm run deploy` hangs on "Building Admin Console" for more than 20 minutes:

1. Stop then restart `npm run deploy` (sometimes it takes 2 tries to deploy)
2. If it still hangs on "Building Admin Console" you may have a problem building the Admin Console

To test that your admin panel build is working, in your hubs repo root, try:

1. `cd admin` - _be in the admin/ directory_
2. `npm ci`
3. `npm run build`
4. If these commands succeed, try the `npm run deploy` command again.
5. If these commands fail, try `npm ci` and the `build` commands one more time, then fix the error in your code, then try these commands again.

If at any point you want to revert your Hubs client back to using the Mozilla upstream version of the client, run `npm run undeploy`.

```bash
npm run undeploy
```

## To update your branch

Fork the hubs repository, then clone your forked hubs repository.

```bash
# Clone your forked hubs repository locally
npm clone https://github.com/<your github username>/hubs
cd hubs
git branch
git checkout hubs-cloud

# Connect to the mozilla managed hubs repository
npm remote -v
npm remote add https://github.com/mozilla/hubs
npm remote -v
```

### Should see

```
upstream https://github.com/mozilla/hubs.git (fetch)
upstream https://github.com/mozilla/hubs.git (push)
```

After a Hubs Cloud update, run below commands to update your custom client.

```bash
npm fetch upstream
npm merge upstream/hubs-cloud
```

Hubs Cloud is updated every month, to ensure your Hubs Cloud custom client is up to date, you should do this regularly in case of changes. See Hubs Cloud Changelog // TODO ADD LINK for details.
