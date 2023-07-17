---
id: setup-faq
title: Frequently Asked Questions
---

### Can I have more than one Hub with my FireFox Account?

There is currently a limit of one Hub per FireFox Account.

### What happen's if I exceed my Hub's content storage limit?

Your Hub's content storage limit is the total of all data associated with your Hub, largely composed of media uploaded via Spoke and the Admin Panel. You can see your cumulative storage on the subscription dashboard, which will display a warning if you exceed your subscription plan's limit. If you have exceed the storage limit, you will experience errors when attempting to upload additional media via Spoke and the Admin Panel.

PLEASE NOTE: The data limit is not currently enforced for Hubs Personal subscribers while we continue to refine tools for data management with feedback from our early adopters.

<img src="img/hub-over-limit.png" alt="The 503 error displayed when over ccu limit">

### I am trying to lower my content storage by deleting data, but the counter on the subscription dashboard is not updating. What am I doing wrong?

It may take up to 3 days for your Hub to completely remove data you have manually deleted in Spoke or the Admin panel. We are also aware of bugs in the tools used to delete data, informing our decision to currently suspend enforcement of the data limit for Hubs Personal subscribers. If you experience persistent issues trying to manage or delete data, please contact us through [one of our support channels](./setup-support.html#get-help).

### What happens if I exceed my Hub's concurrent user limit?

Hub servers are optimized according to the subscription plan you are subscribed to. Exceeding the optimal number of concurrent users will greatly affect the stability and performance of your hub. Most often, new users will receive a persistent 503 error when attempting to connect.

<img src="img/503-error.png" alt="The 503 error displayed when over ccu limit">

### What is the difference between a 'hub, a 'room', a 'space', and a 'scene'?

A 'hub' refers to the instance of Hubs associated with your FireFox Account. It is composed of your server and the tools, rooms, worlds, and other media that exist on top of it.

Understanding the difference between a 'room' and a 'scene' is a key concept for new users to learn while getting started with Hub. You can dive into these concepts in [this Creator Labs article](https://hubs.mozilla.com/labs/what-is-a-scene/).

'Space' and 'scene' are used interchangably throughout our documentation. You can upload an unlimited number of spaces/scenes on your Hub, as long as your Hub's total content stays within the data limit of your subscription plan.

### I know I can deploy a custom client with a professional plan. Can I also deploy a custom version of Spoke?

While custom Spoke deployments are not currently supported, we hope to be able to enable them soon. However, we are using the [Hubs Blender Add-On](./creators-blender-components.html) to develop and expose new features for designing worlds in Hubs. We highly recommend moving your custom Spoke features to the Blender Add-On.

### I am interested in deploying a custom client to my Hub. How can I keep up with the Hubs Team's regular releases?

The best way to keep your custom client up to date is to follow our releases on the `master` branch of the [Hubs github repo](https://github.com/mozilla/hubs).

### On Hubs Cloud I was able to add a google analytics key and extra CORS rules in the Admin Panel. Can I do this on the managed subscription?

For now, it is not possible to adjust these server settings on your hubs managed subscription.
