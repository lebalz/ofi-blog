const fs = require('fs');
const path = require('path');

const { exit } = require('process');
var argv = require('minimist')(process.argv.slice(2));

if (argv.help) {
    console.log(`
yarn run create_refs [image-folder] [[--base="file.json"]]

examples:

yarn run create_refs docs/Codes-and-Data/01-Codierung/images --base="picture.json"
`)
    exit(0)
}

const DOC_PATH = 'docs/'

var src = path.join(argv._[0]);

if (!src.startsWith(DOC_PATH) && !src.startsWith('/')) {
    src = path.join(DOC_PATH, src);
}
const isDir = fs.lstatSync(src).isDirectory();
if (isDir && !src.endsWith('/')) {
    src = src + '/';
}

let base = argv.base
if (base && !fs.existsSync(base)) {
    base = path.join(src, base);
    if (!fs.existsSync(base)) {
        throw new Error(`Base File '${base}' not found.`)
    }
}

const files = fs.readdirSync(src);
files.forEach((f) => {
    if (path.extname(f).match(/^\.(jpe?g|png|svg|gif)$/gi)) {
        const jsn = path.join(src, f.replace(new RegExp(`${path.extname(f)}$`), '.json'));
        if (!fs.existsSync(jsn)) {
            if (base) {
                fs.copyFileSync(base, jsn);
                console.log('copied base to', jsn);
            } else {
                fs.closeSync(fs.openSync(jsn, 'w'));
                console.log('created', jsn);
            }
        }
    }
});
