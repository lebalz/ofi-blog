/**
 * This script is used to create a personalised static website for each user.
 * It reads the user data from the bin/user-data folder and creates a zip file for each user.
 * 
 * Make sure to
 * - install zip on your system (sudo apt-get install zip)
 * - change the USER_FILE_NAME to the path of the user file in your project	(search for `JSON.parse('{"user"` in the compiled `build/assets/js/*.js` file to find the path)
 * - change `userFileContent` function to match the format of the user file in your project (changes on each build!)
 * - run `yarn run create:userblogs` to create the personalised static websites (eventually, you may need to add `"module": "commonjs"` to the compiler options in `tsconfig.json` file to run this script)
 */

import fs from 'fs';
import child_process from 'child_process';
import { dirname, join } from 'path';

console.log(__dirname, dirname(__dirname));

const USER_FILE_NAME = './build/assets/js/175.04b68400.js'
const userFileContent = (data: string) => {
    return `"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[175],{20175:e=>{e.exports=JSON.parse(\`${data}\`)}}]);`
}

fs.readdirSync('./bin/user-data').forEach((file) => {
    console.log(file);
    const zipOutName = join(__dirname, '../', file.replace('.json', '.zip'));
    console.log()
    const data = JSON.parse(fs.readFileSync(`./bin/user-data/${file}`, 'utf8'));
    fs.writeFileSync(USER_FILE_NAME, userFileContent(JSON.stringify(data).replace(/\\/g, '\\\\')));
    child_process.execSync(`zip -r ${zipOutName} *`, {
        cwd: join(__dirname, '../build')
    });
    console.log('Done', zipOutName);
});