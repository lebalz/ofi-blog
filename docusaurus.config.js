const BASE_URL = '/';

const visit = require("unist-util-visit");
const path = require("path");
const fs = require("fs")

const remarkAuthorInfos = () => {
  const transformer = (root, file) => {
    const dir = path.dirname(file.history[0]);
    visit(root, "image", (node) => {
      if (node.url) {
        const ext = path.extname(node.url);
        const bibFile = path.resolve(dir, node.url.replace((new RegExp(`${ext}$`)), '.json'))
        if (fs.existsSync(bibFile)) {
          const bib = require(bibFile);
          node.title = `Author: ${bib.author} @ ${bib.licence}${bib.edited ? ', Bearbeitet' : ''}`
        }
      }
    });
  };
  return transformer;
};

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
  trailingSlash: true,
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
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
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
              }
            }
          },
          beforeDefaultRemarkPlugins: [remarkAuthorInfos],
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
    // function (context, options) {
    //   return {
    //     name: 'test-loader',
    //     configureWebpack(config, isServer, utils) {
    //       return {
    //         module: {
    //           rules: [
    //             {
    //               test: /\.mdx?$/,
    //               use: [
    //                 {
    //                   loader: path.join(__dirname, './plugins/img-loader/img-loader'),
    //                   options: {
    //                     siteDir: context.siteDir
    //                   }
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       }
    //     }
    //   }
    // },
    // function hide_pagination(context, options) {
    //   return {
    //     name: 'hide-pagination',
    //     injectHtmlTags({ content }) {
    //       return {
    //         postBodyTags: [
    //           {
    //             tagName: 'script',
    //             attributes: {
    //               charset: 'utf-8',
    //               src: BASE_URL + 'js/hide_pagination.js',
    //             },
    //           }
    //         ],
    //       };
    //     },
    //   };
    // },
  ],
  themes: ['docusaurus-live-brython']
};
