const visit = require("unist-util-visit");
const { parseOptions } = require('./helpers');

const NEWLINE = "\n";

// escape regex special characters
function escapeRegExp(s) {
    return s.replace(new RegExp(`[-[\\]{}()*+?.\\\\^$|/]`, "g"), "\\$&");
}

const MD_IMAGE_REGEX = /^!\[.*?\]\(.*?\)/;
const MIN_WIDTH = '50px';

// create a node that will compile to HTML
const element = (tagName, classes = [], children = [], style = {}) => {
    const hProperties = { style: style }
    if ('classes' in style) {
        classes.push(...style.classes);
        delete style.classes;
    }
    if (classes.length > 0) {
        hProperties.className = classes;
    }
    return {
        type: 'flexHTML',
        data: {
            hName: tagName,
            hProperties: hProperties
        },
        children: children
    };
};

const ALIASES = {
    width: 'minWidth',
    min: 'minWidth',
    align: 'alignItems',
    grow: 'flexGrow',
    cols: 'columns',
    basis: 'flexBasis',
    justify: 'justifyContent',
    class: 'className',
    classes: 'className'
};

const parseFlexOptions = (config) => {
    const css = parseOptions(
        config,
        true,
        ALIASES
    );

    if (!('classes' in css)) {
        css.classes = [];
    }

    if ('className' in css) {
        const klasses = css['className'].split(/[,;]/g)
        css.classes.push(...klasses);
        delete config['className'];
    }

    if (!('flexBasis' in css)) {
        const { columns, minWidth, gap } = css;
        const cols = columns ? Number.parseInt(columns, 10) : undefined;
        if (cols && minWidth) {
            css.flexBasis = `max(${minWidth}, ${100 / cols}% - calc(${cols-1} * ${gap || '0.4em'}))`;
            delete css.columns;
            delete css.minWidth;
        } else if (cols) {
            css.flexBasis = `max(${MIN_WIDTH}, ${100 / cols}% - calc(${cols-1} * ${gap || '0.4em'}))`;
            delete css.columns;
        } else if (minWidth) {
            css.flexBasis = minWidth;
            delete css.minWidth;
        }
    }
    return css;
}

/**
 * @param {{[key: string]: string}} css
 */
const extractItemStyle = (css) => {
    const itemStyle = {};
    ['flexBasis', 'flexGrow'].forEach((key) => {
        if (key in css) {
            itemStyle[key] = css[key];
            delete css[key]
        }
    });
    return itemStyle
}


/**
 * 
 * @param {string} text 
 * @returns 
 */
const parseFlexItemOptions = (text = undefined, defaultClass = undefined) => {
    const opts = { classes: [], style: {}, noDefaultClass: false };
    if (!text) {
        if (defaultClass) {
            opts.classes.push(defaultClass)
        }
        return opts;
    }
    const config = parseFlexOptions(text);
    ['code'].forEach((k) => {
        if (k in config) {
            if (config[k]) {
                opts.classes.push('card__image', 'code__card');
            }
            delete config[k];
        }
    });
    ['noFlex'].forEach((k) => {
        if (k in config) {
            if (config[k]) {
                opts.classes.push(k);
            }
            delete config[k];
        }
    });
    ['empty', 'spacer', 'placeholder'].forEach((k) => {
        if (k in config) {
            if (config[k]) {
                opts.noDefaultClass = true;
                opts.classes.push('empty');
            }
            delete config[k];
        }
    });
    opts.style = config;

    if (defaultClass && !opts.noDefaultClass) {
        opts.classes.push(defaultClass)
    }
    return opts;
}

const DEFAULT_ITEM = { cards: 'card__body' }

// passed to unified.use()
// you have to use a named function for access to `this` :(
function attacher(options) {

    // match to determine if the line is an opening tag
    const keywords = ['cards', 'flex']
        .map(escapeRegExp)
        .join("|");
    const tag = escapeRegExp(':::');
    const regex = new RegExp(`${tag}(${keywords})(?: *(.*))?\n`);
    const escapeTag = new RegExp(escapeRegExp(`\\:::`), "g");

    // the tokenizer is called on blocks to determine if there is a flexbox block present and create tags for it
    function blockTokenizer(eat, value, silent) {
        // stop if no match or match does not start at beginning of line
        const match = regex.exec(value);
        if (!match || match.index !== 0) {
            return false;
        }
        // if silent return the match
        if (silent) return true;

        const now = eat.now();
        const [opening, keyword, config] = match;
        const food = [];
        const wrapperStyle = parseFlexOptions(config);
        const itemStyle = extractItemStyle(wrapperStyle);
        const content = [{ content: [], options: parseFlexItemOptions(undefined, DEFAULT_ITEM[keyword]) }];

        // consume lines until a closing tag
        let idx = 0;
        let level = 0;
        while ((idx = value.indexOf(NEWLINE)) !== -1) {
            // grab this line and eat it
            const next = value.indexOf(NEWLINE, idx + 1);
            const line =
                (next !== -1) ? value.slice(idx + 1, next) : value.slice(idx + 1);
            food.push(line);
            value = value.slice(idx + 1);

            // keep track of nested opening tags
            if (/^:::\s*\S+/.test(line)) {
                level += 1;
            }

            if (/^:::\s*$/.test(line)) {
                if (level === 0) {
                    // the closing tag is NOT part of the content
                    break;
                }
                // a nested block was closed
                level -= 1;
            }
            // the divider tag *** is NOT part of the content
            if (level === 0 && /^\*\*\*\s*(?<style>\S+)?/.test(line)) {
                // check if this is the config of the first item
                if (content.length === 1 && content[0].content.length === 0) {
                    content[content.length - 1].options = parseFlexItemOptions(line, DEFAULT_ITEM[keyword]);
                    continue;
                }
                content.push({ content: [], options: parseFlexItemOptions(line, DEFAULT_ITEM[keyword]) });
                continue;
            }
            content[content.length - 1].content.push({ line: line, level: level });
        }

        // consume the processed tag and replace escape sequence
        const childNodes = content.map((part) => {
            const wrapperKlasses = [];
            if (keyword === 'cards' && !part.options.noDefaultClass) {
                wrapperKlasses.push('card')
            }

            const children = [];
            const raw = []
            const flushChildren = (klassen, wrapChildren) => {
                if (raw.length === 0) {
                    return;
                }
                if (wrapChildren) {
                    children.push(
                        element('div', klassen, this.tokenizeBlock(raw.join(NEWLINE).replace(escapeTag, ':::'), now))
                    )
                } else {
                    wrapperKlasses.push(...klassen)
                    children.push(
                        ...this.tokenizeBlock(raw.join(NEWLINE).replace(escapeTag, ':::'), now)
                    )
                }
                raw.splice(0);
            }
            part.content.forEach((p) => {
                if (p.level === 0 && keyword === 'cards' && MD_IMAGE_REGEX.test(p.line)) {
                    flushChildren(part.options.classes, true);
                    raw.push(p.line);
                    flushChildren(['card__image'], true);
                } else {
                    raw.push(p.line);
                }
            });
            flushChildren(part.options.classes, keyword === 'cards');
            return element(
                'div',
                ['item', ...wrapperKlasses],
                children,
                { ...itemStyle, ...part.options.style }
            );
        });

        // const contentString = content.join(NEWLINE).replace(escapeTag, ':::');
        const add = eat(opening + food.join(NEWLINE));

        // parse the content in block mode
        const exit = this.enterBlock();
        exit();
        const klasses = wrapperStyle.classes;
        delete wrapperStyle['classes'];
        // build the nodes for the full markup
        const flex = element(
            "div",
            ["flex", `flex-${keyword}`, ...klasses],
            childNodes,
            wrapperStyle
        );

        return add(flex);
    }

    // add tokenizer to parser after fenced code blocks
    const Parser = this.Parser.prototype;
    Parser.blockTokenizers.flex = blockTokenizer;
    Parser.blockMethods.splice(
        Parser.blockMethods.indexOf("fencedCode") + 1,
        0,
        "flex"
    );
    Parser.interruptParagraph.splice(
        Parser.interruptParagraph.indexOf("fencedCode") + 1,
        0,
        ["flex"]
    );
    Parser.interruptList.splice(
        Parser.interruptList.indexOf("fencedCode") + 1,
        0,
        ["flex"]
    );
    Parser.interruptBlockquote.splice(
        Parser.interruptBlockquote.indexOf("fencedCode") + 1,
        0,
        ["flex"]
    );

    // TODO: add compiler rules for converting back to markdown

    return function transformer(tree) {
        // escape everything except flexHTML nodes
        visit(
            tree,
            node => {
                return node.type !== "flexHTML";
            },
            function visitor(node) {
                if (node.value) {
                    node.value = node.value.replace(escapeTag, ':::')
                }
                return node;
            }
        );
    };
}

module.exports = attacher;