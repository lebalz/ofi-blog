# OFI Blog

[OFI Blog](https://lebalz.github.io/ofi-blog)

## Styling

The `theme/classic` is used. It is build with [infima](https://infima.dev/).

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
Either
- Setup github actions to deploy your page on each push to the main branch.
- or setup a drone runner to build the project and deploy it to gh-pages.

### Custom Domain

- Add a `CNAME` File to the static directory
- Disable CLoudflare "DNS Proxy" temporarly
- Deploy
- Let Github generate SSL certificates for you
- Check "Enforce https:"
- Re-Enable DNS Proxy on Cloudflare again.

## Start Postgres on osx

```bash
postgres -D /usr/local/var/postgres
```


## Ejected Theme Components

Make sure to check the compatibility after a docusaurus upgrade:

| Component                                              | Swizzle                                                                           |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [DocVersionBadge](src/theme/DocVersionBadge/index.tsx) | `yarn run swizzle @docusaurus/theme-classic DocVersionBadge --eject --typescript` |
| [NavbarItem](src/theme/NavbarItem/index.tsx)           | `yarn run swizzle @docusaurus/theme-classic NavbarItem --eject --typescript`      |
| [NotFound (safe)](src/theme/NotFound.tsx)              | `yarn run swizzle @docusaurus/theme-classic NotFound --eject --typescript`        |

⚠️ If you change the baseUrl setting in `docusaurus.config.js`, then search for it in the project, to change all occurances!