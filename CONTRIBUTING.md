# Content Structure
The Hubs documentation site has several different types of content that covers both Hubs and Spoke. Please keep the following structure in mind when creating new documentation files for the site. 

* Getting Started Guides
  - Guide    - Getting started with Github
  - Guide #1 - Getting Started With Hubs 
  - Guide #2 - Building a Scene with Spoke
  
## Getting Started with Github


## How To Contribute to Open Source: Getting Started with Git

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

#### 6.Create Pull Request
At this point, you are ready to make a pull request to the original repository.

You should navigate to your forked repository, and press the “New pull request” button on your left-hand side of the page.
You can modify the branch on the next screen. On either site you can select the appropriate repository from the drop-down menu and the appropriate branch.
Once you have chosen, for example, the master branch of the original repository on the left-hand side, and the new-branch of your forked repository of the right-hand side.
GitHub will alert you that you are able to merge the two branches because there is no competing code. You should add in a title, a comment, and then press the “Create pull request” button.

At this point, the maintainers of the original repository will decide whether or not to accept your pull request. They may ask for you to edit or revise your code prior to accepting the pull request.
At this point, you have successfully sent a pull request to an open-source software repository. Following this, you should make sure to update and rebase your code while you are waiting to have it reviewed. Project maintainers may ask for you to rework your code, so you should be prepared to do so.


* Hubs Reference
  - Scenes
    - Scene Browser
    - Lobbies and Rooms
    - Sharing Invites
    - Receiving Invites
    - User List
    - Chat
    - Notifications
    - Name
    - Entering a Room
    - Entering on a Mobile VR Headset
  - In Room Experience
    - Moving Around
      - Fly Mode
    - Growing and Shrinking
    - Muting
    - Adding video, audio, 3D models and images
    - Moving Objects
    - Menus
    - Pinning
    - Blocking
    - Using Chat
    - Using the Camera
    - Mirror Mode
    - Focus and Track Mode
    - Using the Pen
    - Sharing Your Screen or Phone/Web Cam
    - Controls
    - User List
    - Object list
    - Moderating rooms
    - Customizing Avatars
    - Discord Integration

* Spoke Reference
  - Lighting and shadows
  - Physics and Navigation
  - Creating Assets for Spoke
  - Using Spoke Scenes in your own Projects
  - Keyboard and Mouse Controls
  - (Example) Asset panel
  - (Example) Element Properties

* For Developers
  - Hubs system overview
  - (Example) source code
  - (Example contributing to Hubs and spoke
