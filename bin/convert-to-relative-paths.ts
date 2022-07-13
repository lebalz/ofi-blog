import { existsSync, lstatSync, Stats } from 'fs';
import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import recursiveReaddir from 'recursive-readdir';

const { sep } = path;
const { extname, dirname, join, relative } = path.posix;


type FileHandler = (fileContent: string, filePath: string, baseUrl: string) => string;
const isDirectory = (dirPath: string) => extname(dirPath) === '';

const cssRegExp = /url\(['"]?(?!(?:https?|ftp):\/\/)(\/[^'")]+)['"]?\)/g;

const handleCSS: FileHandler = (fileContent: string, filePath: string, baseUrl: string) => {
  const currentDirPath = dirname(filePath);
  const relativeDirPath = currentDirPath === '.' ? '.' : relative(currentDirPath, '');
  return fileContent.replace(cssRegExp, (_, absPath: string) => {
    const relPath = absPath.substring(absPath.startsWith(baseUrl) ? baseUrl.length : 1);
    const relativePath = join(relativeDirPath, relPath);
    return `url('${relativePath}')`;
  });
}

const htmlRegExp = /(href|src)="(?!(?:https?|ftp):\/\/)(\/[^"|#]*)"/g;

const handleHTML: FileHandler = (fileContent: string, filePath: string, baseUrl: string) => {
  const currentDirPath = dirname(filePath);
  const relativeDirPath = currentDirPath === '.' ? '.' : relative(currentDirPath, '');
  return fileContent.replace(htmlRegExp, (_, attribute: string, absPath: string) => {
    const relPath = absPath.substring(absPath.startsWith(baseUrl) ? baseUrl.length : 1);

    let relativePath = join(relativeDirPath, relPath);
    // console.log(currentDirPath, relativeDirPath, relPath, absPath, relativePath, filePath, existsSync(filePath), existsSync(filePath) && lstatSync(filePath).isFile());

    if (isDirectory(relativePath)) {
      if(relativePath.endsWith('.')) {
        relativePath = join(relativePath, 'index.html')
      } else {
        relativePath = `${relativePath}.html`;
      }
      console.log('NEEW', relativePath);
    }
    return `${attribute}='${relativePath}'`
    // return `${attribute}='${relativePath}'`;
  });
}

const handlers: { [ext: string]: FileHandler } = {
  ".html": handleHTML,
  ".css": handleCSS,
};

const isNotWebsiteTextualFile = (filePath: string, stats: Stats) =>
  !(stats.isDirectory() || handlers.hasOwnProperty(extname(filePath)));

  
async function postBuild({outDir, baseUrl}: {outDir: string, baseUrl: string}) {
  const filePaths = await recursiveReaddir(outDir, [isNotWebsiteTextualFile]);
  for (const filePath of filePaths) {
    const ext = extname(filePath);
    if (ext.length <= 0) {
      continue;
    }
    const handler: FileHandler | undefined = handlers[ext];
    if (handler === undefined) {
      continue;
    }
    const relativePath = relative(outDir, filePath).split(sep).join(path.posix.sep);
    const content = await readFile(filePath);
    await writeFile(filePath, handler(content.toString("utf8"), relativePath, baseUrl));
  }
  console.log(`Successful Converted absolute paths to relative.`);
}

postBuild({outDir: 'build_rel', baseUrl: '/'}).then((res) => {
  console.log('Success', res);
}).catch((err) => {
  console.log('Error', err);
})