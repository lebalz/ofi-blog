const BASE_URL = '/';

const path = require("path");
const math = require('remark-math');
const katex = require('rehype-katex');
const transformImage = require('./src/plugins/transform-images');
// const validateUuids = require('./src/plugins/validate-uuids');
const remarkFlex = require('./src/plugins/remark-flex');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OF Informatik',
  tagline: 'Gymnasium Biel Seeland',
  url: 'https://lebalz.github.io',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lebalz', // Usually your GitHub org/user name.
  projectName: 'ofi-blog', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Informatik',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'playground',
          position: 'left',
          label: 'Playground'
        },
        {
          to: 'login',
          position: 'right',
          label: '🔑'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tools',
          items: [
            {
              label: 'VS Code',
              to: 'https://code.visualstudio.com/'
            },
            {
              label: 'Python',
              to: 'https://www.python.org/'
            }
          ]
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Jupyterhub',
              to: 'https://jupyter.gbsl.website',
            },
            {
              label: 'Learningview',
              to: 'https://learningview.org/loginWithMicrosoft.php',
            }
          ],
        },
        {
          title: 'Gymnasium',
          items: [
            {
              label: 'Passwort Zurücksetzen',
              to: 'https://password.edubern.ch/'
            },
            {
              label: 'Office 365',
              to: 'https://office.com',
            },
            {
              label: 'GBSL',
              to: 'https://gbsl.website',
            },
            {
              label: 'Intranet',
              to: 'https://erzbe.sharepoint.com/sites/GYMB/gbs'
            },
            {
              label: 'Stundenplan',
              to: 'https://mese.webuntis.com/WebUntis/?school=gym_Biel-Bienne#/basic/main',
            },
          ],
        }
      ],
      copyright: `<a class="footer__link-item" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"><img src="${BASE_URL}img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"> Text und Bilder von Balthasar Hofer, Ausnahmen sind gekennzeichnet.</a>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/lebalz/ofi-blog/edit/main/',
          path: 'docs',
          includeCurrentVersion: true,
          lastVersion: 'current',
          showLastUpdateTime: true,
          routeBasePath: '/',
          versions: {
            current: {
              label: 'Material',
              banner: 'none'
            },
            '24f': {
              banner: 'none'
            },
            '24i': {
              banner: 'none'
            },
            '24L': {
              banner: 'none'
            },
            '24K': {
              banner: 'none'
            },
            '24o': {
              banner: 'none'
            },
            '25h': {
              banner: 'none'
            }
          },
          admonitions: {
            customTypes: {
              aufgabe: {
                ifmClass: "info",
                keyword: "info",
                emoji: "🖋",
                svg: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>'
              },
              def: {
                keyword: "def",
                ifmClass: "info",
                emoji: "&#f1c9",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-code" class="svg-inline--fa fa-file-code fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"/></svg>'
              }
            }
          },
          beforeDefaultRemarkPlugins: [transformImage],
          remarkPlugins: [math, remarkFlex],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./node_modules/react-image-gallery/styles/css/image-gallery.css')
          ]
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './src/plugins/brython-source.js',
    function (context, options) {
      return {
        name: 'raw-src-loader',
        configureWebpack(config, isServer, utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.raw\.*/,
                  type: 'asset/source'
                },
              ],
            },
          };
        },
      };
    },
    function (context, options) {
      return {
        name: 'watch-presentations',
        getPathsToWatch() {
          const staticPath = path.resolve(context.siteDir, 'static');
          return [`${staticPath}/p/*.{md, html}`];
        }
      };
    },
  ],
  themes: [
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
};
