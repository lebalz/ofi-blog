const fs = require('fs');
const CONFIG_FILE = './material_config.json'
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

klassen.forEach((klass) => {
    const config = configs[klass];
    const keepedFiles = [];
    config.forEach((src) => {
        const from = typeof src === 'string' ? src : src.from;
        const to = (typeof src === 'object' && src.to) ? src.to : `versioned_docs/version-${klass}/${relative2Doc(src)}` ;
        var keep = true;
        toRemove.forEach((rmSrc) => {
            console.log(from, rmSrc, from === rmSrc)
            if (from === rmSrc) {
                keep = false;
                if (fs.existsSync(to)) {
                    console.log('- remove', to, 'from', klass);
                    if (fs.lstatSync(to).isDirectory()) {
                        console.log('rm dir', to)
                        fs.rmdirSync(to, { recursive: true, force: true });
                    } else {
                        fs.rmSync(to);
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