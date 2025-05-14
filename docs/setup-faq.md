---
id: setup-faq
title: Frequently Asked Questions
description: The terminology and limits of Hubs, and custom versions
---

## Can I have more than one Hub with my account?

Since currently hosting is the responsibility of the user, there is no limit to the number of Hubs you can build. 

## What happens if I exceed my Hub's content storage limit?

Your Hub's content storage limit is the total of all data associated with your Hub, largely composed of media uploaded via Spoke and the Admin Panel. If you have exceed the storage limit, you will experience errors when attempting to upload additional media via Spoke and the Admin Panel.

## What happens if I exceed my Hub's concurrent user limit?

Exceeding the optimal number of concurrent users will greatly affect the stability and performance of your hub. Most often, new users will receive a persistent 503 error when attempting to connect.

<img src="img/503-error.png" alt="The 503 error displayed when over ccu limit">

## What is the difference between a 'hub, a 'room', a 'space', and a 'scene'?

A 'hub' refers to the instance of Hubs associated with your account. It is composed of your server and the tools, rooms, worlds, and other media that exist on top of it.

Understanding the difference between a 'room' and a 'scene' is a key concept for new users to learn while getting started with Hub. 

'Space' and 'scene' are used interchangably throughout our documentation. You can upload an unlimited number of spaces/scenes on your Hub, as long as your Hub's total content stays within the data limit of your subscription plan.

## Can I also deploy a custom version of Spoke?

While custom Spoke deployments are not currently supported, we hope to be able to enable them soon. However, we are using the [Hubs Blender Add On](https://github.com/Hubs-Foundation/hubs-blender-exporter) to develop and expose new features for designing worlds in Hubs. We highly recommend moving your custom Spoke features to the Blender Add-On.

## I am interested in deploying a custom client to my Hub. How can I keep up with the Hubs Team's regular releases?

The best way to keep your custom client up to date is to follow our releases on the `master` branch of the [Hubs github repo](https://github.com/Hubs-Foundation/hubs).

