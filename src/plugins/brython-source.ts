import { Plugin } from "@docusaurus/types";

const plugin: Plugin = (context, options) => {
    return {
        name: 'brython-source',
        injectHtmlTags({ content }) {
            const remoteHeadTags = content ? content.remoteHeadTags : [];
            const brython_pips = [];
            ([
                '/libs/config.py',
                '/libs/brython_runner.py',
                '/libs/game.py',
                '/libs/grid.py',
                '/libs/py_back_trace.py',
            ]).forEach(lib => {
                const moduleName = lib.split('/').pop().split('.').shift();
                brython_pips.push(
                    {
                        tagName: 'script',
                        attributes: {
                            src: lib,
                            type: 'text/python',
                            id: moduleName,
                            cache: 'true',
                            async: true,
                            defer: true,
                        },
                    }
                );
            });
            return {
                headTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            // src: "https://raw.githack.com/brython-dev/brython/master/www/src/brython.js",
                            // crossorigin: "anonymous",
                            src: "https://cdn.jsdelivr.net/npm/brython@3.12.1/brython.min.js",
                            referrerpolicy: "no-referrer"
                        },
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            // src: "https://raw.githack.com/brython-dev/brython/master/www/src/brython_stdlib.js",
                            // crossorigin: "anonymous",
                            src: "https://cdn.jsdelivr.net/npm/brython@3.12.1/brython_stdlib.js",
                            referrerpolicy: "no-referrer"
                        },
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            // src: "https://raw.githack.com/brython-dev/brython/master/www/src/brython.js",
                            // crossorigin: "anonymous",
                            src: '/cowsay.brython.js',
                            referrerpolicy: "no-referrer"
                        },
                    },
                    ...brython_pips,
                    ...remoteHeadTags,
                ],
            };
        }
    }

}

export default plugin;