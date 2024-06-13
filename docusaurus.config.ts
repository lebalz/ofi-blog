import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import type { VersionOptions } from '@docusaurus/plugin-content-docs';
const { themes } = require('prism-react-renderer');
import 'dotenv/config'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// const remarkLinks = require('./src/plugins/remark-links');
// const remarkComments = require('./src/plugins/remark-comments');
const CopyWebpackPlugin = require('copy-webpack-plugin');
import { ensurePageId } from './bin/ensure-page-id';
import mdiPlugin from './src/plugins/remark-mdi/plugin';
import kbdPlugin from './src/plugins/remark-kbd/plugin';
import defPlugin from './src/plugins/remark-defbox/plugin';
import flexCardsPlugin from './src/plugins/remark-flex-cards/plugin';
import imagePlugin from './src/plugins/remark-images/plugin';
import deflistPlugin from './src/plugins/remark-deflist/plugin';
import strongPlugin from './src/plugins/remark-strong/plugin';
import detailsPlugin from './src/plugins/remark-details/plugin';
import commentsPlugin, { IGNORED_TAGS_DEFAULT } from './src/plugins/remark-comments/plugin';
import pdfPlugin from './src/plugins/remark-pdf/plugin';
import mediaPlugin from './src/plugins/remark-media/plugin';
import remarkInlineModifier from './src/plugins/remark-inline-modifier/plugin';
import { mdiSourceCommit } from '@mdi/js';


const BASE_URL = '/';
const GIT_COMMIT_SHA = process.env.DRONE_COMMIT_SHA || Math.random().toString(36).substring(7);
const OFFLINE_MODE = process.env.OFFLINE_MODE || false;


const VERSIONS: { [version: string]: VersionOptions } = {
    current: {
        label: 'Material',
        banner: 'none'
    }
};

if (!process.env.DOCS_ONLY) {
    ['24ef'].forEach(version => {
        VERSIONS[version] = {
            label: version,
            banner: 'none'
        }
    });
}


const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

const REMARK_PLUGINS = {
    beforeDefaultRemarkPlugins: [
        flexCardsPlugin,
        [
            imagePlugin,
            { tagNames: { sourceRef: 'SourceRef', figure: 'Figure' } }
        ],
        detailsPlugin,
        defPlugin
    ],
    remarkPlugins: [
        /** commentsPlugin must be the first plugin (will be applied last) */
        commentsPlugin,
        [strongPlugin, { className: 'boxed'}],
        [
            deflistPlugin,
            {
                tagNames: {
                    dl: 'Dl',
                },
            }
        ],
        [
            mdiPlugin,
            {
                colorMapping: {
                    green: 'var(--ifm-color-success)',
                    red: 'var(--ifm-color-danger)',
                    orange: 'var(--ifm-color-warning)',
                    yellow: '#edcb5a',
                    blue: '#3578e5',
                    cyan: '#01f0bc'
                },
                defaultSize: '1.25em'
            }
        ],
        kbdPlugin,
        remarkMath,
        pdfPlugin,
        mediaPlugin,
        remarkInlineModifier
    ],
    rehypePlugins: [
        rehypeKatex
    ]

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



const config: Config = {
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
        OFFLINE_MODE: OFFLINE_MODE,
        /** Use Testuser in local dev: set TEST_USERNAME to the test users email adress*/
        TEST_USERNAME: process.env.TEST_USERNAME
    },
    i18n: {
        defaultLocale: 'de',
        locales: ['de'],
    },
    markdown: {
        mermaid: true,
        mdx1Compat: {
            admonitions: false,
            comments: false,
            headingIds: false
        }
    },
    themeConfig: {
        mermaid: {
            theme: { light: 'default', dark: 'dark' },
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
                { to: 'news', label: 'News', position: 'left' },
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
                      <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png" alt="CC-BY-NC-SA"> 
                      Text und Bilder von Balthasar Hofer, Ausnahmen sind gekennzeichnet. 
                    </a>
                    <br />
                    <a 
                      class="badge badge--primary"
                      href="https://github.com/lebalz/ofi-blog/commit/${GIT_COMMIT_SHA}"
                    >
                        <svg viewBox="0 0 24 24" role="presentation" style="width: 0.9rem; height: 0.9rem; transform: translateY(15%) rotate(90deg); transform-origin: center center;"><path d="${mdiSourceCommit}" style="fill: currentcolor;"></path></svg> ${GIT_COMMIT_SHA.substring(0, 7)}
                    </a>`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['bash', 'powershell', 'css', 'java', 'armasm', 'ruby', 'csharp']
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
    } satisfies Preset.ThemeConfig,
    staticDirectories: [
        'static'
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: 'sidebars.ts',
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
                    admonitions: {
                        keywords: ['aufgabe', 'finding'],
                        extendDefaults: true,
                    },
                    versions: VERSIONS,
                    beforeDefaultRemarkPlugins: REMARK_PLUGINS.beforeDefaultRemarkPlugins,
                    remarkPlugins: REMARK_PLUGINS.remarkPlugins,
                    rehypePlugins: REMARK_PLUGINS.rehypePlugins,
                },
                pages: {
                    admonitions: {
                        keywords: ['aufgabe', 'finding'],
                        extendDefaults: true,
                    },
                    beforeDefaultRemarkPlugins: REMARK_PLUGINS.beforeDefaultRemarkPlugins,
                    remarkPlugins: REMARK_PLUGINS.remarkPlugins,
                    rehypePlugins: REMARK_PLUGINS.rehypePlugins,                    
                },
                blog: {
                    blogTitle: 'News',
                    routeBasePath: 'news',
                    path: 'news',
                    showReadingTime: true,
                    blogSidebarCount: 'ALL',
                    postsPerPage: 15,
                    blogSidebarTitle: 'News',
                    editUrl: 'https://github.com/lebalz/ofi-blog/edit/main/',
                    admonitions: {
                        keywords: ['aufgabe', 'finding'],
                        extendDefaults: true,
                    },
                    beforeDefaultRemarkPlugins: REMARK_PLUGINS.beforeDefaultRemarkPlugins,
                    remarkPlugins: REMARK_PLUGINS.remarkPlugins.slice(1),
                    rehypePlugins: REMARK_PLUGINS.rehypePlugins,
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.scss'),
                        require.resolve('./node_modules/react-image-gallery/styles/css/image-gallery.css')
                    ]
                },
                sitemap: {
                    priority: 0.5,
                    ignorePatterns: ['/secure/**'],
                    filename: 'sitemap.xml',
                }
            } satisfies Preset.Options,
        ],
    ],
    plugins: [
        'docusaurus-plugin-sass',
        '@saucelabs/theme-github-codeblock',
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
                                                        if (ensurePageId(f)) {
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
        '@docusaurus/theme-mermaid',
        'docusaurus-live-brython'
    ],
}

export default config;