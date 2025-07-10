# Hubs Docs

This repo is for the documentation for Hubs, and related products such as Community Edition and Spoke.

The documentation is under active development. If there are any changes or updates you recommend, feel free to submit a pull request or let us know in our [Discord Server](https://discord.gg/wHmY4nd).

This website was created with [Docusaurus](https://docusaurus.io/). 


# Docusaurus information 
## What's In This Document

* [Get Started in 5 Minutes](#get-started-in-5-minutes)
* [Directory Structure](#directory-structure)
* [Editing Content](#editing-content)
* [Adding Content](#adding-content)
* [Full Documentation](#full-documentation)
* [Custom Features](#custom-features)

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

## Custom Features

### Image/Video alignment

Images and videos can have their alignment customized by surrounding them in `<div>` tags that utilize one or more of the custom alignment CSS classes that have been added to `website/static/css/custom.css`.

For example:
```markdown
<div class="image-align-left">

![Example Image Alt Text](img/example_image.png)

</div>
```

Interior `<div>` tags will override exterior ones so you can give all images/videos a default alignment and then override it for specific ones.

For example:
```markdown
<div class="image-align-left">

![Example Image Alt Text 1](img/example_image1.png)

<div class="image-align-right">

![Example Image Alt Text 2](img/example_image2.png)

</div>

![Example Image Alt Text 3](img/example_image3.png)

</div>
```

> [!Note]
> Images/Videos may need to have their width reduced in order to be small enough to align.  You can reduce their width by adding `style="max-width: <your-width>"` to the enclosing `<div>` tag.  E.g. `<div class="video-align-left" style="max-width: 50%;">`

> [!Note]
> If you have a caption for an image/video, you may want to align it as well by adding the `text-align` property to the style part of your `<div>` tag.  E.g. `<div class="video-align-right" style="max-width: 50%; text-align: right;">`

The available alignment classes are as follows:
```
image-align-left
image-align-center
image-align-right

video-align-left
video-align-center
video-align-right
```
