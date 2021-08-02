const BASE_URL = '/ofi-blog/';

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
      copyright: `Copyright © ${new Date().getFullYear()} lebalz`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
    function hide_pagination(context, options) {
      return {
        name: 'hide-pagination',
        injectHtmlTags({ content }) {
          return {
            postBodyTags: [
              {
                tagName: 'script',
                attributes: {
                  charset: 'utf-8',
                  src: BASE_URL + 'js/hide_pagination.js',
                },
              }
            ],
          };
        },
      };
    },
    'docusaurus-plugin-sass',
  ],
  themes: ['docusaurus-live-brython']
};
