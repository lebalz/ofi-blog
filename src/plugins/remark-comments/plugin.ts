import { visit, SKIP } from 'unist-util-visit';
import type { Plugin, Processor, Transformer } from 'unified';
import type { MdxJsxFlowElement } from 'mdast-util-mdx';
import { BlockContent, Node, Parent, Strong } from 'mdast';


const plugin: Plugin = function plugin(
    this: Processor,
    optionsInput?: {
        tagName?: string;
        jsxTagNames?: {
            figure?: string;
            deflist?: string;
            detailsWrapper?: string;
        }
    }
): Transformer {
    const TAG_NAME = optionsInput?.tagName || 'comment';
    const JSX_TAG_MAP = {
        figure: optionsInput?.jsxTagNames?.figure || 'figure',
        deflist: optionsInput?.jsxTagNames?.deflist || 'dl',
        detailsWrapper: optionsInput?.jsxTagNames?.detailsWrapper || 'details'
    } as const;
    const JSX_TAG_MAP_REVERSE = Object.fromEntries(Object.entries(JSX_TAG_MAP).map(([k, v]) => [v, k]));
    return async (ast, vfile) => {
        const commentCounter = {
            paragraph: 0,
            table: 0,
            heading: 0,
            figure: 0,
            deflist: 0,
            detailsWrapper: 0
        }

        const relPath = (vfile.history[0] || '').replace(vfile.cwd || '', '');
        const skip = relPath.startsWith('/src/pages/');

        visit(ast,
            // test 
            (node, idx, parent) => {
                if (skip) {
                    return false;
                }
                if (!(node as any).children) {
                    return false;
                }
                const nodeWithChildren = node as unknown as Parent;
                let isCandidate = false
                if (['paragraph', 'table', 'heading'].includes(node.type)) {
                    isCandidate = true;
                }
                if (!isCandidate && node.type === 'mdxJsxFlowElement' && Object.values(JSX_TAG_MAP).includes((node as unknown as MdxJsxFlowElement).name)) {
                    isCandidate = true;
                }
                return isCandidate && !nodeWithChildren.children.some((child) => child.type === 'mdxJsxTextElement' && child.name === TAG_NAME);
            },
            // visitor
            (node, idx, parent: Parent) => {
                const nType = ['paragraph', 'table', 'heading'].includes(node.type) ? node.type : JSX_TAG_MAP_REVERSE[(node as unknown as MdxJsxFlowElement).name];
                const skipChildren = ['figure', 'deflist', 'detailsWrapper'].includes(nType);
                parent.children.splice(idx, 1, {
                    type: 'mdxJsxFlowElement',
                    name: 'div',
                    attributes: [
                        {
                            type: 'mdxJsxAttribute',
                            name: 'className',
                            value: 'commentable'
                        }
                    ],
                    children: [
                        node as BlockContent,
                        {
                            type: 'mdxJsxFlowElement',
                            name: 'Comment',
                            attributes: [
                                {
                                    type: 'mdxJsxAttribute',
                                    name: 'nr',
                                    value: {
                                        type: 'mdxJsxAttributeValueExpression',
                                        value: `${commentCounter[nType]}`,
                                        data: {
                                            estree: {
                                                type: 'Program',
                                                body: [
                                                    {
                                                        type: 'ExpressionStatement',
                                                        expression: {
                                                            type: 'Literal',
                                                            value: commentCounter[nType],
                                                            raw: `${commentCounter[nType]}`
                                                        }
                                                    }
                                                ],
                                                sourceType: 'module',
                                                comments: []
                                            }
                                        }
                                    }
                                },
                                {
                                    type: 'mdxJsxAttribute',
                                    name: 'type',
                                    value: nType
                                }
                            ],
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: "."
                                        }
                                    ]
                                }
                            ],
                            data: {
                                _mdxExplicitJsx: true
                            }
                        }
                    ],
                    data: {
                        _mdxExplicitJsx: true
                    }
                });

                if (nType in commentCounter) {
                    commentCounter[nType] += 1;
                }
                if (skipChildren) {
                    return SKIP
                }
            });
    }
}

export default plugin;