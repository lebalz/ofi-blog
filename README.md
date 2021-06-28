# OFI Blog

[OFI Blog](https://lebalz.github.io/ofi-blog)

## New Documentation

Add or edit new docs in [docs/](). This will have effect to all different "Versions" since their versions are only simlinked.

### Enable docs to a course

To enable specific docs to a course, either add manually a symlink, or call the bash script [bin/enable](bin/enable).

E.g. to enable the contents of [docs/byod_basics] for the course 24i:

```sh
bin/enable byod_basics 24i
```

### Disable docs from a course

To disable docs from a course, either remove the simlink manually, or call the bash script [bin/disable](bin/disable):

E.g. to disable the contents of [docs/byod_basics] for the course 24i:

```sh
bin/disable byod_basics 24i
```

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
