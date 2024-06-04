# OFI Blog

[![Build Status](https://drone.gbsl.website/api/badges/lebalz/ofi-blog/status.svg)](https://drone.gbsl.website/lebalz/ofi-blog)

[OFI Blog](https://lebalz.github.io/ofi-blog)

## Styling

The `theme/classic` is used. It is build with [infima](https://infima.dev/).


## Installation

To build [canvas]() you need libcairo and some other build tools:

```bash
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
```

```bash
yarn install
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
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
- Check "Enforce https"
- Re-Enable DNS Proxy on Cloudflare again

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

⚠️ If you change the baseUrl setting in `docusaurus.config.ts`, then search for it in the project, to change all occurances!
