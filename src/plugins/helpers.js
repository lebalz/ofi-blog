const toMessageRelativeFilePath = require('@docusaurus/utils').toMessageRelativeFilePath;
const path = require('path');
const fs = require('fs-extra');

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

/**
 * 
 * @param {string} rawText 
 * @returns string
 */
const cleanedText = (rawText) => {
    return rawText.replace(new RegExp(OPTION_REGEX, 'g'), '').replace(new RegExp(BOOLEAN_REGEX, 'g'), '')
}



/**
 * 
 * @param {string} filePath 
 * @param {string} sourceFilePath 
 */
const ensureFileExist = async (filePath, sourceFilePath) => {
    const imageExists = await fs.pathExists(filePath);
    if (!imageExists) {
        throw new Error(
            `File ${toMessageRelativeFilePath(
                filePath,
            )} used in ${toMessageRelativeFilePath(sourceFilePath)} not found.`,
        );
    }
}

/**
 * 
 * @param {string[]} possiblePaths 
 * @param {string} sourceFilePath 
 * @returns string
 */
const findFile = async (possiblePaths, sourceFilePath) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const possiblePath of possiblePaths) {
        if (await fs.pathExists(possiblePath)) {
            return possiblePath;
        }
    }
    throw new Error(
        `Image or File ${possiblePaths
            .map((p) => toMessageRelativeFilePath(p))
            .join(' or ')} used in ${toMessageRelativeFilePath(
                sourceFilePath,
            )} not found.`,
    );
}

const getFileUrl = async (node, staticDirs, filePath) => {
    if (path.isAbsolute(node.url)) {
        // absolute paths are expected to exist in the static folder

        const possibleImagePaths = staticDirs.map((dir) =>
            path.join(dir, node.url),
        );
        const imagePath = await findFile(possibleImagePaths, filePath);
        return posixPath(imagePath);
    }
    // We try to convert image urls without protocol to images with require calls
    // going through webpack ensures that image assets exist at build time
    // relative paths are resolved against the source file's folder
    const expectedImagePath = path.join(path.dirname(filePath), node.url);
    await ensureFileExist(expectedImagePath, filePath);
    return node.url.startsWith('./') ? node.url : `./${node.url}`;
}


const defaultUnit = (value, unit = "px") => {
    // when only a number is given, add the default unit
    if (/^\d+(\.\d*)?$/.test(value)) {
        return `${value}${unit}`;
    }
    return value;
};

module.exports = {
    parseOptions: parseOptions,
    cleanedText: cleanedText,
    camelCased: camelCased,
    getFileUrl: getFileUrl,
    defaultUnit: defaultUnit
};