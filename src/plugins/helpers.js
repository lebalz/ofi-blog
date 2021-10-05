// matches options in strings: "--width=200px --height=20%" -> {width: '20px', height='20%'}
const OPTION_REGEX = /\s*--(?<key>[a-zA-Z\-]+)\s*=\s*(?<value>[\d\S-]+)/
const BOOLEAN_REGEX = /\s*--(?<key>[a-zA-Z\-]+)\s*/

/**
 * 
 * @param {string} dashed dashed string, e.g. hello-bello
 * @returns string
 */
const camelCased = (dashed) => {
    return dashed.replace(/-([a-zA-Z])/g, (g) => g[1].toUpperCase());
}

/**
 * 
 * @param {string} rawText 
 * @param {boolean} transform2CamelCase
 * @param {{[key: string]: string}} keyAliases
 * @returns 
 */
const parseOptions = (rawText, transform2CamelCase = false, keyAliases = {}) => {
    const css = {}
    let raw = rawText;
    const optKey = (key) => {
        let k = key;
        if (k in keyAliases) {
            k = keyAliases[k];
        }
        if (transform2CamelCase) {
            k = camelCased(k);
        }
        return k;
    }
    while (OPTION_REGEX.test(raw)) {
        const match = raw.match(OPTION_REGEX);
        raw = raw.replace(OPTION_REGEX, '');
        const {key, value} = match.groups;
        if (key) {
            css[optKey(key)] = value;
        }
    }
    while (BOOLEAN_REGEX.test(raw)) {
        const match = raw.match(BOOLEAN_REGEX);
        raw = raw.replace(BOOLEAN_REGEX, '');
        const {key} = match.groups;
        if (key) {
            css[optKey(key)] = true;
        }
    }
    return css;
}

/**
 * 
 * @param {string} rawText 
 * @returns string
 */
const cleanedText = (rawText) => {
    return rawText.replace(new RegExp(OPTION_REGEX, 'g'), '').replace(new RegExp(BOOLEAN_REGEX, 'g'), '')
}

module.exports = {
    parseOptions: parseOptions,
    cleanedText: cleanedText,
    camelCased: camelCased
};