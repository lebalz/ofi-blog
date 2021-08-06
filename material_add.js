const Rsync = require('rsync');
const fs = require('fs');
const CONFIG_FILE = './material_config.json'
const configs = require(CONFIG_FILE);
var argv = require('minimist')(process.argv.slice(2));

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

var src = argv._[0]
if (!src.startsWith(DOC_PATH) && !src.startsWith('/')) {
    src = `${DOC_PATH}${src}`
}
const klassen = argv.to ? argv.to.split(',') : Object.keys(configs);
const to = argv.as || argv.name || relative2Doc(src)


klassen.forEach((klass) => {
    if (!Object.keys(configs).includes(klass)) {
        console.log('Klasse not found, skipping: ', klass)
        return;
    }
    var exists = false;    
    configs[klass].forEach((srcPath) => {
        switch (typeof srcPath) {
            case 'string':
                if (srcPath === src) {
                    exists = true;
                    console.log('This source already exists: ', srcPath)
                }
                break;
            case 'object':
                if (srcPath.from === src) {
                    exists = true;
                    console.log('This source already exists: ', srcPath)
                }
                break;
        }
    })
    if (!exists) {
        const isDir = fs.lstatSync(src).isDirectory();
        if (isDir && !src.endsWith('/')) {
            src = src + '/';
        }
        const toPath = `versioned_docs/version-${klass}/${to}`
        configs[klass].push({from: src, to: toPath})

        if (isDir) {
            const rsync = new Rsync()
                .source(src)
                .destination(toPath)
                .archive()
                .delete()
                rsync.execute((err, code, cmd) => {
                    console.log('finished', err, code, cmd)
                })
        } else {
            fs.writeFileSync(src, toPath);
        }
    }
})

fs.writeFileSync(CONFIG_FILE, JSON.stringify(configs, undefined, 2))
