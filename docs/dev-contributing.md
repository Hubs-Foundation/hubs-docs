---
id: contributing
title: Contributing
---

This page outlines opportunities for people who want to contribute to the Hubs project. We welcome external contributions that align with the project's mission around enabling collaboration and communication through shared 3D spaces. You can find information about how to contribute to Hubs and the supporting projects that make up the platform here. 

Contributors are expected to abide by the project's [Code of Conduct](CODE_OF_CONDUCT.md) and to be respectful of the project and people working on it. 

The following GitHub projects are part of the Hubs platform and governed by these contributing guidelines: 

* https://github.com/mozilla/hubs/ - the core Hubs project
* https://github.com/mozilla/spoke - 3D editor for creating scenes
* https://github.com/mozilla/janus-plugin-sfu - networking
* https://github.com/mozilla/reticulum - server infrastructure for Hubs
* https://github.com/mozilla/hubs-ops - operations infrastructure for Hubs
* https://github.com/MozillaReality/hubs-discord-bot - Hubs' Discord integration


## Quick Start

We are happy to receive contributions to the Hubs platform in a number of different ways as outlined below. Please note that all contributions are subject to approval by the project maintainers. We ask (but do not require) that those interested in contributing to Hubs consider joining the public [Hubs Discord chat server](https://discord.gg/wHmY4nd) to connect with the dev team, ask questions, and view discussions about work being done on the project.

### 💻 Code Contributions
Hubs has a client-server architecture that gives multiple users the ability to connect to a shared room on the server. If you are interested in contributing to the Hubs client, follow the instructions in the [Readme](https://github.com/mozilla/hubs/blob/master/README.md) to get started. If you want to contribute to the networking or infrastructure, consider looking at the [reticulum](https://github.com/mozilla/reticulum) or [janus](https://github.com/mozilla/janus-plugin-sfu) repositories. If you are interested in working on the code for Spoke, the 3D editor used to create custom environments for Hubs rooms, explore the [Spoke](https://github.com/mozilla/spoke) repository.

For more information on the inner workings of Hubs and the architectural decisions behind the project, check out [this presentation on the Mozilla Hubs Code Base](https://vimeo.com/365531296) by Engineering Lead Greg Fodor.

Issues that are open are tagged. If you explore a bug or feature request that you'd like to fix, make a comment on the case so we know you're looking into it! We try to use the '[good first issue](https://github.com/mozilla/hubs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)' tag to identify some cases that may be easier than others to begin with as you get started with the code base. 

Steps to contributing code to the Hubs project:

1. Clone the repo you want to contribute to and get things running locally
2. Find an issue or improvement that you want to fix - give us a heads up that you're working on it by dropping in a comment on the issue.
3. Fix the bug! Test out your changes on your local setup and let us know if you have questions or want another opinion about the fix. 
4. Submit your PR for a code review and someone from the team will take a look and give feedback. Make sure you follow up! We'll close the PR if it seems like you've abandoned it by not responding to any questions or comments we leave in the review. If your PR adds a new feature, consider requesting the 'What's New' tag. With the 'What's New' tag, any text in the main body of the PR up to (and including) an image will be added to the [hubs website](https://hubs.mozilla.com/whats-new). Gifs are especially appreciated! [This pull request](https://github.com/mozilla/hubs/pull/1536) shows an example of how the 'What's New' tag can be used.
5. Celebrate! 🎉 You're helping Mozilla's mission to make the web an open and accessible place for social experiences! 

### For Reference  here is a detailed explanation about Getting Started with Github

### How To Contribute to Open Source: Getting Started with Git

* Introduction

Open-source projects that are hosted in public repositories benefit from contributions made by the broader developer community, and are typically managed through Git.

Contributing to Open-Source Projects
Open-source software is software that is freely available to use, redistribute, and modify.
Projects that are open source encourage a transparent process that is advanced through distributed peer review. Open-source projects can be updated quickly and as needed, and offer reliable and flexible software that is not built on locked proprietary systems.

* Git

One of the most popular version control systems for software is Git. Git was created in 2005 by Linus Torvalds, the creator of the Linux kernel. Originally utilized for the development of the Linux kernel, Junio Hamano is the current maintainer of the project.
Many projects maintain their files in a Git repository, and sites like GitHub, GitLab, and Bitbucket have made sharing and contributing to code simple, valuable, and effective. Every working directory in Git is a full-fledged repository with complete history and tracking independent of network access or a central server.
version control has become an indispensable tool in modern software development because these systems allow you to keep track of software at the source level. You and other members of a development team can track changes, revert to previous stages, and branch off from the base code to create alternative versions of files and directories.

* Check If Git is Installed

First, you will want to check to see if you have Git command line tools installed on your computer. If you have been making repositories of your own code, then you likely have Git installed on your local machine. Some operating systems also come with Git installed, so it is worth checking before you install.
You can check whether Git is installed and what version you are using by opening up a terminal window in Linux or Mac, or a command prompt window in Windows, and typing the following command:
```sh
git --version
```
However, if Git is not installed, you will receive an error similar to the following:
```sh
-bash: git: command not found
```
```sh
'git' is not recognized as an internal or external command, operable program or batch file.
```
In this case, you should install Git into your machine.

* Setting Up Git

Now that you have Git installed, you need to do a few things so that the commit messages that will be generated for you will contain your correct information.

The easiest way of doing this is through the git config command. Specifically, we need to provide our name and email address because Git embeds this information into each commit we do. We can go ahead and add this information by typing:
```sh
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
```
With Git installed and set up on your local machine, you are now ready to use Git for version control of your own software projects as well as contribute to open-source projects that are open to the public.

## How To Create a Pull Request on GitHub

* Prerequisites

You should have Git installed on your local machine. You can check if Git is installed on your computer and go through the installation process for your operating system by following above step.
#### 1.Create a Copy of the Repository

A repository, or repo for short, is essentially the main folder of a project. The repository contains all the relevant project files, including documentation, and also stores the revision history for each file. On GitHub, repositories can have multiple collaborators and can either be public or private.

In order to work on an open-source project, you will first need to make your own copy of the repository. To do this, you should fork the repository and then clone it so that you have a local working copy.
#### 2.Fork the Repository
You can fork a repository on GitHub by navigating with your browser to the GitHub URL of the open-source project you would like to contribute to.

GitHub repository URLs will reference both the username associated with the owner of the repository, as well as the repository name.
```sh
https://github.com/username/repository
```
#### 3.Clone the Repository
To make your own local copy of the repository you would like to contribute to, let’s first open up a terminal window.

We’ll use the git clone command along with the URL that points to your fork of the repository.

This URL will be similar to the URL above, except now it will end with .git. In the cloud_haiku example above, the URL will look like this:
```sh
git clone https://github.com/your-username/repository.git
```
You can alternatively copy the URL by using the green “Clone or download” button from your repository page that you just forked from the original repository page. Once you click the button, you’ll be able to copy the URL by clicking the binder button next to the URL
Now that we have a local copy of the code, we can move on to creating a new branch on which to work with the code.

#### 4.Create a New Branch
Whenever you work on a collaborative project, you and other programmers contributing to the repository will have different ideas for new features or fixes at once. Some of these new features will not take significant time to implement, but some of them will be ongoing. Because of this, it is important to branch the repository so that you are able to manage the workflow, isolate your code, and control what features make it back to the main branch of the project repository.

The default main branch of a project repository is usually called the master branch. A common best practice is to consider anything on the master branch as being deployable for others to use at any time.
When creating a branch, it is very important that you create your new branch off of the master branch. You should also make sure that your branch name is a descriptive one. Rather than calling it my-branch, you should go with fix-documentation-typos instead.

To create our branch, from our terminal window, let’s change our directory so that we are working in the directory of the repository. Be sure to use the actual name of the repository to change into that directory.
```sh
cd repository
```
Now, we’ll create our new branch with the git branch command. Make sure you name it descriptively so that others working on the project understand what you are working on.
```sh
git branch new-branch
```
Now that our new branch is created, we can switch to make sure that we are working on that branch by using the git checkout command:
```sh
git checkout new-branch
```
Once you enter the git checkout command, you will receive the following output:
```sh
output:
Switched to branch 'new-branch'
```
If you want to switch back to master, you’ll use the checkout command with the name of the master branch
```sh
git checkout master
```
#### 5.Make Changes Locally
Once you have modified an existing file or added a new file to the project, you can add it to your local repository, which we can do with the git add command. Let’s pass the name of the changed file to this command:
```sh
git add filename.md  
```
This will make sure your file is ready to be added. If you are looking to add all the files in a particular directory, you can stage them with git add . where the full stop or period will add all relevant files. If you are looking to recursively add all changes including those in subdirectories, you can type the command git add -A or alternatively git add -all for all new files to be staged.

With our file staged, we’ll want to record the changes that we made to the repository with the git commit command.
The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is. Additionally, commit messages provide a historical record of the changes for the project at large, helping future contributors along the way.

If we have a very short message, we can record that with the -m flag and the message in quotes:
```sh
git commit -m "Fixed documentation typos"
```
But, unless it is a very minor change, we will more than likely want to include a lengthier commit message so that our collaborators are fully up to speed with our contribution. To record this larger message, we will run the git commit command which will open the default text editor
```sh
git commit 
```
If you would like to configure your default text editor, you can do so with the git config command, and set nano or vim as the default editor
```sh
git config --global core.editor "nano"
```
or
```sh
git config --global core.editor "vim"
```
After running the git commit command, depending on the default text editor you’re using, your terminal window should display a document ready for you to edit
Underneath the introductory comments, you should add the commit message to the text file.

To write a useful commit message, you should include a summary on the first line that is around 50 characters long. Under this, and broken up into digestible sections, you should include a description that states the reason you made this change, how the code works, and additional information that will contextualize and clarify it for others to review the work when merging it. Try to be as helpful and proactive as possible to ensure that those maintaining the project are able to fully understand your contribution.

Once you have saved and exited the commit message text file, you can verify what git will be committing with the following command:
```sh
git status
```
Depending on the changes that you have made, you will receive output 
Before commiting your changes add the following commands on your terminal
```terminal 
git remote add upstream https://github.com/your-username/repository.git
```
```terminal
git pull upstream master
```
Commit your changes.

```terminal
  git add .
  git commit -m "<your_commit_message>"
```
Push your local branch to the remote repository.
```terminal
git push 
```
At this point you can use the git push command to push the changes to the current branch of your forked repository.
```sh
git push --set-upstream origin new-branch
```
The command will provide you with output to let you know of the progress.
You can now navigate to the forked repository on your GitHub webpage and toggle to the branch you just pushed to see the changes you have made in-browser.

At this point, it is possible to make a pull request to the original repository, but if you have not already done so, you’ll want to make sure that your local repository is up-to-date with the upstream repository.




### 🐛Filing Issues and Feature Requests
Reporting bugs, feature requests, and questions that you have about the platform helps the team prioritize the work that we're doing and make Hubs better! We welcome user-submitted issues and use Github's built-in issue tracking for our bug reporting process. 

* If you are filing a bug, please include information about the operating system, device, and browser that you were using when you saw the bug. _Example: Seen on Windows 10 with Firefox 66.0.5 on Oculus Rift_

* The more detail the better! If you are able to reproduce a bug on multiple different browsers or on both desktop and mobile, that information is helpful for us to know about

* Screenshots when appropriate are much appreciated 📷

We will do our best to respond to and tag inbound issues as they are submitted in a timely manner. Bugs will be prioritized according to the following table: 

| Priority  | Criteria | Example |
| ------------- | ------------- | -------------
| P0 | Needs immediate attention. Affects many users and their ability to use core product functionality of connecting to rooms with other users. | No one can enter any Hubs rooms with any VR headset |
| P1 | Address as quickly as possible. Affects many users and their ability to use a common product feature. Workaround is difficult or unavailable. | Teleporting doesn't work for users on Quest with the Oculus browser. |
| P2 | Address when able. Affects some users regularly but mildly, or is a hard-to-repro failure seen rarely that is fixed with an easy workaround. | Lobby camera in Camera mode does not show emojis shared from iOS. <br><br> One user reports getting disconnected after ten minutes in a particular room, but no one else experiences it and they are able to refresh to re-enter.
| P3 | Address when able after P2 bugs are fixed. Affects a small set of users inconsistently in a non-breaking way with an easy workaround. | Every so often, a standalone VR headset will show up as a mobile phone in the user list. Refreshing fixes it. |

### 🎨 3D Art
If you are a 3D artist and want to support what we're doing with Hubs, consider creating and releasing content under a Creative Commons license or creating scenes using the [Spoke web editor](https://hubs.mozilla.com/spoke) and releasing them as remixable environments. Content with low polygon counts that are optimized to run well on the web are much appreciated! In particular, we'd love to see scenes that capture a wide range of experiences. 

### 📜 Documentation 
Our documentation for Hubs is hosted on the [GitHub Hubs Wiki](https://github.com/mozilla/hubs/wiki) section of the project. The documentation for Spoke is hosted on the [GitHub Spoke Wiki](https://github.com/mozilla/spoke/wiki) For contributing corrections or additional pages for the Wiki, please file an issue as a suggestion in the corresponding repository with your proposed content and we will review it and add it to the wiki when all looks good! 

### 🌐 Localization 
Hubs is currently en-US only, but if you would like to work with us on localization efforts, submit a suggestion through the GitHub issues and we'll work with you from there. 

### 🦆 General Help
We believe in the power of community (that's why we're building this, after all!) and know that not all forms of support will come from something outlined here. Feel free to jump into our public [Discord chat server](https://discord.gg/wHmY4nd) to chat with us and ask about how you can get involved! See our [help page](./help.html) for other ways to contact us.

