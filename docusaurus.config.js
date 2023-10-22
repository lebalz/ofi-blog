require('dotenv').config()
const fs = require('fs');
const path = require("path");
const math = require('remark-math');
const katex = require('rehype-katex');
const remarkMdi = require('remark-mdi');
const remarkDeflist = require('remark-deflist-simple');
const remarkKbd = require('remark-kbd-simple');
const remarkDetails = require('remark-details-simple');
const remarkUnderline = require('remark-underline');
const remarkImg2Fig = require('./src/plugins/remark-img2fig');
// const validateUuids = require('./src/plugins/validate-uuids');
const remarkFlex = require('./src/plugins/remark-flex');
const remarkLinks = require('./src/plugins/remark-links');
const remarkComments = require('./src/plugins/remark-comments');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EnsurePageId = require('./bin/ensure-page-id');

const admonitionConfig = {
  tag: ':::',
  keywords: ['note', 'tip', 'info', 'caution', 'danger', 'important', 'success', 'secondary', 'aufgabe', 'def', 'warning', 'warn', 'finding'],
};

const BASE_URL = '/';
const GIT_COMMIT_SHA = process.env.DRONE_COMMIT_SHA || Math.random().toString(36).substring(7);
const OFFLINE_MODE = process.env.OFFLINE_MODE || false;
const VERSIONS = {
    current: {
      label: 'Material',
      banner: 'none'
    }
};

if (!process.env.DOCS_ONLY) {
  ['26e', '26P', '24ef'].forEach(version => {
    VERSIONS[version] = {
      label: version,
      banner: 'none'
    }
  });
}

/** @type { (string
  | {
      src: string;
      [key: string]: string | boolean | undefined;
    }
)[]} */
const scripts = []

if (process.env.UMAMI_SRC && process.env.UMAMI_ID) {
  scripts.push(
    {
      src: process.env.UMAMI_SRC,
      ['data-website-id']: process.env.UMAMI_ID,
      ['data-domains']: (process.env.DOMAIN || 'http://localhost:3000').split('/').filter(w => !!w)[1],
      async: true,
      defer: true
    }
  )
}
  

/** @return {import('@docusaurus/types').DocusaurusConfig} */
async function createConfig() {
  return {
    title: 'Informatik',    
    tagline: 'Gymnasium Biel Seeland',
    url: process.env.DOMAIN || 'http://localhost:3000',
    baseUrl: BASE_URL,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'lebalz', // Usually your GitHub org/user name.
    projectName: process.env.GH_PROJECT || 'ofi-blog', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    customFields: {
      GIT_COMMIT_SHA: GIT_COMMIT_SHA,
      DOCS_ONLY: process.env.DOCS_ONLY || false,
      AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID || 'no-id',
      DOMAIN: process.env.DOMAIN || 'http://localhost:3000',
      OFFLINE_MODE: OFFLINE_MODE
    },
    i18n: {
      defaultLocale: 'de',
      locales: ['de'],
    },
    markdown: {
      mermaid: true,
    },  
    themeConfig: {
      mermaid: {
        theme: {light: 'default', dark: 'dark'},
      },
      docs: {
        sidebar: {
          hideable: true
        }
      },
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
          {to: 'news', label: 'News', position: 'left'},
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
                label: 'Troubleshooting Office 365',
                to: '/troubleshooting',
              },
              {
                label: 'Jupyterhub',
                to: 'https://jupyter.gbsl.website',
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
                to: 'https://gbsl.ch',
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
        copyright: `<a 
                      class="footer__link-item"
                      href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"
                    >
                      <img src="${BASE_URL}img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"> 
                      Text und Bilder von Balthasar Hofer, Ausnahmen sind gekennzeichnet. 
                    </a>
                    <br />
                    <a 
                      class="badge badge--primary"
                      href="https://github.com/lebalz/ofi-blog/commit/${GIT_COMMIT_SHA}"
                    >
                      <i class="mdi mdi-source-commit mdi-rotate-90"></i> ${GIT_COMMIT_SHA.substring(0, 7)}
                    </a>`
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['bash', 'powershell', 'java', 'asm6502', 'ruby', 'csharp']
      },
      algolia: OFFLINE_MODE ? undefined : {
        appId: process.env.ALGOLIA_APP_ID || "no-id",
        apiKey: process.env.ALGOLIA_API_KEY || "no-key",
        indexName: process.env.ALGOLIA_INDEX_NAME || "no-index",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      }
    },
    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: (params) => {
              if (params.version === 'current') {
                return `https://github.com/lebalz/ofi-blog/edit/main/${params.versionDocsDirPath}/${params.docPath}`
              }
              if (params.version === '24ef') {
                return 'https://github.com/lebalz/ofi-blog/tree/main/docs'
              }
            },
            path: 'docs',
            includeCurrentVersion: true,
            lastVersion: 'current',
            showLastUpdateTime: true,
            routeBasePath: '/',
            admonitions: admonitionConfig,
            versions: VERSIONS,
            beforeDefaultRemarkPlugins: [
              remarkKbd,
              remarkLinks,
              remarkImg2Fig,
              [remarkUnderline, { marker: '__', classNames: ['underline'], tagType: 'strong' }]
            ],
            remarkPlugins: [
              math,
              remarkDeflist,
              remarkMdi,
              [remarkDetails, { marker: ':::', tags: ['details'], classNameMap: { details: undefined } }],
              remarkFlex,
              remarkComments
            ],
            rehypePlugins: [katex],
          },
          pages: {
            admonitions: admonitionConfig,
            beforeDefaultRemarkPlugins: [
              remarkKbd,
              remarkLinks,
              remarkImg2Fig,
              [remarkUnderline, { marker: '__', classNames: ['underline'], tagType: 'strong' }]
            ],
            remarkPlugins: [
              math,
              remarkDeflist,
              remarkMdi,
              [remarkDetails, { marker: ':::', tags: ['details'], classNameMap: { details: undefined } }],
              remarkFlex,
              remarkComments
            ],
            rehypePlugins: [katex],
          },
          blog: false,
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
      '@saucelabs/theme-github-codeblock',
      './src/plugins/brython-source.js',
      [
        './src/plugins/blog-plugin.js',
        {
          blogTitle: 'News',
          routeBasePath: 'news',
          path: 'news',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          postsPerPage: 15,
          blogSidebarTitle: 'News',
          // Please change this to your repo.
          editUrl:
            'https://github.com/lebalz/ofi-blog/edit/main/',
          admonitions: admonitionConfig,
          beforeDefaultRemarkPlugins: [
            remarkKbd,
            remarkLinks,
            remarkImg2Fig,
            [remarkUnderline, { marker: '__', classNames: ['underline'], tagType: 'strong' }]
          ],
          remarkPlugins: [
            math,
            remarkDeflist,
            remarkMdi,
            [remarkDetails, { marker: ':::', tags: ['details'], classNameMap: { details: undefined } }],
            remarkFlex,
            remarkComments
          ],
          rehypePlugins: [katex]
        },
      ],
      // function (context, options) {
      //   return  {
      //     name: 'polyfills-for-react-live',
      //     configureWebpack(config, isServer, utils) {
      //       return {
      //         resolve: {
      //           alias: {
      //             path: require.resolve('path-browserify'),
      //           },
      //           fallback: {
      //             fs: false,
      //             url: require.resolve("url/"),
      //             os: require.resolve('os-browserify/browser'),
      //             util: require.resolve("util/"),
      //             assert: require.resolve("assert/"),
      //             stream: require.resolve("stream-browserify"),
      //             buffer: require.resolve("buffer/"),
      //             crypto: require.resolve("crypto-browserify"),
      //             constants: require.resolve("constants-browserify")
      //           }
      //         }
      //       }
      //     }
      //   }
      // },
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
          name: 'on-compile',
          configureWebpack(config, isServer, utils) {
            return {
              plugins: [
                {
                  apply: (compiler) => {
                    const cache = {};
                    compiler.hooks.watchRun.tap("Frontmatter-Plugin", () => {
                      if (process.env.NODE_ENV === 'development') {
                        if (compiler.modifiedFiles) {
                          compiler.modifiedFiles.forEach((f) => {
                            if (f.endsWith('.md') && !cache[f] && !f.includes('/versioned_docs/')) {
                              if (EnsurePageId(f)) {
                                console.log('Added Frontmatter to', f);
                              }
                              cache[f] = true;
                            }
                          });
                        }
                        if (compiler.removedFiles) {
                          compiler.removedFiles.forEach((f) => {
                            if (f.endsWith('.md')) {
                              delete cache[f]
                            }
                          })
                        }
                      }
                    });
                  },
                },
              ]
            }
          }
        }
      },
      // function (context, options) {
      //   return {
      //     name: 'watch-presentations',
      //     getPathsToWatch() {
      //       const staticPath = path.resolve(context.siteDir, 'static');
      //       return [`${staticPath}/p/*.{md, html}`];
      //     }
      //   };
      // },
      // function (context, options) {
      //   return {
      //     name: 'watch-presentations',
      //     configureWebpack(config, isServer, utils) {
      //       return {
      //         devServer: {
      //           watchFiles: ['presentations/**/*'],
      //           // watchFiles: {
      //           //   paths: [path.join(__dirname, 'static/p/**/*.js'), path.join(__dirname, 'static/p/**/*.md'), path.join(__dirname, 'static/p/**/*.html'), path.join(__dirname, 'static/p/**/*.css'), path.join(__dirname, 'static/p/**/*.scss')],
      //           //   // options: {
      //           //   //   cwd: '.'
      //           //   // }
      //           // },
      //           // static: {
      //           //   directory: path.join(__dirname, 'static'),
      //           // }
      //         },
      //       };
      //     },
      //   };
      // },
      function (context, options) {
        return {
          name: 'pdf-src-loader',
          configureWebpack(config, isServer, utils) {
            return {
              module: {
                rules: [
                  {
                    test: /canvas/,
                    use: 'null-loader'
                  },
                ],
              },
            };
          },
        };
      },
      function (context, options) {
        return {
          name: 'pdf-cmaps',
          configureWebpack(config, isServer, utils) {
            return {
              plugins: [
                new CopyWebpackPlugin({
                  patterns: [
                    // pdf-cmaps
                    {
                      from: 'node_modules/pdfjs-dist/cmaps/',
                      to: 'cmaps/'
                    },
                    // radial color picker cmaps
                    {
                      from: 'node_modules/@radial-color-picker/react-color-picker/dist/react-color-picker.min.css.map',
                      to: './static/'
                    }
                  ]
                }),
              ]
            };
          },
        };
      }
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
        integrity:
          'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
        crossorigin: 'anonymous',
      },
    ],
    scripts: [
      // Object format.
      ...scripts,
    ],
    themes: [
      '@docusaurus/theme-live-codeblock',
      'docusaurus-theme-frontmatter',
      '@docusaurus/theme-mermaid'
    ],
  }
}
module.exports = createConfig
