const BASE_URL = '/';

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

const GIT_COMMIT_SHA = process.env.DRONE_COMMIT_SHA || Math.random().toString(36).substring(7);
/** @return {import('@docusaurus/types').DocusaurusConfig} */
async function createConfig() {
  return {
    title: 'Informatik',    
    tagline: 'Gymnasium Biel Seeland',
    url: 'https://ofi.gbsl.website',
    baseUrl: BASE_URL,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'lebalz', // Usually your GitHub org/user name.
    projectName: 'ofi-blog', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    customFields: { 
      GIT_COMMIT_SHA: GIT_COMMIT_SHA,
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
        copyright: `<a class="footer__link-item" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"><img src="${BASE_URL}img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"> Text und Bilder von Balthasar Hofer, Ausnahmen sind gekennzeichnet. </a><br /><a class="badge badge--primary" href="https://github.com/lebalz/ofi-blog/commit/${GIT_COMMIT_SHA}"><i class="mdi mdi-source-commit mdi-rotate-90" /> ${GIT_COMMIT_SHA.substring(0, 7)}</a>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['bash', 'powershell', 'java', 'asm6502', 'ruby', 'csharp']
      },
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
            versions: {
              current: {
                label: 'Material',
                banner: 'none'
              },
              '25h': {
                banner: 'none'
              },
              '24w': {
                banner: 'none'
              },
              '26e': {
                banner: 'none'
              },
              '26P': {
                banner: 'none'
              },
              '24ef': {
                banner: 'none'
              }
            },
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
      },
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          // 0 disables this feature.
          // 1 indexes the direct parent category in the sidebar of a doc page
          // 2 indexes up to two nested parent categories of a doc page
          // 3...
          //
          // Do _not_ use Infinity, the value must be a JSON-serializable integer.
          indexDocSidebarParentCategories: 1,
  
  
          // whether to index blog pages
          indexBlog: false,
  
          // whether to index static pages
          // /404.html is never indexed
          indexPages: false,
          // language of your documentation, see next section
          language: "de",
          // setting this to "none" will prevent the default CSS to be included. The default CSS
          // comes from autocomplete-theme-classic, which you can read more about here:
          // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
          style: undefined,
  
        }
      ]
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
      {
        src: 'https://umami.gbsl.website/tell-me.js',
        ['data-website-id']: '8fc2386c-353f-487d-b58b-1e5c1f4301d7',
        ['data-domains']: 'ofi.gbsl.website',
        async: true,
        defer: true
      },
    ],
    themes: [
      '@docusaurus/theme-live-codeblock',
      'docusaurus-theme-frontmatter',
      '@docusaurus/theme-mermaid'
    ],
  }
}
module.exports = createConfig
