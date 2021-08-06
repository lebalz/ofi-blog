const fs = require('fs');
const { argv } = require('process');
const CONFIG_FILE = './material_config.json'
const configs = require(CONFIG_FILE);

console.log('remove:', argv.slice(2))


var toRemove = argv.slice(2);
var klassen = Object.keys(configs);
if (toRemove.includes('--from')) {
    const idx = toRemove.indexOf('--from');
    klassen = toRemove.slice(idx + 1);
    toRemove = toRemove.slice(0, idx);
}

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

console.log(toRemove, klassen)

klassen.forEach((klass) => {
    const config = configs[klass];
    const keepedFiles = [];
    config.forEach((src) => {
        const from = typeof src === 'string' ? src : src.from;
        const to = (typeof src === 'object' && src.to) ? src.to : `versioned_docs/version-${klass}/${relative2Doc(src)}` ;
        var keep = true;
        toRemove.forEach((rmSrc) => {
            console.log(from, rmSrc)
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