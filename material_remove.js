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

const DOC_PATHS = ['docs/', 'src/pages/', 'news/'];


const docBasePath = (src) => {
    return DOC_PATHS.find((p) => src.startsWith(p)) || DOC_PATHS[0];
}

/**
 * 
 * @param {string} path 
 * @returns 
 */
const relative2Doc = (path) => {
    const base = docBasePath(path);
    return base ? path.slice(base.length) : path;
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
        const fromRel = relative2Doc(typeof src === 'string' ? src : src.from);
        const from = `${docBasePath(typeof src === 'string' ? src : src.from)}${fromRel}`;
        const to = (typeof src === 'object' && src.to) ? src.to : `versioned_docs/version-${klass}/${relative2Doc(src)}` ;
        var keep = true;
        toRemove.forEach((rmSrc) => {
            var toRmSrc = `${docBasePath(rmSrc)}${relative2Doc(rmSrc)}` 
            console.log(src, fromRel, docBasePath(rmSrc), from, toRmSrc)
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