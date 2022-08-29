const fs = require('fs');
const path = require('path');
const CONFIG_FILE = './material_config.json'
/** @type {{
 * [key: string]: {
 *  from: string, 
 *  to: string, 
 *  ignore: string[],
 *  open?: boolean
 * }[]}} */
const configs = require(CONFIG_FILE);
var argv = require('minimist')(process.argv.slice(2));

if (argv.help) {
    console.log(`
yarn run remove [source] [[--from="v1,v2"]]

examples:

yarn run remove docs/byod-basics/v24/ --from="24a,24b"
`)
    exit(0)
}

const toRemove = argv._;
var klassen = argv.from ? argv.from.split(',') : Object.keys(configs);

const DOC_PATH = 'docs/'

/**
 * 
 * @param {string} path 
 * @returns 
 */
const relative2Doc = (path) => {
    if (path.startsWith(DOC_PATH)) {
        return path.slice(DOC_PATH.length)
    }
    return path;
}

const ensureTrailingSlash = (path) => {
    if (typeof path !== 'string') {
        return path;
    }
    if (path.endsWith('/')) {
        return path;
    }
    return `${path}/`
}

klassen.forEach((klass) => {
    const config = configs[klass];
    const keepedFiles = [];
    config.forEach((src) => {
        const from = `${DOC_PATH}${relative2Doc(typeof src === 'string' ? src : src.from)}`;
        const to = (typeof src === 'object' && src.to) ? src.to : `versioned_docs/version-${klass}/${relative2Doc(src)}` ;
        var keep = true;
        toRemove.forEach((rmSrc) => {
            var toRmSrc = `${DOC_PATH}${relative2Doc(rmSrc)}` 
            if (fs.lstatSync(toRmSrc).isDirectory()) {
                toRmSrc = ensureTrailingSlash(toRmSrc);
            }
            console.log(from, toRmSrc, from === toRmSrc)
            if (from === toRmSrc) {
                keep = false;
                if (fs.existsSync(to)) {
                    console.log('- remove', to, 'from', klass);
                    let parent = path.dirname(to);
                    if (fs.lstatSync(to).isDirectory()) {
                        console.log('rm dir', to)
                        fs.rmSync(to, { recursive: true, force: true });
                    } else {
                        fs.unlinkSync(to);
                    }
                    while (fs.readdirSync(parent).length === 0) {
                        fs.rmSync(parent, { recursive: true, force: true });
                        parent = path.dirname(parent);
                    }
                } else {
                    console.log('- unset', to, 'from', klass);
                }
            }
        })
        if (keep) {
            keepedFiles.push(src)
        }
    })
    configs[klass] = keepedFiles;
})

fs.writeFileSync(CONFIG_FILE, JSON.stringify(configs, undefined, 2))
console.log('done')