const visit = require("unist-util-visit");
const path = require('path');
const fs = require('fs-extra');
const { parseOptions, cleanedText } = require('./helpers');

const SPACER_SPAN = {
    type: 'span',
    data: {
        hName: 'span',
        hProperties: {
            style: { flexGrow: 1 }
        }
    }
};


/**
 * Supported config annotations:
 * @option --size
 * @option --width
 * @option --height
 */



/**
 * ^!\[(.*)\]\((\S+?)([^\S\r\n]+.*?)?\)
 * ^                                        start of line
 *  !\[                                     md image starts with ![
 *     (.*)                                 group1: alt
 *         \]\(                             match ](
 *             (\S+?)                       group2: image url
 *                   (                      group3: image title (match as few as possible,
 *                                                  until first closing bracket! 
 *                                                  better not use brackets in title :/)
 *                    [^\S\r\n]+            any white space characters except newlines
 *                              .*?)?       end of group3
 *                                   \)     finish the md image
 * 
 */
const regex = /^!\[(.*)\]\((\S+?)([^\S\r\n]+.*?)?\)/;
// passed to unified.use()
// you have to use a named function for access to `this` :(
function attacher(options) {
    function figure(eat, value, silent) {
        const match = value.match(regex);
        if (!match) {
            return
        }
        const startPosition = match.index;
        const stopPosition = startPosition + match[0].length;
        if (silent) {
            return true
        }

        const tag = value.slice(startPosition, stopPosition)
        const alt = match[1];
        const altText = cleanedText(alt) || '';
        const cssOptions = parseOptions(alt, true);
        const src = match[2];
        const title = (match[3] || '').trim();
        const children = [
            {
                type: 'image',
                title: title,
                url: src,
                alt: alt,
            }
        ]
        if (altText) {
            children.push(
                {
                    type: 'element',
                    data: {
                        hName: 'figcaption'
                    },
                    children: this.tokenizeInline(altText, { line: 0, column: 0 })
                }
            )
        }
        return eat(tag)({
            type: 'figure',
            children: children,
            data: {
                hName: 'Figure',
                hProperties: {
                    options: cssOptions
                }
            }
        })
    }

    // add tokenizer to parser after fenced code blocks
    const Parser = this.Parser.prototype;
    Parser.inlineTokenizers.figure = figure;
    figure.locator = (value, from) => {
        const m = value.slice(from).match(regex)?.index;
        if (m) {
            return m + from;
        }
        return -1;
    };
    // rule must be inserted before linking!
    Parser.inlineMethods.splice(
        Parser.inlineMethods.indexOf('link'),
        0,
        'figure'
    );
    return function transformer(tree, file) {
        const filePath = file.history[0];
        const dir = path.dirname(filePath);
        // escape everything except flexHTML nodes
        visit(
            tree,
            'figure',
            function visitor(node, idx, parent) {
                const imgNode = node.children[0];
                const ext = path.extname(imgNode.url);
                const bibFile = path.resolve(dir, imgNode.url.replace((new RegExp(`${ext}$`)), '.json'));
                let bib;
                if (fs.existsSync(bibFile)) {
                    bib = require(bibFile);
                    const bibElement =
                    {
                        type: 'element',
                        data: {
                            hName: 'SourceRef',
                            hProperties: {
                                bib: bib
                            }
                        }
                    };
                    if (node.children.length > 1) {
                        node.children[1].children = [
                            SPACER_SPAN,
                            ...node.children[1].children,
                            SPACER_SPAN,
                            bibElement
                        ]
                    } else {
                        node.children.push(
                            {
                                type: 'element',
                                data: {
                                    hName: 'figcaption'
                                },
                                children: [bibElement]
                            }
                        )
                    }
                } else if (node.children.length > 1) {
                    node.children[1].children = [
                        SPACER_SPAN,
                        ...node.children[1].children,
                        SPACER_SPAN
                    ]
                }


                // unwrap figures inside paragraphs...
                if (parent.type === 'paragraph') {
                    parent.type = 'figure';
                    parent.children = node.children;
                    parent.data = node.data;
                }
                return node;
            }
        );
    };
}

module.exports = attacher;