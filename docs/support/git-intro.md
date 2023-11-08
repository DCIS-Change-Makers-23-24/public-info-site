---
id: git-intro
title: Introduction to Git Documentation
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown
custom_edit_url: https://github.com/DCIS-Change-Makers-23-24/public-info-site/new/main/docs/support/git-intro.md
description: Get started with Git version control
keywords:
  - git
  - VSC

last_update:
  date: April 4, 2023
  author: Jaeden Tsai
---

# What's Version Control?

Version control is a crucial tool in software development that allows developers to track changes. It is widely used by developers worldwide. In this documentation, we will focus on the distributed model of version control, Git, which enables you to efficiently manage your code online and ensure it meets the requirements of this year's hackathon.

# Prerequisites

Before we begin, ensure you have the following:

- A GitHub account
- Git installed
- An integrated development environment (IDE) of your choice (We will be using Visual Studio Code)
- Familiarity with GitHub

## Setting Up Your Project

1. Open GitHub Desktop and make sure you are signed in.
2. Navigate to File -> New Repository (Make sure it is initialized with a README).
3. Once created, click on "Publish Repository."
   
Congratulations, you have successfully created your GitHub repository!

## Committing

As you start coding, you will notice a panel on the left labeled "Changed Files." This is GitHub Desktop automatically detecting the files you have modified, allowing you to track your changes. For this hackathon, we recommend setting your commit messages with this format (you can use your own format for other purposes):

(For other hackathons or personal use, you can use your own commit tags)

You can make as many commits as you want locally on your computer. We recommend committing as often as possible for every change.

## Pushing

Pushing essentially means uploading or updating your local commits to GitHub. When you push, everyone else who has access to your repository can see your new code and view your commits. As ChatGPT aptly puts it:

> In Git, "push" is a fundamental operation that allows you to share your local code changes with a remote repository. Think of a remote repository as a central storage location where multiple team members can collaborate on a project.

## After Pushing

Your repository should look like this:

![image](https://github.com/DCIS-Change-Makers-23-24/internal-guide-storage/assets/95214533/ba6466e8-7842-4a1c-bd7d-3e129255f214)

# Branches and Merging

Branches are essentially separate timelines to store your changes. Typically, developers use branches like `main`, `dev`, `featureone`, `featuretwo`, etc. Branches help prevent merge conflicts and issues when multiple people try to commit code without pulling the latest changes. Learn more about branches here: [Creating and Deleting Branches Within Your Repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)

## Pull Requests

A "pull request" is the term used when you are going to merge a branch into another. It involves pulling changes from one branch into another, such as merging changes from `featureone` into `main`. Branches allow you to work separately before merging all your code into one branch, essentially merging timelines into one. Find more information on pull requests here: [Merging a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
