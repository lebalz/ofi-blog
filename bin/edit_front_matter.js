const fs = require('fs');
const path = require("path");
const { exit } = require('process');
const ROOT = './docs'
var argv = require('minimist')(process.argv.slice(2));
const matter = require('gray-matter');
const uuid = require('uuid');


console.log(argv)

const getFilesRecursively = (directory) => {
    const files = []
    const filesInDirectory = fs.readdirSync(directory);
    for (const f of filesInDirectory) {
        const absolute = path.join(directory, f);
        if (fs.statSync(absolute).isDirectory()) {
            files.push(...getFilesRecursively(absolute));
        } else if (/\.mdx?/.test(f)) {
            files.push(absolute);
        }
    }
    return files;
};

const files = getFilesRecursively(ROOT);
files.push(...getFilesRecursively('./versioned_docs'));
console.log(files)

files.forEach((file, idx) => {
    const fm = matter.read(file);
    // if (idx !== 0) {
    //     return;
    // }
    fm.data.sidebar_custom_props = {
        ...(fm.data.sidebar_custom_props || {}),
    }
    if (!fm.data.sidebar_custom_props.id) {
        fm.data.sidebar_custom_props.id = uuid.v4()
    }

    fs.writeFileSync(
        file,
        matter.stringify(fm.content, fm.data),
        {encoding: 'utf8'}
    )
})
