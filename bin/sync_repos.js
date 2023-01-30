const fs = require('fs');
const path = require("path");
const { exit } = require('process');
const { exec } = require('child_process');
const ROOT = '/home/balz/git_code/bh0fer/ef-repos';
/** @type {{email: string, name: string, repo: string, url: string}[]} */
const REPO_LIST = require('../secure/docs/EF-Python/ef-2024-repos.json');
/** @type {{clone?: boolean, sync?: boolean, create_review_branch?: boolean}} */
var argv = require('minimist')(process.argv.slice(2));


const report = (error, stdout, stderr) => {
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    if (stderr) {
        return console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
}

console.log(argv)
REPO_LIST.forEach((repo) => {
    const repo_dir = `${repo.email.split('.')[0].toLowerCase()}-${repo.name}`;
    const abs_path = path.join(ROOT, repo_dir);
    if (argv.clone) {
        return exec(`git clone ${repo.url} ${abs_path}`, report)
    }
    if (argv.checkout) {
        exec(`cd ${abs_path} && git checkout main`, report)
    }
    if (argv.sync) {
        exec(`cd ${abs_path} && git reset --hard HEAD && git pull`, report)
    }
    if (argv.create_review_branch) {
        exec(`cd ${abs_path} && git branch -r`, (err, stdout, stderr) => {
            if (!stdout.match('origin/comments')) {
                // console.log(repo.name, stdout)
                exec(`cd ${abs_path} && git branch comments \`git rev-list --max-parents=0 HEAD | tail -n 1\` && git push -u origin comments`, report)
            }
        })
    }
})
