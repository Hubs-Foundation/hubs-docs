# Hubs Docs

<<<<<<< HEAD
This repository contains documentation for Hubs and related products, including Hubs Cloud and Spoke. It provides guides for developers, contributors, and users on setting up, customizing, and troubleshooting Hubs.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](http://discord.gg/wHmY4nd).
Thanks for sharing both files. Based on the current state of:

* `README.md` (which should be the project overview and contribution entry point), and
* `intro-behavior-graphs.md` (which should only contain documentation about Behavior Graphs),

This repo is for the documentation for Hubs, and related products such as Community Edition and Spoke.
=======
This repo contains documentation for the Hubs Foundation project, built using [Docusaurus](https://docusaurus.io/).
>>>>>>> 410b358 (docs: finalize readme and revert behavior graph doc)

## 📄 Docusaurus Header

Every markdown file should begin with a Docusaurus header block. This is **not Markdown**, but frontmatter metadata used by Docusaurus.

```yaml
---
id: my-doc-id
title: My Doc Title
description: A short description of the doc
sidebar_label: My Doc Label
---
```

Please **do not remove** or skip this header. The `id` should be unique, and the `description` is optional but encouraged.

---

## 📝 Fixing Documentation

### Step 1: Clone the Repo

```bash
git clone https://github.com/Hubs-Foundation/hubs-docs.git
cd hubs-docs
```

### Step 2: Create a Branch

```bash
git checkout -b fix-typos-or-additions
```

### Step 3: Make Changes

Make changes to `.md` files in the `docs/` directory. Remember to:

- Add a Docusaurus header at the top
- Write atomic commit messages (see [Commit Message Guidelines](https://github.com/Hubs-Foundation/policies-procedures-guidelines-public/blob/main/commit-message-guidelines.md))
- Follow the [Markdown syntax guide](https://commonmark.org/help/)

### Step 4: Submit Pull Request

- Push your branch to GitHub
- Open a PR
- Explain:
  - What you changed
  - Why it matters
  - How to test (if applicable)

See our [Pull Request Guidelines](https://github.com/Hubs-Foundation/policies-procedures-guidelines-public/blob/main/pull-request-guidelines.md) for details.

---

## 🛠 Local Development

To run the site locally:

```bash
npm install
npm run start
```

---

## 📚 Resources

- [Docusaurus Docs](https://docusaurus.io/docs)
- [Markdown Help](https://commonmark.org/help/)
- [Hubs Foundation GitHub](https://github.com/Hubs-Foundation)

