# Hubs Docs

This repository contains documentation for Hubs and related products such as Hubs Cloud, Spoke, and the Community Edition.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](https://discord.gg/wHmY4nd).

This website was created with [Docusaurus v3](https://docusaurus.io/).

## What's In This Document

* [Get Started in 5 Minutes](#get-started-in-5-minutes)
* [Directory Structure](#directory-structure)
* [Editing Content](#editing-content)
* [Adding Content](#adding-content)
* [Full Documentation](#full-documentation)
* [Contributing to Hubs Docs](#contributing-to-hubs-docs)
* [Docusaurus Header](#docusaurus-header)
* [Fixing Documentation](#fixing-documentation)
* [Local Development](#local-development)
* [Resources](#resources)

## Get Started in 5 Minutes

1. Install tooling:

We strongly recommend using [Node.js v24 or later](https://docs.hubsfoundation.org/beginners-guide-to-CE.html#1-download-and-install-nodejs), but v20 or v22 should work for now.
We strongly recommend using NPM v11.10.0 or later, but v10 should work for now.
TypeScript tools should work with v5.

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
    blog/
    node_modules/
    src/
    pages/
    static/
      css/
      img/
    docusaurus.config.js
    package.json
    package-lock.json
    sidebars.js
```

## Editing Content

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.mdx`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

See the [Markdown syntax guide](https://commonmark.org/help/) for the basics, then check [the differences MDX introduces](https://docusaurus.io/docs/next/markdown-features/react#markdown-and-jsx-interoperability) to avoid running into any gotchas.

The main things to watch out for are:
1. all tags must be closed, even void tags, for example: `<img src="foo.jpeg" alt="bar"/>`
2. left angle brackets that don't start a tag must be escaped with a backslash
3. left curly braces must be escaped with a backslash


### Editing an existing blog post

Edit blog posts by navigating to `website/blog` and editing the corresponding post:

`website/blog/post-to-be-edited.mdx`
```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, see [Adding a Blog in the Docusarus docs](https://docusaurus.io/docs/blog).

## Adding Content

### Adding a new docs page to an existing sidebar

1. Create the doc as a new MDX file in `/docs`, example `docs/newly-created-doc.mdx`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.js`:

```javascript
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'welcome',
        'intro-hubs',
        'intro-spoke',
        'newly-created-doc', // new doc here
  ...
}
```

For more information about adding new docs, see [Create a doc](https://docusaurus.io/docs/create-doc).

## Full Documentation

Full documentation can be found on the [Docusaurus website](https://docusaurus.io/docs).

## Contributing to Hubs Docs

We welcome contributions from the community! Here’s how you can help:

## 📄 Docusaurus Header

Every MDX file should begin with a Docusaurus header block. This is **not Markdown**, but frontmatter metadata used by Docusaurus in YAML format.

```yaml
---
id: my-doc-id
title: My Doc Title
description: A short description of the doc
sidebar_label: My Doc Label
---
```

Please **do not remove** or skip this header. The `id` should be unique, and the `description` is required.
If the description contains a colon, the description should be wrapped in quotes.

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

Make changes to `.mdx` files in the `docs/` directory. Remember to:

- Add a Docusaurus header at the top
- Write atomic commit messages (see [Commit Message Guidelines](https://github.com/Hubs-Foundation/policies-procedures-guidelines-public/blob/main/commit-message-guidelines.md))
Follow the [Markdown syntax guide](https://commonmark.org/help/) for the basics, then check [the differences MDX introduces](https://docusaurus.io/docs/next/markdown-features/react#markdown-and-jsx-interoperability) for additional functionality and to avoid running into any gotchas.

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
npm ci
npm run start
```

---

## 📚 Resources

- [Docusaurus Docs](https://docusaurus.io/docs)
- [Markdown Help](https://commonmark.org/help/)
- [Hubs Foundation GitHub](https://github.com/Hubs-Foundation)

