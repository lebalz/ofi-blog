# EF Blog v24

# Abschlussjahrgang EF 2024

This branch is deployed in [EF Blog v24](https://github.com/lebalz/ef-blog-v24).
- remove unwanted versions from `versions.ts`
- update the `docusaurus.config.ts` to reflect the new version
- remove the versions from course list in `src/pages/index.tsx`
- update the doc-config
- build it with offline mode, domai `yarn run build`
- navigate to the build directory `cd build`
- initialize and push a git repo. make sure to add revealjs too (by deleting the .git folder of the submodule in the build directory...)

```bash
WITHOUT_DOCS="true" OFFLINE_MODE="true" DOMAIN="https://ef.24.gbsl.website" UMAMI_ID="26afa3d9-bc2f-4fe6-91ec-0ee486eb6aef" UMAMI_SRC="https://umami.gbsl.website/tell-me.js" NODE_OPTIONS="--max_old_space_size=12288" yarn run build
cd build
rm -rf p/reveal.js/.git

git init .
git add .
git commit -am "version EF Abschlussjahrgang 2024"
git remote add origin git@github.com:lebalz/ef-blog-v24.git
git branch -M main
git push -u -f origin main
```

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
