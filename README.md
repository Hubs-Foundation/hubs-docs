# Hubs Docs

This repository contains documentation for Hubs and related products such as Hubs Cloud, Spoke, and the Community Edition.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](https://discord.gg/wHmY4nd).

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

