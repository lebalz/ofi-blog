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
 * @returns {string[]}
 */
const findMdTemplate = (src) => {
    const mdFiles = [];
    if (fs.lstatSync(src).isDirectory()) {
        fs.readdirSync(src).forEach((file) => {
            const fname = path.join(src, file);
            if (fs.lstatSync(fname).isDirectory()) {
                mdFiles.push(...findMdTemplate(fname));
            } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
                if (file.startsWith('_')) {
                    mdFiles.push(fname);
                }
            }
        });
    } else {
        if (src.endsWith('.md') || src.endsWith('.mdx')) {
            if (src.startsWith('_')) {
                mdFiles.push(src);
            }
        }
    }
    return mdFiles;
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

const ensureStartingSlash = (path) => {
    if (typeof path !== 'string') {
        return path;
    }
    if (path.startsWith('/')) {
        return path;
    }
    return `/${path}`
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

/**
 * 
 * @param {Rsync} rsync 
 * @param {string} srcPath
 */
const ensureSync = async (rsync, srcPath) => {
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
    return success;
}

const main = async () => {
    /**
     * page for the class
     * includes the sync-pages from the secure folder
     */
    if (process.env.WITHOUT_DOCS) {
        console.log('RENAMING docs/ to _docs/')
        fs.renameSync('docs', '_docs')
        fs.mkdirSync('docs')
        fs.cpSync('_docs/home.md', 'docs/home.md')
        /** copy all markdown-templates - otherwise some pages might fail */
        findMdTemplate(path.join(__dirname, '_docs')).forEach((file) => {
            fs.cpSync(file, file.replace('/_docs/', '/docs/'))
        });
        /** copy secure pages */
        const securePages = path.join(__dirname, 'secure/sync/pages');
        if (fs.existsSync(securePages)) {
            const rsync = new Rsync()
                            .source(securePages)
                            .destination('src/pages/secure')
                            .archive()
                            .delete();
            await ensureSync(rsync, securePages);
        }        
    }
    /** secure static */
    const secureStatic = path.join(__dirname, 'secure/sync/static');
    if (fs.existsSync(secureStatic)) {
        const rsync = new Rsync()
                        .source(secureStatic)
                        .destination('static/secure')
                        .archive()
                        .delete();
        await ensureSync(rsync, secureStatic);
    }
    /* No Versioning, no News Page */
    if (process.env.DOCS_ONLY) {
        if (fs.existsSync('versioned_docs')) {
            console.log('RENAMING versioned_docs/ to _versioned_docs/')
            fs.renameSync('versioned_docs', '_versioned_docs')
            fs.mkdirSync('versioned_docs')
        }
        if (fs.existsSync('versioned_sidebars')) {
            console.log('RENAMING versioned_sidebars/ to _versioned_sidebars/')
            fs.renameSync('versioned_sidebars', '_versioned_sidebars')
            fs.mkdirSync('versioned_sidebars')
        }
        if (fs.existsSync('versions.json')) {
            console.log('RENAMING versions.json to _versions.json')
            fs.renameSync('versions.json', '_versions.json')
            fs.writeFileSync('versions.json', '[\n  "current"\n]')
        }
        if (fs.existsSync('news')) {
            console.log('RENAMING news/ to _news/')
            fs.renameSync('news', '_news')
            fs.mkdirSync('news')
            fs.writeFileSync(`news/${new Date().toISOString().slice(0, 10)}-news.md`, `# News Placeholder\n`)
        }
    }
    fs.writeFileSync('static/CNAME', (process.env.DOMAIN || 'ofi.gbsl.website').replace(/https?:\/\//g, ''), { encoding: 'utf-8', flag: 'w' }); /** overwrite */
    
    Object.keys(CONFIG).forEach(async (klass) => {
        const config = CONFIG[klass];
        const gitignore = [];
        const classDir = `versioned_docs/version-${klass}/`;
        const promises = []
        config.forEach(async (src) => {
            var srcPath = undefined
            var toPath = undefined
            const ignore = [];
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
                    ignore.push(...(src.ignore || []));
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
                    rsync.exclude(ignore.map((i) => ensureStartingSlash(i)));
                    ignore.forEach((ifile) => {
                        const opath = `${srcPath}${ifile}`;
                        const ipath = `${sanitizedClassDir}${ifile}`;
                        if (!fs.existsSync(opath)) {
                            console.warn(`⚠️ [ignore] ${klass}->${srcPath}: ignored "${ifile}" does not exist`);
                            return
                        }
                        if (fs.lstatSync(opath).isDirectory()) {
                            gitignore.push(`!${ensureTrailingSlash(ipath)}`)
                        } else {
                            gitignore.push(`!${ipath}`)
                        }
                    })
                }
                rsync.exclude(['.sync.*', '*.nosync.*']);        
                await ensureSync(rsync, srcPath);
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
    });
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
});