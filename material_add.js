const fs = require('fs');
const { exit } = require('process');
const CONFIG_FILE = './material_config.json'
const configs = require(CONFIG_FILE);
var argv = require('minimist')(process.argv.slice(2));

if (argv.help) {
    console.log(`
yarn run add [source] [[--to="v1,v2"]] [[--as="destination-name"]] [[--ignore="file1,file2"]]

examples:

yarn run add docs/byod-basics/v24/ --to="24a,24b"   // --> adds /byod-basics/v24 to 24a & 24b
yarn run add docs/byod-basics/v24/ --to="24a,24b" --as="My-Material" // --> adds /byod-basics to 24a & 24b
yarn run add byod-basics/v24/ --to="24a,24b" --as="My-Material" // same as above
yarn run add byod-basics/v24 --to="24a,24b" --as="My-Material"  // same as above
yarn run add docs/byod-basics/v24/ --to="24a,24b" --as="My-Material" --ignore="_category_.json,*.txt"
`)
    exit(0)
}

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

/** @type string */
var src = argv._[0]

const pathStart = DOC_PATHS.find((p) => src.startsWith(p));

if (!pathStart && !src.startsWith('/')) {
    src = `${DOC_PATHS[0]}${src}`
}
const isDir = fs.lstatSync(src).isDirectory();
if (isDir && !src.endsWith('/')) {
    src = src + '/';
}

const klassen = argv.to ? argv.to.split(',') : Object.keys(configs);
const to = argv.as || argv.name || relative2Doc(src)
var ignore = []
if (argv.ignore) {
    ignore = argv
        .ignore
        .split(',')
        .map((p) => p.replace(/^\/+/, '')) // remove '/' at the start
        .map((p) => p.replace(src, '')) // remove relative path if present
}
klassen.forEach((klass) => {
    if (!Object.keys(configs).includes(klass)) {
        console.log(`⚠️ 
        Klasse not found, skipping: ${klass}
        `)
        return;
    }
    configs[klass] = configs[klass].filter((srcPath) => {
        switch (typeof srcPath) {
            case 'string':
                if (srcPath === src) {
                    console.log('ℹ️  Modify old source: ', srcPath)
                    return false;
                }
                break;
            case 'object':
                if (srcPath.from === src) {
                    console.log('ℹ️  Modify old source: ', srcPath)
                    return false;
                }
                break;
        }
        return true;
    })
    const toPath = `versioned_docs/version-${klass}/${to}`
    configs[klass].push({ from: src, to: toPath, ignore: ignore })
})

fs.writeFileSync(CONFIG_FILE, JSON.stringify(configs, undefined, 2))
