---
id: contributing
title: Contributing
description: Outlines the many ways people can get involved and contribute to the project.
---

This page outlines opportunities for people who want to contribute to the Hubs project. We welcome external contributions that align with the project's mission around enabling collaboration and communication through shared 3D spaces. You can find information about how to contribute to Hubs and the supporting projects that make up the platform here.

If you're starting a large change, you might want to first discuss it in one of the [Discord](https://discord.com/invite/hubs-498741086295031808) development channels.

Contributors are expected to abide by the project's [Code of Conduct](https://github.com/Hubs-Foundation/hubs/blob/master/CODE_OF_CONDUCT.md) and to be respectful of the project and people working on it.

The following GitHub projects are part of the Hubs platform and governed by these contributing guidelines: 

* https://github.com/Hubs-Foundation/hubs/ - the Hubs client & Admin Panel webapps
* https://github.com/Hubs-Foundation/spoke - a user-friendly 3D editor for creating scenes
* https://github.com/Hubs-Foundation/dialog - a WebRTC audio and video communication server
* https://github.com/Hubs-Foundation/reticulum - the server app for Hubs, the Admin Panel, and Spoke
* https://github.com/Hubs-Foundation/hubs-ops - operations infrastructure for Hubs
* https://github.com/Hubs-Foundation/hubs-discord-bot - Hubs' Discord integration

**Add-ons** — experimental, and only work in the `addons` branch of hubs at present

* https://github.com/Hubs-Foundation/hubs-duck-addon — a simple example add-on to spawn a duck
* https://github.com/Hubs-Foundation/hubs-behavior-graphs-addon — the Hubs implementation of  [behavior graphs](intro-behavior-graphs.html) / [Khronos glTF Interactivity](https://www.khronos.org/blog/gltf-interactivity-specification-released-for-public-comment)
* https://github.com/Hubs-Foundation/hubs-portals-addon  — a simple portal system
* https://github.com/Hubs-Foundation/hubs-postprocessing-addon — Three.js [post-processing](https://github.com/pmndrs/postprocessing) effects


## Quick Start

We are happy to receive contributions to the Hubs platform in a number of different ways as outlined below. Please note that all contributions are subject to approval by the project maintainers. We ask (but do not require) that those interested in contributing to Hubs consider joining the public [Hubs Discord chat server](https://discord.gg/wHmY4nd) to connect with the dev team, ask questions, and view discussions about work being done on the project.

### 💻 Code Contributions
Hubs has a client-server architecture that gives multiple users the ability to connect to a shared room on the server. If you are interested in contributing to the Hubs client, follow the instructions in the [Readme](https://github.com/Hubs-Foundation/hubs#readme) to get started. If you want to contribute to the networking or infrastructure, consider looking at the [reticulum](https://github.com/Hubs-Foundation/reticulum) or [Dialog](https://github.com/Hubs-Foundation/dialog) repositories. If you are interested in working on the code for Spoke, the 3D editor used to create custom environments for Hubs rooms, explore the [Spoke](https://github.com/Hubs-Foundation/spoke) repository.

Issues that are open are tagged. If you explore a bug or feature request that you'd like to fix, make a comment on the case so we know you're looking into it! We try to use the '[good first issue](https://github.com/Hubs-Foundation/hubs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)' tag to identify some cases that may be easier than others to begin with as you get started with the code base. 

Steps to contributing code to the Hubs project:

1. Clone the repo you want to contribute to and get things running locally
2. Find an issue or improvement that you want to fix - give us a heads up that you're working on it by dropping in a comment on the issue.
3. Write one or more automated tests, similar to existing tests, if there is test infrastructure for that part of the code. This is not required, but will help you and help reviewers, and thus speed the evaluation of your changes.
4. Fix the bug or implement the feature! Test out your changes on your local setup and let us know if you have questions or want another opinion about the fix.
5. Submit your PR for a code review and someone from the team will take a look and give feedback. Make sure you follow up! We'll close the PR if it seems like you've abandoned it by not responding to any questions or comments we leave in the review. If your PR adds a new feature, consider requesting the 'What's New' tag. With the 'What's New' tag, any text in the main body of the PR up to (and including) an image will be added to the Hubs website. Gifs are especially appreciated! [This pull request](https://github.com/Hubs-Foundation/hubs/pull/1536) shows an example of how the 'What's New' tag can be used.
6. Celebrate! 🎉 You're helping Hubs-Foundation's mission to make the web an open and accessible place for social experiences!



### 🐛Filing Issues and Feature Requests
Reporting bugs, feature requests, and questions that you have about the platform helps the team prioritize the work that we're doing and make Hubs better! We welcome user-submitted issues and use GitHub's built-in issue tracking for our bug reporting process. 

* If you are filing a bug, please include information about the operating system, device, and browser that you were using when you saw the bug. _Example: Seen on Windows 10 with Firefox 66.0.5 on Oculus Rift_

* Make sure to include the sequence of steps to reproduce the bug, ending with the actual result, and then describe what you expected to happen instead in the next section.

* The more detail the better! If you are able to reproduce a bug on multiple different browsers or on both desktop and mobile, that information is helpful for us to know about

* Screenshots when appropriate are much appreciated 📷

We will do our best to respond to and tag inbound issues as they are submitted in a timely manner. Bugs will be prioritized according to the following table: 

| Priority  | Criteria | Example |
| ------------- | ------------- | -------------
| P0 | Needs immediate attention. Affects many users and their ability to use core product functionality of connecting to rooms with other users. | No one can enter any Hubs rooms with any VR headset |
| P1 | Address as quickly as possible. Affects many users and their ability to use a common product feature. Workaround is difficult or unavailable. | Teleporting doesn't work for users on Quest with the Oculus browser. |
| P2 | Address when able. Affects some users regularly but mildly, or is a hard-to-repro failure seen rarely that is fixed with an easy workaround. | Lobby camera in Camera mode does not show emojis shared from iOS. <br><br> One user reports getting disconnected after ten minutes in a particular room, but no one else experiences it and they are able to refresh to re-enter.
| P3 | Address when able after P2 bugs are fixed. Affects a small set of users inconsistently in a non-breaking way with an easy workaround. | Every so often, a standalone VR headset will show up as a mobile phone in the user list. Refreshing fixes it. |

## 🎨 3D Art
If you are a 3D artist and want to support what we're doing with Hubs, consider creating and releasing content under a Creative Commons license or creating scenes using the [Spoke web editor](./spoke-creating-projects.html) and releasing them as remixable environments. Content with low polygon counts that are optimized to run well on the web are much appreciated! In particular, we'd love to see scenes that capture a wide range of experiences.

## 📜 Documentation
Our documentation for Hubs and Spoke is hosted on the GitHub [Hubs-docs repository](https://github.com/Hubs-Foundation/hubs-docs). For contributing corrections or additional pages, please file a pull request or issue as a suggestion with your proposed content and we will review it and add it when all looks good!

## 🌐 Localization
The Hubs client has localizations (not all complete) for the following languages:
* Catalan
* German
* Spanish
* French
* Italian
* Japanese
* Korean
* Portuguese
* Russian
* Chinese (simplified)
* Chinese (traditional)

We welcome additions and updates to these.
(Note that machine-generated translations can help, but by themselves are rarely what users need.  Also, make sure to follow our [AI usage policy](https://github.com/Hubs-Foundation/policies-procedures-guidelines-public/blob/main/ai-usge-policy.md) when working with anything machine-generated)

## 🦆 General Help
We believe in the power of community (that's why we're building this, after all!) and know that not all forms of support will come from something outlined here. Feel free to jump into our public [Discord chat server](https://discord.gg/wHmY4nd) to chat with us and ask about how you can get involved! See our [help page](./help.html) for other ways to contact us.

