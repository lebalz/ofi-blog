const fs = require('fs');
const path = require("path");
const { exit } = require('process');
var argv = require('minimist')(process.argv.slice(2));
const uuid = require('uuid');
// escape regex special characters
function escapeRegExp(s) {
    return s.replace(new RegExp(`[-[\\]{}()*+?.\\\\^$|/]`, "g"), "\\$&");
  }
const admonitionKeywords = ['aufgabe', 'finding', 'def', 'secondary', 'info', 'success', 'danger', 'note', 'tip', 'warning', 'important', 'caution'];
const keywords = admonitionKeywords.map(escapeRegExp)
                                   .join("|");
                                   


const tag = escapeRegExp(':::');
// tag followed by some non-whitespace characters
const isOpeningTag = new RegExp(`^${tag}\\S+`);
// closing tag: tag, optionally followed by whitespace characters
const isClosingTag = new RegExp(`^${tag}\\s*$`);
const regex = new RegExp(`${tag}(\w+)`);


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
//   const files = getFilesRecursively('./test');
  
const files = getFilesRecursively('./docs');
files.push(...getFilesRecursively('./news'));
files.push(...getFilesRecursively('./src/pages'));
files.push(...getFilesRecursively('./versioned_docs'));
// console.log(files)

files.forEach((file, idx) => {
    return fs.readFile(file, 'utf8', function (err,data) {
        console.log(idx, file)
        if (err) {
          return console.log(err);
        }
        let indentLevel = 0;
        const replacers = []
        const stack = []
        const idStack = []
        data.split(/\r?\n/).forEach((line, idx) => {
            if (isOpeningTag.test(line)) {
                const match = line.match(/:::(\w+)/);
                if (!match) {
                    throw `Oh Noo: ${file}:${idx} ${line}`
                }
                const tag = match[1];
                replacers.push({line: idx, indent: indentLevel, keyword: tag, type: 'open', tagNr: 3, id: idx})
                stack.push(tag);
                idStack.push(idx);
                indentLevel++;
                // console.log(file, idx, indentLevel, 'open', line)
            } else if (isClosingTag.test(line)) {
                indentLevel--;
                const tag = stack.pop()
                const id = idStack.pop()
                replacers.push({line: idx, indent: indentLevel, keyword: tag, type: 'close', tagNr: 3, id: id})
                // console.log(file, idx, indentLevel, 'close', line)
            }
        });
        // console.log(replacers)
        replacers.forEach((r, idx) => {
            if (r.type === 'close') {
                return
            }
            const closerIdx = replacers.findIndex((r2) => r2.line > r.line && r2.id === r.id && r2.type === 'close');
            const closer = replacers[closerIdx];
            if (!closer) {
                console.log(r, idx, file)
            }
            if (closerIdx == idx + 1) {
                r.tagNr = 3
                closer.tagNr = 3
            } else {
                let max = 0;
                for (let i = idx + 1; i < closerIdx; i++) {
                    if (replacers[i].indent > max) {
                        max = replacers[i].indent;
                    }
                }
                // console.log(max, replacers.slice(idx, closerIdx))
                const level = 3 + (max - r.indent)
                r.tagNr = level
                closer.tagNr = level
            }
        });
        const lines = []
        data.split(/\r?\n/).forEach((line, idx) => {
            const replacer = replacers.find(r => r.line === idx);
            if (replacer && admonitionKeywords.includes(replacer.keyword)) {
                lines.push(line.replace(':::', ':'.repeat(replacer.tagNr)))
            } else {
                lines.push(line);
            }
        })
        return fs.writeFile(file, lines.join('\n'), 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
})

