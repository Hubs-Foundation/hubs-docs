---
id: hubs-cloud-custom-clients
title: Creating and Deploying Custom Clients
sidebar_label: Custom Clients
---

Now that you have a working Hubs Cloud instance, you can create and deploy custom versions of the [Hubs Client](https://hubs.mozilla.com) yourself! By forking the [hubs repository](https://github.com/mozilla/hubs), making code changes, then deploying it to your live instance.

Your custom client code will be based off of the [`hubs-cloud` branch](https://github.com/mozilla/hubs/tree/hubs-cloud) which hosts Hubs client changes compatible with Hubs Cloud servers. Changes due to upgrades will be visible in merged PRs on the branch.

## Setup your Custom Client with your fork and upstream

### Setup your fork of the hubs repo

Your fork is a copy of the hubs repository on your github account.

1. Create a [github account](https://github.com)
1. Go to https://github.com/mozilla/hubs
1. Click the "Fork" button in the upper right hand corner
1. Select your newly forked repo (upper left should say "<your github username> / hubs" NOT "mozilla/hubs")
1. Click green "Code button" to open the **clone** options for your repo
1. **Copy** the url, you'll need this copied url for the next steps (everyone new to git use HTTPS)

Next, you will be cloning this repo onto your local machine.

You'll need: **git** installed for this step.

Run the following commands. To setup your forked repo on your machine.

```bash
# Clone your forked hubs repository locally
git clone <The url copied in Step 6>
cd hubs
git checkout hubs-cloud # to move to the hubs-cloud branch
```

The "hubs-cloud" branch should function as the "master" branch. Since Hubs Cloud clients are compatible with the hubs-cloud branch. For code changes, branch off this branch.

### Setup upstream remotes

Upstream remote repository points to the original hubs repo, so when the hubs repo get updated, your fork can pull in those changes and stay up to date.

Next, setup the original hubs repo as a remote upstream repository to keep your branches up to date.

```bash
# Connect to the mozilla managed hubs repository
git remote -v # should only print out "origin" your forked hubs repository url
git remote add upstream https://github.com/mozilla/hubs.git
git remote -v # now should see both origin + upstreams
```

You should see this printed:

```
origin <The url copied in Step 6>
origin <The url copied in Step 6>
upstream https://github.com/mozilla/hubs.git (fetch)
upstream https://github.com/mozilla/hubs.git (push)
```

Success! You've set up your fork and upstream repositories on your machine.

## Run your custom client

Now that you have the Hubs repository forked and cloned on your machine, you'll need to install some dependencies. You'll need [Node JS](https://nodejs.org/en/) installed first. Then you'll install the hubs dependencies. We recommend using `npm ci` instead of `npm install` so that you always use the versions of modules in the `package-lock.json` file.

```bash
npm ci
```

To run the client against your Hubs Cloud stack and deploy code to it, you'll need to be authenticated. Run `npm run login` and follow the instructions to authenticate (Warning: NOT `npm login`).

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
1. If it still hangs on "Building Admin Console" you may have a problem building the Admin Console

To test that your admin panel build is working, in your hubs repo root, try:

1. `cd admin` - _be in the admin/ directory_
1. `npm ci`
1. `npm run build`
1. If these commands succeed, try the `npm run deploy` command again.
1. If these commands fail, try `npm ci` and the `build` commands one more time, then fix the error in your code, then try these commands again.

If at any point you want to revert your Hubs client back to using the Mozilla upstream version of the client, run `npm run undeploy`.

```bash
npm run undeploy
```

## Update your Custom Client to the latest

You need to pull in the latest changes to the hubs-cloud branch into your fork + code.

Hubs Cloud is updated every month, to ensure your Hubs Cloud custom client is up to date, you should do this regularly in case of changes. See [Hubs Cloud Changelog](https://github.com/mozilla/hubs-cloud/blob/master/CHANGELOG.md) for details.

Check your remotes for the upstream mozilla hubs repository. If not, follow "Setup remotes" steps above.

```bash
git remote -v # should see origin AND upstream fetch/push .git urls
```

Fetch and merge the upstream Mozilla hubs-cloud branch into your branch. Especially important after a Hubs Cloud update.

```bash
git fetch upstream # Gets all updates for your mozilla/hubs repo
git checkout <your current hubs-cloud branch>
git merge upstream/hubs-cloud # Merges updates from the hubs-cloud branch into your current branch
```

Resolve conflicts. Then, deploy the updates.

```bash
npm run deploy
```

Congrats! Your client is now updated to the latest and live!
