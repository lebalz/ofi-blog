import { visit } from 'unist-util-visit';
import type { Plugin, Processor, Transformer } from 'unified';
import type { MdxJsxTextElement, MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx';
import type { TextDirective } from 'mdast-util-directive';
import { Link, Parent, PhrasingContent, Strong } from 'mdast';
import type { } from 'mdast-util-mdx';
import { requireDefaultMdastNode, transformAttributes } from '../helpers';

const DEFAULT_DIRECTIVES = {
    button: {
        name: 'btn',
        className: 'button'
    }
}

const wrapInSpan = (children: any[]) => {
    return {
        type: 'mdxJsxTextElement',
        name: 'span',
        attributes: [],
        children,
        data: { '_mdxExplicitJsx': true }
    } as MdxJsxTextElement;
}

const plugin: Plugin = function plugin(
    this: Processor,
    optionsInput?: {
        directives?: {
            button?: {
                name?: string;
                className?: string;
            }
        };
    }
): Transformer {
    const opts = {
        button: {
            ...DEFAULT_DIRECTIVES.button,
            ...(optionsInput?.directives?.button || {})
        }
    };

    return async (ast, vfile) => {
        visit(ast, (node, idx, parent: Parent) => {
            if (node.type !== 'textDirective') {
                return;
            }
            const directive = node as unknown as TextDirective;
            const { className, attributes, style } = transformAttributes(directive.attributes || {});
            let clsx = className || 'primary';
            let newNode: PhrasingContent | MdxJsxFlowElement = directive.children[0];
            switch (directive.name) {
                case opts.button.name:
                    ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link', 'active', 'outline', 'sm', 'lg', 'block'].forEach((ifmBtnClsx) => {
                        if (clsx.match(RegExp(`(^|\s+)${ifmBtnClsx}(\s+|$)`))) {
                            clsx = clsx.replace(ifmBtnClsx, `button--${ifmBtnClsx}`);
                        }
                    });
                    clsx = `${opts.button.className} ${clsx}`.trim();
                    if (directive.children.length > 1) {
                        newNode = wrapInSpan(directive.children);
                    } else if (directive.children.length === 1) {
                        newNode = directive.children[0];
                    } else {
                        throw new Error(`Button directive must have at least one child`);
                    }
                    break;
                default:
                    return;
            }
            /** add classes or wrap inside span */
            if (!('attributes' in newNode && Array.isArray(newNode.attributes))) {
                if (newNode.type === 'link') {
                    const src = (newNode as Link).url;
                    const isAbsolute = /https?:\/\//.test(src) || src.startsWith('pathname://') || src.startsWith('/')
                    newNode = {
                        type: 'mdxJsxFlowElement',
                        name: 'a',
                        attributes: [
                            isAbsolute ? {
                                type: 'mdxJsxAttribute',
                                name: 'href',
                                value: src
                            } : requireDefaultMdastNode('href', src.startsWith('.') ? src : `./${src}`),
                            {
                                type: 'mdxJsxAttribute',
                                name: 'target',
                                value: '_blank'
                            },
                            {
                                type: 'mdxJsxAttribute',
                                name: 'rel',
                                value: 'noopener noreferrer'
                            }
                        ],
                        children: (newNode as Link).children,
                        data: {
                            _mdxExplicitJsx: true
                        }
                    } as MdxJsxFlowElement;
                } else {
                    newNode = wrapInSpan([newNode]);
                }
            }
            const current = (newNode as MdxJsxTextElement).attributes.find((attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'className');
            if (current) {
                current.value = [...new Set(`${current.value} ${clsx}`.trim().split(/\s+/))].join(' ');
            } else {
                (newNode as MdxJsxTextElement).attributes.push({ type: 'mdxJsxAttribute', name: 'className', value: clsx });
            }
            parent.children.splice(idx, 1, newNode);
        });
    }
}

export default plugin;