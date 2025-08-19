# Hubs Docs

This repository contains documentation for Hubs and related products, including Hubs Cloud and Spoke. It provides guides for developers, contributors, and users on setting up, customizing, and troubleshooting Hubs.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](http://discord.gg/wHmY4nd).
Thanks for sharing both files. Based on the current state of:

* `README.md` (which should be the project overview and contribution entry point), and
* `intro-behavior-graphs.md` (which should only contain documentation about Behavior Graphs),

This repo is for the documentation for Hubs, and related products such as Community Edition and Spoke.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](https://discord.gg/wHmY4nd).
The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](http://discord.gg/wHmY4nd).
Thanks for sharing both files. Based on the current state of:

* `README.md` (which should be the project overview and contribution entry point), and
* `intro-behavior-graphs.md` (which should only contain documentation about Behavior Graphs),

I'll now provide corrected versions of both files, fixing the mistake that was noted by Exairnous: moving the **Behavior Graph** content **out of the README** and back into `intro-behavior-graphs.md`, and ensuring the `README.md` contains the correct project-level information including the Docusaurus header.

This website was created with [Docusaurus](https://docusaurus.io/). 


# Docusaurus information 
## What's In This Document

* [Get Started in 5 Minutes](#get-started-in-5-minutes)
* [Directory Structure](#directory-structure)
* [Editing Content](#editing-content)
* [Adding Content](#adding-content)
* [Full Documentation](#full-documentation)

## Get Started in 5 Minutes

1. Make sure all the dependencies for the website are installed:

```sh
# Navigate to the website directory
$ cd website

# Install dependencies
$ npm ci
```
2. Run your dev server:

```sh
# Start the site
$ npm start
```

### Directory Structure

Your project file structure should look something like this

```
my-docusaurus/
  docs/
    doc-1.md
    doc-2.md
    doc-3.md
  website/
    core/
    node_modules/
    pages/
    static/
      css/
      img/
    package.json
    sidebar.json
    siteConfig.js
```

## Editing Content

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`
## ✅ Updated `README.md`

````md
---
id: readme
title: Hubs Docs
sidebar_label: Introduction
slug: /
description: Welcome to the Mozilla Hubs documentation site. Learn how to contribute and explore resources related to the Hubs platform.
---

# Mozilla Hubs Documentation

Welcome to the documentation site for [Mozilla Hubs](https://hubs.mozilla.com/), an open source project that enables shared virtual reality experiences in the browser.

This site is built using [Docusaurus 2](https://docusaurus.io/), and aims to provide users, creators, and developers with guidance, reference materials, and tutorials for using and contributing to Hubs.

## 📁 Project Structure

This documentation project includes:

- `docs/` — Markdown files for documentation pages (rendered at [hubs.mozilla.com/docs](https://hubs.mozilla.com/docs))
- `website/` — The Docusaurus site configuration and styling
- `static/` — Static files like images, icons, etc.

## 🧠 Key Concepts

- **Hubs** — Virtual 3D spaces you can enter with a URL and customize via Blender, Spoke, or code.
- **Spoke** — Mozilla’s visual editor for creating 3D scenes.
- **Behavior Graphs** — A system for defining interactions visually via node-based scripting in Blender.
- **Self-Contained Models** — `.glb` files that include geometry, textures, and behavior logic.

## 🚀 Getting Started

If you’re new to Hubs and just want to get started:

- Learn about [Creating Scenes with Spoke](./spoke-intro.md)
- Explore [Behavior Graphs for interactivity](./intro-behavior-graphs.md)
- Understand [Hubs Rooms and Avatars](./rooms-and-avatars.md)

## 📥 Contributing

Contributions are welcome! If you're new to open source or the Hubs ecosystem:

- See our [Contribution Guidelines](./policies-procedures-guidelines-public/commit-message-guidelines.md)
- Read our [Docs Contribution Process](./docs-contribution-guidelines.md)
- Join us in a [Community Collaboration Session](https://github.com/MozillaReality)

To contribute:

```bash
# Clone the repo
git clone https://github.com/MozillaReality/hubs-docs.git
cd hubs-docs

# Install dependencies
npm install

# Run locally
npm run start
````

## 📚 Docusaurus Notes

This site is built with **Docusaurus v2**, which enables:

* Markdown-based docs
* Sidebar navigation
* Custom themes and styling
* Hot reload development server

Check `docusaurus.config.js` and the `sidebars.js` for configuration.

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

### Editing an existing blog post

Edit blog posts by navigating to `website/blog` and editing the corresponding post:

`website/blog/post-to-be-edited.md`
```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click [here](https://docusaurus.io/docs/en/adding-blog)

## Adding Content

### Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here](https://docusaurus.io/docs/en/navigation)

## Full Documentation

Full documentation can be found on the [website](https://docusaurus.io/).

## Contributing to Hubs Docs

We welcome contributions from the community! Here’s how you can help:

### 📝 Fixing Documentation  
If you notice typos, unclear sections, or outdated information:
1. Fork this repository.
2. Create a new branch:  
   ```sh
   git checkout -b improve-docs
   ```
3. Make your edits.
4. Submit a Pull Request (PR) for review.

## 📄 Adding New Docs
To add new documentation:

1. Create a new .md file in the docs/ folder.
2. Update website/sidebar.json to include your new page.
3. Open a PR for review.

### Docusaurus Header

Each documentation file should begin with a **Docusaurus frontmatter block**, like:

```md
---
id: my-doc-id
title: My Document Title
sidebar_label: My Label
---
```
> For issues or ideas, open a [GitHub Issue](https://github.com/MozillaReality/hubs-docs/issues).

