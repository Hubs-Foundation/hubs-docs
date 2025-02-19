# Hubs Docs

This repository contains documentation for Hubs and related products, including Hubs Cloud and Spoke. It provides guides for developers, contributors, and users on setting up, customizing, and troubleshooting Hubs.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](http://discord.gg/wHmY4nd).

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

