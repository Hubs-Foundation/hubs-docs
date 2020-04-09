---
id: hubs-cloud-custom-clients
title: Creating and Deploying Custom Clients
sidebar_label: Custom Clients
---

Once you have a working hub on Hubs Cloud, you can easily create and deploy custom versions of the [Hubs Client](https://hubs.mozilla.com) by cloning the [repo](https://github.com/mozilla/hubs).

When working on a custom client, you should base your code on the `hubs-cloud` [branch](https://github.com/mozilla/hubs/tree/hubs-cloud) branch in git, which will be the branch that has client changes compatible with Hubs Cloud servers. When server upgrades occur (approximately once a month), you should merge with the latest changes to this branch. Changes due to upgrades will be visible in merged PRs on the branch.

Normally, when you run `npm start` after a fresh checkout, you will be using Mozilla's dev hub. Once you have your own hub set up, you can point your local client to it so that rooms, scenes, etc from your hub will be available when running your local client.

To run your locally modified client against your self hosted hub run the `scripts/use-hubs-cloud-stack.sh` script. (Run this script without arguments to see how to use it.) After running this script, `.env.defaults` will be modified so subsequent runs of `npm start` will be accessing your hub. You can commit the changes to `.env.defaults` to make this change permanent. If you'd like to go back to using Mozilla's dev hub, you can run `scripts/use-mozilla-dev.sh`.

To deploy your custom client, run `npm run deploy` and follow the prompts. If you want to revert your hub back to using the Mozilla upstream version of the client, run `npm run undeploy`.

Note: When running a deploy, ensure webpack-dev-server (`npm start`) is **not** running. This may cause conflics in the build process.
