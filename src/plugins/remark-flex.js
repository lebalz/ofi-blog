const visit = require("unist-util-visit");
const processOption = require('./helpers');

const NEWLINE = "\n";

// escape regex special characters
function escapeRegExp(s) {
    return s.replace(new RegExp(`[-[\\]{}()*+?.\\\\^$|/]`, "g"), "\\$&");
}

const MD_IMAGE_REGEX = /^!\[.*?\]\(.*?\)/;
const MIN_WIDTH = '50px';
const COLS = { test: /\s*--cols\s*=\s*(?<value>[\d\S]+)/, key: 'cols', type: 'int' };
const WIDTH = { test: /\s*(--width|--min-width|--min)\s*=\s*(?<value>[\d\S]+)/, key: 'minWidth', type: 'string' };
const GAP = { test: /\s*--gap\s*=\s*(?<value>[\d\S]+)/, key: 'gap', type: 'string' };
const ALIGN = { test: /\s*(--align|--alignItems)\s*=\s*(?<value>[\d\S]+)/, key: 'align', type: 'string' };
const FLEX_GROW = { test: /\s*(--grow|--flexGrow)\s*=\s*(?<value>[\d\S]+)/, key: 'flexGrow', type: 'int' };

// create a node that will compile to HTML
const element = (tagName, classes = [], children = [], style = {}) => {
    const hProperties = { style: style }
    if (classes.length > 0) {
        hProperties.className = classes;
    }
    return {
        type: 'flexHTML',
        data: {
            hName: tagName,
            hProperties: hProperties
        },
        children
    };
};


const parseFlexOptions = (config) => {
    const style = { flexBasis: MIN_WIDTH };
    const { cols } = processOption(COLS, config);
    const { minWidth } = processOption(WIDTH, config);
    if (cols && minWidth) {
        style.flexBasis = `max(${minWidth}, ${100 / cols}% - ${cols * 0.2 + (cols - 2) * 0.2}em)`;
    } else if (cols) {
        style.flexBasis = `max(${MIN_WIDTH}, ${100 / cols}% - ${cols * 0.2 + (cols - 2) * 0.2}em)`;
    } else if (minWidth) {
        style.flexBasis = minWidth;
    }
    const { flexGrow } = processOption(FLEX_GROW, config);
    if (flexGrow !== undefined) {
        style.flexGrow = flexGrow;
    }
    return style;
}

/**
 * 
 * @param {string} text 
 * @returns 
 */
const parseFlexItemOptions = (text = undefined, style = 'card__body') => {
    const opts = { style: style, empty: false };
    if (!text) {
        return opts;
    }
    const res = text.match(/^\*\*\*\s*(?<style>\S+)?/);
    if (res.groups && res.groups.style) {
        switch (res.groups.style) {
            case 'full':
                opts.style = 'card__image';
                break;
            case 'empty':
            case 'spacer':
            case 'placeholder':
                opts.style = 'empty';
                opts.empty = true;
                break;
        }
    }
    return opts;
}

const DEFAULT_ITEM = {cards: 'card__body', flex: ''}

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
        const itemStyle = parseFlexOptions(config);
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
                if (content.length === 1 && content[content.length - 1].content.length === 0) {
                    content[content.length - 1].options = parseFlexItemOptions(line, DEFAULT_ITEM[keyword]);
                    continue;
                }
                content.push({ content: [], options: parseFlexItemOptions(line, DEFAULT_ITEM[keyword]) });
                continue;
            }
            content[content.length - 1].content.push({line: line, level: level});
        }

        // consume the processed tag and replace escape sequence
        const childNodes = content.map((part) => {
            const klasses = [];
            if (keyword === 'cards' && !part.options.empty) {
                klasses.push('card')
            }

            const children = [];
            const raw = []
            const flushChildren = (klass) => {
                if (raw.length === 0) {
                    return;
                }
                children.push(
                    element('div', klass, this.tokenizeBlock(raw.join(NEWLINE).replace(escapeTag, ':::'), now))
                )
                raw.splice(0);
            }
            part.content.forEach((p) => {
                if (p.level === 0 && keyword === 'cards' && MD_IMAGE_REGEX.test(p.line)) {
                    flushChildren(part.options.style);
                    raw.push(p.line);
                    flushChildren('card__image');
                } else {
                    raw.push(p.line);
                }
            });
            flushChildren(part.options.style);


            return element(
                'div',
                ['item', ...klasses],
                children,
                itemStyle
            )
        })

        // const contentString = content.join(NEWLINE).replace(escapeTag, ':::');
        const add = eat(opening + food.join(NEWLINE));

        // parse the content in block mode
        const exit = this.enterBlock();
        exit();

        const wrapperStyle = {}
        const { gap } = processOption(GAP, config);
        if(gap) {
            wrapperStyle.gap = gap;
        }
        const { align } = processOption(ALIGN, config);
        if(align) {
            wrapperStyle.alignItems = align;
        }
        // build the nodes for the full markup
        const flex = element(
            "div",
            ["flex", `flex-${keyword}`],
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