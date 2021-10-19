const visit = require('unist-util-visit');
const path = require('path');
const url = require('url');
const fs = require('fs-extra');
const escapeHtml = require('escape-html');
const getFileLoaderUtils = require('@docusaurus/core/lib/webpack/utils').getFileLoaderUtils;
const posixPath = require('@docusaurus/utils').posixPath;
const escapePath = require('@docusaurus/utils').escapePath;
const toMessageRelativeFilePath = require('@docusaurus/utils').toMessageRelativeFilePath;
const {parseOptions, cleanedText} = require('./helpers');

/**
 * Supported config annotations:
 * @option --size
 * @option --width
 * @option --height
 */


const getOptions = (alt) => {
  const altText = cleanedText(alt);
  const options = parseOptions(alt, true);
  return {
    alt: alt,
    caption: altText || '',
    options: options
  }
}

const {
  loaders: { inlineMarkdownImageFileLoader },
} = getFileLoaderUtils();

/**
 * 
 * @param {Image} node 
 * @param {isInline} boolean
 * @param {string} pathUrl 
 */
const createJSX = (node, isInline, pathUrl, filePath) => {
  const dir = path.dirname(filePath);
  const ext = path.extname(node.url);
  const bibFile = path.resolve(dir, node.url.replace((new RegExp(`${ext}$`)), '.json'));
  let bib;
  if (fs.existsSync(bibFile)) {
    bib = require(bibFile);
  }
  const jsxNode = node;
  jsxNode.type = 'jsx';
  const { alt, caption, options } = jsxNode.alt ? getOptions(jsxNode.alt) : { alt: undefined, options: {} };

  jsxNode.value = `<Image 
    bib={${JSON.stringify(bib)}}
    caption="${caption}"
    options={${JSON.stringify(options)}}
    isInline={${isInline}}
    src={
      ${node.url
      ? `require("${inlineMarkdownImageFileLoader}${escapePath(
        pathUrl,
      )}").default`
      : ''
    }}
    ${alt ? ` alt="${escapeHtml(alt)}"` : ''}
    ${node.title ? ` title="${escapeHtml(node.title)}"` : ''}
    />`;

  if (jsxNode.url) {
    delete jsxNode.url;
  }
  if (jsxNode.alt) {
    delete jsxNode.alt;
  }
  if (jsxNode.title) {
    delete jsxNode.title;
  }
};

/**
 * 
 * @param {string} imagePath 
 * @param {string} sourceFilePath 
 */
async function ensureImageFileExist(imagePath, sourceFilePath) {
  const imageExists = await fs.pathExists(imagePath);
  if (!imageExists) {
    throw new Error(
      `Image ${toMessageRelativeFilePath(
        imagePath,
      )} used in ${toMessageRelativeFilePath(sourceFilePath)} not found.`,
    );
  }
}

/**
 * 
 * @param {Image} node 
 * @param {isInline} boolean
 * @param {PluginOptions} param1
 */
async function processImageNode(
  node,
  isInline,
  { filePath, staticDir },
) {
  if (!node.url) {
    throw new Error(
      `Markdown image URL is mandatory in "${toMessageRelativeFilePath(
        filePath,
      )}" file`,
    );
  }

  const parsedUrl = url.parse(node.url);
  if (parsedUrl.protocol) {
    // pathname:// is an escape hatch,
    // in case user does not want his images to be converted to require calls going through webpack loader
    // we don't have to document this for now,
    // it's mostly to make next release less risky (2.0.0-alpha.59)
    if (parsedUrl.protocol === 'pathname:') {
      node.url = node.url.replace('pathname://', '');
    }
  }
  // images without protocol
  else if (path.isAbsolute(node.url)) {
    // absolute paths are expected to exist in the static folder
    const expectedImagePath = path.join(staticDir, node.url);
    await ensureImageFileExist(expectedImagePath, filePath);
    createJSX(node, isInline, posixPath(expectedImagePath), filePath);
  }
  // We try to convert image urls without protocol to images with require calls
  // going through webpack ensures that image assets exist at build time
  else {
    // relative paths are resolved against the source file's folder
    const expectedImagePath = path.join(path.dirname(filePath), node.url);
    await ensureImageFileExist(expectedImagePath, filePath);
    createJSX(node, isInline, node.url.startsWith('./') ? node.url : `./${node.url}`, filePath);
  }
}

const plugin = (options) => {
  const transformer = async (root, file) => {
    const staticDir = `${file.cwd}/static`;
    const filePath = file.history[0];
    const promises = [];
    visit(
      root,
      (node) => {
        // select all parent nodes containing an image children...
        if (node.children && node.children.some(c => c.type === 'image')) {
          return true;
        }
        return false;
      },
      (node) => {
        if (!node.children) {
          return;
        }
        const isInline = node.children.length > 1;
        // paragraphs with only one image shall be div's
        if (!isInline && node.type === 'paragraph') {
          node.type = 'div';
          if (!node.data) {
            node.data = {}
          }
          if (!node.data.hProperties) {
            node.data.hProperties = {}
          }
          if (!node.data.hProperties.style) {
            node.data.hProperties.style = {}
          }
          node.data.hProperties.style = {...node.data.hProperties.style, display: 'flex', justifyContent: 'center'};
        }
        node.children.forEach((c) => {
          if (c.type !== 'image') {
            return;
          }
          promises.push(processImageNode(c, isInline, { filePath: filePath, staticDir: staticDir }));
        })
      }
    );
    if (promises.length > 0) {
      visit(root, 'root', (node) => {
        node.children.unshift(
          {
            type: 'import',
            value: "import Image from '@site/src/components/Image';"
          }
        )
      });
    }
    await Promise.all(promises);
  };
  return transformer;
};

module.exports = plugin;