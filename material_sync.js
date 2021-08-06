const fs = require('fs');
const Rsync = require('rsync');
const CONFIG = require('./material_config.json')

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

Object.keys(CONFIG).forEach((klass) => {
    const config = CONFIG[klass];
    config.forEach((src) => {
        var srcPath = undefined
        var toPath = undefined
        var exclude = undefined;
        switch (typeof src) {
            case 'string':
                srcPath = src;
                toPath = `versioned_docs/version-${klass}/${relative2Doc(src)}`;
                break;
            case 'object':
                srcPath = src.from;
                if (src.to) {
                    toPath = src.to
                } else {
                    toPath = `versioned_docs/version-${klass}/${relative2Doc(src)}`
                }
                exclude = src.exclude;
                break;
        }
        const isDir = fs.lstatSync(srcPath).isDirectory()
        if (isDir && !srcPath.endsWith('/')) {
            srcPath = srcPath + '/';
        }

        if (isDir) {
            const rsync = new Rsync()
                .source(srcPath)
                .destination(toPath)
                .archive()
                .delete();
            if (exclude) {
                rsync.exclude(src.exclude)
            }
            // console.log(rsync.command())
            rsync.execute((err, code, cmd) => {
                console.log('finished', err, code, cmd)
            })
        } else {
            fs.writeFileSync(srcPath, toPath);
        }

    })
})