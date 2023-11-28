const fs = require('fs');
const path = require('path');
const KnownCssProperties = require('known-css-properties').all;
const fileDirectories = ['secure'];

/**
 * @example
 * :::cards[Hello --basis=12] --> :::cards[Hello]{basis=12}
 */
// const CARD_REGEX = /:::cards\[(?<label>.*?)\]/;
// const FLEX_REGEX = /:::flex\[(?<label>.*?)\]/;
const PROPS_REGEX = /\*\*\*(?<props>.*)/;


// matches options in strings: "--width=200px --height=20%" -> {width: '20px', height='20%'}
const OPTION_REGEX = /(^|\s+)--(?<key>[a-zA-Z\-]+)\s*=\s*(?<value>[\d\S-]+)/
const BOOLEAN_REGEX = /(^|\s+)--(?<key>[a-zA-Z\-]+)\s*/

const cleanedText = (rawText) => {
    return rawText.replace(new RegExp(OPTION_REGEX, 'g'), '').replace(new RegExp(BOOLEAN_REGEX, 'g'), '').trim();
}

const parseOptions = (rawText, keyAliases = {}) => {
    const css = {}
    let raw = rawText;
    const optKey = (key) => {
        let k = key;
        if (k in keyAliases) {
            k = keyAliases[k];
        }
        return k;
    }
    while (OPTION_REGEX.test(raw)) {
        const match = raw.match(OPTION_REGEX);
        raw = raw.replace(OPTION_REGEX, '');
        const { key, value } = match.groups;
        if (key) {
            css[optKey(key)] = value;
        }
    }
    while (BOOLEAN_REGEX.test(raw)) {
        const match = raw.match(BOOLEAN_REGEX);
        raw = raw.replace(BOOLEAN_REGEX, '');
        const { key } = match.groups;
        if (key) {
            css[optKey(key)] = true;
        }
    }
    return css;
}

const getFilesRecursively = (directory) => {
    const files = []
    const filesInDirectory = fs.readdirSync(directory);
    for (const f of filesInDirectory) {
        const absolute = path.join(directory, f);
        if (fs.statSync(absolute).isDirectory()) {
            files.push(...getFilesRecursively(absolute));
        } else if (/\.mdx?$/.test(f)) {
            files.push(absolute);
        }
    }
    return files;
};

const files = fileDirectories.reduce((acc, dir) => {
    return [...acc, ...getFilesRecursively(`./${dir}`)];
}, []);


/**
 * 
 * @param {string} file 
 */
async function transformFlexCards(file) {
    if (!/\.mdx?$/.test(file)) {
        return;
    }
    try {
        /** @type string */
        let raw = await fs.promises.readFile(file, {encoding: 'utf8'});
        let match;
        let hasChanged = false;
        ['cards', 'flex'].forEach((admonitionKey) => {
            // /:::cards\[(?<label>.*?)\]/
            const regex = new RegExp(`:::${admonitionKey}\\[(?<label>.*?)\\]`);
            let idx = 0;
            while (match = raw.slice(idx).match(regex)) {
                const {label} = match.groups;
                hasChanged = true;
                const optionsRaw = parseOptions(label);
                const labelText = cleanedText(label) ? `[${cleanedText(label)}]` : '';
                const kls1 = optionsRaw.classes;
                const kls2 = optionsRaw.classNames;
                const kls3 = optionsRaw.class;
                delete optionsRaw.classes;
                delete optionsRaw.classNames;
                delete optionsRaw.class;

                const klasses = `${kls1 || ''} ${kls2 || ''} ${kls3 || ''}`.split(/[ ;]/).filter(k => k).map(k => `.${k}`).join(' ').trim();
                const attributes = Object.entries(optionsRaw).map(([key, value]) => {return `${key}=${value}`}).join(' ');
                const options = `${attributes || ''} ${klasses || ''}`.trim();
                const cards = `:::${admonitionKey}${labelText}${options ? `{${options}}` : ''}`;
                raw = `${raw.slice(0, idx + match.index)}${cards}${raw.slice(idx + match.index + match[0].length)}`;
                idx += match.index + match[0].length;
            }
        });
        while (match = raw.match(PROPS_REGEX)) {
            const {props} = match.groups;
            hasChanged = true;
            const optionsRaw = parseOptions(props);
            const kls1 = optionsRaw.classes;
            const kls2 = optionsRaw.classNames;
            const kls3 = optionsRaw.class;
            delete optionsRaw.classes;
            delete optionsRaw.classNames;
            delete optionsRaw.class;

            const klasses = `${kls1 || ''} ${kls2 || ''} ${kls3 || ''}`.split(/[ ;]/).filter(k => k).map(k => `.${k}`).join(' ').trim();
            const attributes = Object.entries(optionsRaw).map(([key, value]) => {return `${key}=${value}`}).join(' ');
            const options = `${attributes || ''} ${klasses || ''}`.trim();
            const opts = `::br${options ? `{${options}}` : ''}`;
            raw = `${raw.slice(0, match.index)}${opts}${raw.slice(match.index + match[0].length)}`;
        }
        if (hasChanged) {
            console.log(`Writing ${file}`)
            await fs.promises.writeFile(file, raw, {encoding: 'utf8'});
        }
    } catch (err) {
        console.error(err);
        return;
    }
}

files.forEach(transformFlexCards);