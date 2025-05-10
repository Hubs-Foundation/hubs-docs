---
id: github-workflows
title: GitHub Workflows
description: Continuous Integration rebuilds the containers used in the deployment of Hubs
---

## Custom Docker Build Push
In some repositories you will find a GitHub Workflow/Action named custom-docker-build-push for building custom docker images and pushing them to a docker/container registry of your choice.  Simply run this Action on any branch, with the appropriate details filled in (either through the predefined defaults or by the overrides), and you will end up with a docker image of that branch that can be used in any Community Edition instance.

The Action allows you almost complete control over where your docker images are sent and how they are tagged.  The details required for this to work can either be provided at runtime or by preset defaults that you set up.

### Options/Setup

The following properties can be configured/overridden.  Any values that are manually specified for that run will always be used.  Any fields not passed values will fall back on predefined variables/secrets (if they have been created).

Options:

* The branch the workflow will run on. [REQUIRED]
  - This has to be manually specified each time when running the Action.
* The registry base URL. [REQUIRED]
  - This is used to specify which docker/container registry to push to.
  - Common values include: `docker.io` for Docker Hub, and  `ghcr.io` for GitHub.  For other registries, check their documentation on what to put here.
  - Create a repository variable named `REGISTRY_BASE_URL` to set a default registry to use.
* The registry username. [REQUIRED]
  - The username of the account for the registry you want to push to.
  - Create a repository secret named `REGISTRY_USERNAME` to set a default username to use.
* The registry password. [REQUIRED]
  - The password of the account (or the access token) for the registry you want to push to.
  - Create a repository secret named `REGISTRY_PASSWORD` to set a default password/access token to use.
* The registry namespace. [REQUIRED]
  - This is often the same as the username, but some registries allow you to manually specify a namespace.
  - Create a repository variable named `REGISTRY_NAMESPACE` to set a default namespace to use.
* The image tag. [OPTIONAL]
  - This is basically the name of your image.
  - The default value of this is the branch name.
  - When the workflow is run, two images/tags will be pushed to the registry, one will be the `<image_tag_value>-latest` and the other will be the `<image_tag_value>-<action_run_number>`, e.g. `my-cool-branch-latest` and `my-cool-branch-42`
* The name of the Dockerfile [OPTIONAL]
  - This has been preset and you shouldn't need to change it unless you've changed the name/location of the Dockerfile in your code.  If you have changed the name/location of your Dockerfile you will need to specify this each and every time you run the Action or update the default in the GitHub workflow file.
* The code path. [OPTIONAL]
  - The path to the code you want built.  Used for only building a specific part of the repository.
  - This doesn't usually need to be filled/changed.
* The build cache.
  - Using the build cache will speed up subsequent builds of your images, but can sometimes cause problems with registries.
  - This is enabled by default, but if you run into problems building, you can disable it.  The build will be slower, but it should hopefully work.
  - Example error to watch out for: `buildx failed with: ERROR: failed to solve: error writing manifest blob: failed commit on ref "sha256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx": unexpected status from PUT request to https://xx.xxxxxxx.xxx/xx/namespace/repository/manifests/buildcache: 400`
