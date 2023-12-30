const fs = require('fs');
const path = require('path');

const fileDirectories = ['docs', 'news', 'versioned_docs', 'src/pages', 'secure'];

const REGEX = /\[@(?<name>youtube|audio|video|circuitverse)\]\((?<src>.*?)\)/;

const getFilesRecursively = (directory) => {
    const files = []
    const filesInDirectory = fs.readdirSync(directory);
    for (const f of filesInDirectory) {
        const absolute = path.join(directory, f);
        if (fs.statSync(absolute).isDirectory()) {
            files.push(...getFilesRecursively(absolute));
        } else if (/\.mdx?/.test(f)) {
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
async function transformMediaLinksIcons(file) {
    if (!(file.endsWith('.md') || file.endsWith('.mdx'))) {
        return;
    }
    try {
        /** @type string */
        let raw = await fs.promises.readFile(file, {encoding: 'utf8'});
        let match;
        let hasChanged = false;
        while (match = raw.match(REGEX)) {
            hasChanged = true;
            const {name, src} = match.groups;
            const isAbsolute = /https?:\/\//.test(src) || src.startsWith('pathname://') || src.startsWith('/');
            if (!isAbsolute) {
                console.log('relative', src);
            }
            const url = isAbsolute ? src : src.startsWith('.') ? src : `./${src}`;
            const tag = `::${name}[${url}]`;
            raw = `${raw.slice(0, match.index)}${tag}${raw.slice(match.index + match[0].length)}`;
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

const main = async () => {
    for (const file of files) {
        await transformMediaLinksIcons(file);
    }
};

main().then(() => console.log('Done!'));