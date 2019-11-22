---
id: running-hubs-on-aws-cloud9
title: Running Hubs on AWS cloud
---

Issue: https://github.com/mozilla/hubs/issues/411

- Create a new environment. You'll probably need an m3.medium instance at least, since yarn can consume a lot of memory at times.
- Upgrade nodejs: `$ nvm install 9`
- [Install yarn](https://yarnpkg.com/en/docs/install#centos-stable)
- Run `$ git clone https://github.com/mozilla/hubs`
- Setup Hubs:
  - `$ cd hubs`
  - `$ yarn install`
- Configure Hubs for Cloud9 by editing `webpack.config.js`
  - Set `https` to `false` under `devServer`
  - Add `disableHostCheck: true` under `devServer`
- Run `$ yarn start`
- Preview the running app by clicking on the "Preview" menu item and then "Preview Running Application"

Note that the room creation dialog on the Hubs landing page will not work because it attempts to communicate with our reticulum servers, which are not accessible from the AWS domain. Instead, you have to access a Hubs room directly:

`https://ENVIRONMENT_ID.vfs.cloud9.REGION_ID.amazonaws.com/hub.html?allow_multi&room=test-cloud9`

Also keep in mind that your Cloud9 instance will be using our WebRTC server for voice and data transfer by default, unless you setup and configure your own.