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
if (process.env.WITHOUT_DOCS) {
    console.log('RENAMING docs/ to _docs/')
    fs.renameSync('docs', '_docs')
    fs.mkdirSync('docs')
    fs.cpSync('_docs/home.md', 'docs/home.md')
}
(async () => {
    Object.keys(CONFIG).forEach(async (klass) => {
        const config = CONFIG[klass];
        const gitignore = [];
        const classDir = `versioned_docs/version-${klass}/`;
        const promises = []
        config.forEach(async (src) => {
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
            if (process.env.WITHOUT_DOCS && srcPath.startsWith('docs/')) {
                srcPath = `_${srcPath}`
            }
            const isDir = fs.lstatSync(srcPath).isDirectory()
            if (isDir) {
                srcPath = ensureTrailingSlash(srcPath);
            }
            const parent = path.dirname(toPath);
            if (!fs.existsSync(parent)) {
                fs.mkdirSync(parent, { recursive: true })
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
                let success = false;
                while (!success) {
                    rs = new Promise((resolve, reject) => {
                        rsync.execute((err, code, cmd) => {
                            if (!err) {
                                console.log('✅', cmd)
                                resolve(true)
                            } else {
                                console.log('❌', srcPath)
                                console.log('   ', cmd)
                                console.log('   ', err)
                                console.log('   ', code)
                                console.log('')
                                resolve(false);
                            }
                        });
                    })
                    success = await rs;
                }
            } else {
                fs.copyFileSync(srcPath, toPath);
                gitignore.push(toPath.replace(classDir, ''))
            }
            if (src.open) {
                const folder = isDir ? toPath : parent;
                try {
                    fs.mkdirSync(folder, { recursive: true })
                } catch (e) {
                    console.log(e);
                }
                const categoryPath = path.join(folder, '_category_.json');
                console.log('---------- CAT', categoryPath)
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
})();