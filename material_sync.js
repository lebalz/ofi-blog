const fs = require('fs');
const path = require('path');
const Rsync = require('rsync');
/** @type {{
 * [key: string]: {
 *  from: string, 
 *  to: string, 
 *  ignore: string[],
 *  open?: boolean
 * }[]}} */
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

const ensureTrailingSlash = (path) => {
    if (typeof path !== 'string') {
        return path;
    }
    if (path.endsWith('/')) {
        return path;
    }
    return `${path}/`
}

Object.keys(CONFIG).forEach((klass) => {
    const config = CONFIG[klass];
    const gitignore = [];
    const classDir = `versioned_docs/version-${klass}/`;
    config.forEach((src) => {
        var srcPath = undefined
        var toPath = undefined
        var ignore = [];
        switch (typeof src) {
            case 'string':
                srcPath = src;
                toPath = `${classDir}${relative2Doc(src)}`;
                break;
            case 'object':
                srcPath = src.from;
                if (src.to) {
                    toPath = src.to
                } else {
                    toPath = `${classDir}${relative2Doc(src)}`
                }
                ignore = src.ignore;
                break;
        }
        const isDir = fs.lstatSync(srcPath).isDirectory()
        if (isDir) {
            srcPath = ensureTrailingSlash(srcPath);
        }
        const parent = path.dirname(toPath);
        if (!fs.existsSync(parent)) {
            fs.mkdirSync(parent, {recursive: true})
        }

        if (isDir) {
            const sanitizedClassDir = ensureTrailingSlash(toPath.replace(classDir, ''));
            gitignore.push(`${sanitizedClassDir}*`)
            const rsync = new Rsync()
                .source(srcPath)
                .destination(toPath)
                .archive()
                .delete();
            if (ignore.length > 0) {
                rsync.exclude(ignore)
                gitignore.push(`!${sanitizedClassDir}${ignore}`)
            }
            rsync.exclude(['.sync.*', '*.nosync.*'])
            rsync.execute((err, code, cmd) => {
                if (!err) {
                    console.log('✅', cmd)
                } else {
                    console.log('❌')
                    console.log('   ', cmd)
                    console.log('   ', err)
                    console.log('   ', code)
                    console.log('')
                }
            })
        } else {
            fs.copyFileSync(srcPath, toPath);
            gitignore.push(toPath.replace(classDir, ''))
        }
        if (src.open) {
            const categoryPath = path.join(isDir ? toPath : parent, '_category_.json');
            gitignore.push(categoryPath.replace(classDir, ''));
            let category = {
                collapsible: true,
                collapsed: false
            };
            if (fs.existsSync(categoryPath)) {
                category = JSON.parse(fs.readFileSync(categoryPath));
                category.collapsed = false;
                category.collapsible = true;
            }
            fs.writeFileSync(
                categoryPath, 
                JSON.stringify(category, undefined, 2)
            );
           
        }
        fs.writeFileSync(`${classDir}.gitignore`, gitignore.join("\n"))

    })
})