---
id: github-tutorial-1
title: GitHub Beginner’s Guide
sidebar_label: GitHub Beginner’s Guide
---

Welcome to the GitHub and Hubs quick start tutorial! 
This guide is designed for newcomers to help you understand the basics of GitHub and how to contribute to the Hubs project in less than 20 minutes.


1. [Creating a GitHub Account](#1-creating-a-github-account)
2. [Understanding Key GitHub Concepts](#2-understanding-key-github-concepts)
3. [Forking the project that you would like to contribute](#3-forking-the-project-that-you-would-like-to-contribute)
4. [Creating a new branch from Master](#4-creating-a-new-branch-from-master)
5. [Adding/editing files and commits changes to the branch](#5-addingediting-files-and-commits-changes-to-the-branch)
6. [Creating Pull Request](#6-creating-pull-request)

## 1. Creating a GitHub Account

To start using [GitHub](https://github.com), you need to create an account:
* Go to [GitHub's](https://github.com) website.
* Click on 'Sign up' in the top right corner.

![Creating a new account on github](img/github-1-1.png)
* Follow the prompts to create your account.

![Follow the prompts to create your account](img/github-1-2.png)

## 2. Understanding Key GitHub Concepts
Before we dive into contributing to a GitHub project, let's go over some key concepts:
* **Repository**: This is where your project lives. It contains all your files and revision history. In our next step(s), we would fork the first repository that we would like to contribute to!
* **Commits**: A commit is a snapshot of your project at a certain point in time.
For each commit, you can see how you / other users make file changes so that everyone can keep track of how things were changed.
* **Branches**: Branches allow you to work on different versions of your project. It is the other important feature of git for contributing to a project. 
* **Pull Requests**: When you want to contribute to a project, you can make a pull request so that the project owner can then merge your changes from one branch to another (hence, asking the project owner to `pull` the changes from yours commits)

## 3. Forking the project that you would like to contribute

We would be using https://github.com/Hubs-Foundation/hubs-docs/ as an example this time.

![Forking a repository](img/github-3-1.png)

Click on the **Fork** button to Fork your own copy of the **Repository**

![Setting on creating the new fork](img/github-3-2.png)

You may want to unclick the "Copy the `master` branch only", to have all other Branches also cloned to your new repository.

## 4. Creating a new branch from master

We are going to contribute with new changes, it is better to make sure we are providing a new version name (hence creating a new Branch from `master` branch)
![Creating new branch](img/github-4-1.png)

For this tutorial, we are demostrating adding a new section called `Contributing`, we would name the new brach `contributing` this time.

You can name the new branch as the new feature you are proposing in your case.

## 5. Adding/editing files and commits changes to the branch

You can go to the file and click on the edit the file button. 

![Modifiying files](img/github-5-1.png)

For instance, after reading the [README.md](https://github.com/Hubs-Foundation/hubs-docs/blob/master/README.md) and we found out we have to edit the the sidebars.json for adding a new section to the sidebar.

![Adding files](img/github-5-2.png)

For adding a new file, similarly head to the folder (we are adding github-tutorial-1.md to /docs folder, and several images to /website/static/img folder)

![Commiting changes](img/github-5-3.png)

After each changes, add “commit message” and then click “commit changes”. 

The commit message is not compulsory, but it is good to add remarks/ notes on the changes for later-on references.

## 6. Creating Pull Request

![Compare and Pull Request](img/github-6-1.png)
Once ready, you can go to the forked repository and click on "Compare and Pull Request"

![Commiting changes](img/github-6-2.png)
Similarly, adding an title and description so that the Repository's owner can get to know what those proposed commits are.

**That's it!** Then you can wait and see if the project owner / maintainers has any comments to your PR (Pull Request), then we as a community then work together, finalising your proposed changes and have it merged to the master branch officialy!

For any questions, feel free to ask us on the discord channel!
