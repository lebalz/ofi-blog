const fs = require('fs');
const path = require('path');
const CONFIG_FILE = './material_config.json'

/** @type {{
 * [key: string]: {
 *  from: string, 
 *  to: string, 
 *  ignore: string[],
 *  open?: boolean
 * }[]}} */
const configs = require(CONFIG_FILE);
var argv = require('minimist')(process.argv.slice(2));

if (argv.help) {
    console.log(`
yarn run cleanup

examples:

yarn run cleanup
`)
    exit(0)
}

var klassen = Object.keys(configs);

klassen.forEach((klass) => {
    const config = configs[klass];
    const tmp_dir = `versioned_docs/version-${klass}/.tmp`;
    const copyBack = [];
    fs.mkdirSync(tmp_dir, {recursive: true});
    config.forEach((src) => {
        if (src.ignore.length > 0) {
            fs.mkdirSync(`${tmp_dir}/${src.to}`, {recursive: true});
        }
        src.ignore.forEach((keep) => {
            if (fs.existsSync(`${src.to}/${keep}`)) {
                fs.copyFileSync(`${src.to}/${keep}`, `${tmp_dir}/${src.to}/${keep}`)
            }
            copyBack.push(`${src.to}/${keep}`);
        })
        if (fs.existsSync(src.to)) {
            let parent = path.dirname(src.to);
            if (fs.lstatSync(src.to).isDirectory()) {
                fs.rmSync(src.to, { recursive: true, force: true });
            } else {
                fs.unlinkSync(src.to);
                const categoryPath = path.join(path.dirname(src.to), '_category_.json');
                if (src.open) {
                    console.log(categoryPath, fs.existsSync(categoryPath))
                }
                if (src.open && fs.existsSync(categoryPath)) {
                    console.log('REMOVE CAT', categoryPath)
                    fs.unlinkSync(categoryPath);
                }
            }
            while (fs.readdirSync(parent).length === 0) {
                fs.rmSync(parent, { recursive: true, force: true });
                parent = path.dirname(parent);
            }
        }
    });
    copyBack.forEach((f) => {
        if (!fs.existsSync(`${tmp_dir}/${f}`)) {
            return;
        }
        if (!fs.existsSync(path.dirname(f))) {
            fs.mkdirSync(path.dirname(f), {recursive: true});
        }
        fs.copyFileSync(`${tmp_dir}/${f}`, f);
    });
    fs.rmSync(tmp_dir, { recursive: true, force: true });

})
