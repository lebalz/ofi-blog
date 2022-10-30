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
const admonitions = require('@lebalz/remark-admonitions');
const remarkLinks = require('./src/plugins/remark-links');
const remarkComments = require('./src/plugins/remark-comments');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EnsurePageId = require('./bin/ensure-page-id');


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
        copyright: `<a class="footer__link-item" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"><img src="${BASE_URL}img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"> Text und Bilder von Balthasar Hofer, Ausnahmen sind gekennzeichnet.</a>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['powershell', 'java', 'asm6502', 'ruby', 'csharp']
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
            admonitions: false,
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
              [admonitions, {
                customTypes: {
                  aufgabe: {
                    ifmClass: "info",
                    keyword: "info",
                    emoji: "🖋",
                    svg: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>'
                  },
                  finding: {
                    ifmClass: "warning",
                    keyword: "finding",
                    emoji: "💡",
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" ><path fillRule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg>'
                  },
                  def: {
                    keyword: "def",
                    ifmClass: "info",
                    emoji: "&#f1c9",
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-code" class="svg-inline--fa fa-file-code fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"></path></svg>'
                  }
                }
              }],
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
            [admonitions, {
              customTypes: {
                aufgabe: {
                  ifmClass: "info",
                  keyword: "info",
                  emoji: "🖋",
                  svg: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>'
                },
                finding: {
                  ifmClass: "warning",
                  keyword: "finding",
                  emoji: "💡",
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" ><path fillRule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg>'
                },
                def: {
                  keyword: "def",
                  ifmClass: "info",
                  emoji: "&#f1c9",
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-code" class="svg-inline--fa fa-file-code fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"></path></svg>'
                }
              }
            }],
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
