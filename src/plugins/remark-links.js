const visit = require('unist-util-visit');
const escapeHtml = require('escape-html');
const posixPath = require('@docusaurus/utils').posixPath;
const escapePath = require('@docusaurus/utils').escapePath;
const { parseOptions, getFileUrl, cleanedText } = require('./helpers');
const getFileLoaderUtils = require('@docusaurus/utils').getFileLoaderUtils;
const path = require('path');

const {
  loaders: { inlineMarkdownLinkFileLoader },
} = getFileLoaderUtils();

const prepareWrapperNode = (node) => {
  node.type = 'div';
  node.data = {
    hProperties: {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }
  }
}

const plugin = (options) => {
  const transformer = async (root, file) => {
    const staticDir = `${file.cwd}/static`;
    const filePath = file.history[0];
    const promises = [];
    let hasPdf = false;
    visit(
      root,
      (node) => {
        return (node.children && node.children.length === 1 && node.children[0].type === 'link')
      },
      (node) => {
        const linkNode = node.children[0];
        let text = (linkNode.children || []).reduce((prev, val) => {
          if (val.type === 'text') {
            return [...prev, val.value];
          }
          return prev
        }, []).join(' ')
        if (/@pdf/.test(text)) {
          hasPdf = true;
          const processPdf = async () => {
            const fileName = path.basename(linkNode.url);
            const options = parseOptions(text, true);
            const pdfPath = await getFileUrl(linkNode, [staticDir], filePath);
            const pathUrl = posixPath(pdfPath);
            const src = `require("${inlineMarkdownLinkFileLoader}${escapePath(pathUrl)}").default`
            prepareWrapperNode(node);
            linkNode.type = 'jsx';
            linkNode.value = `<PdfViewer 
              file={${src}}
              name="${fileName}"
              page={${options.page}}
              width={${options.width}}
              minWidth={${options.minWidth}}
              noDownload={${options.noDownload}}
              scale={${options.scale}}
            />`;
            if (linkNode.url) {
              delete linkNode.url;
            }
          }
          promises.push(processPdf())
        }
        if (/@video/.test(text)) {
          const processVideo = async () => {
            const videoPath = await getFileUrl(linkNode, [staticDir], filePath);
            const pathUrl = posixPath(videoPath);
            const src = `require("${inlineMarkdownLinkFileLoader}${escapePath(pathUrl)}").default`
            const options = parseOptions(text, true);
            const {muted} = options;
            if (muted) {
              delete options.muted;
            }
            prepareWrapperNode(node);

            linkNode.type = 'jsx';
            linkNode.value = `<video
              autoPlay={"autoplay"} 
              muted={${!!muted}}
              controls
              style={${JSON.stringify(options)}}
              src={${src}}
            ></video>`;
            if (linkNode.url) {
              delete linkNode.url;
            }
          }
          promises.push(processVideo())
        }
        if (/@audio/.test(text)) {
          const processAudio = async () => {
            const audioPath = await getFileUrl(linkNode, [staticDir], filePath);
            const pathUrl = posixPath(audioPath);
            const src = `require("${inlineMarkdownLinkFileLoader}${escapePath(pathUrl)}").default`
            const options = parseOptions(text, true);
            node.type = 'div';
            const audioType = `audio/${options.type || 'mpeg'}`;
            if (options.type) {
              delete options.type;
            }
            linkNode.type = 'jsx';
            linkNode.value = `<audio controls>
                <source 
                  src={${src}}
                  type="${audioType}"
                  style={${JSON.stringify(options)}}
                />
            </audio>`
            if (linkNode.url) {
              delete linkNode.url;
            }
          }
          promises.push(processAudio())
        }
        if (/@youtube/.test(text)) {
          const options = parseOptions(text, true);
          const processVideo = async () => {
            prepareWrapperNode(node);
            linkNode.type = 'jsx';
            const url = linkNode.url;
            linkNode.value = `<iframe
              width="${options.width || '100%'}"
              height="${options.height || '315px'}"
              src="${url}"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>`;
            if (linkNode.url) {
              delete linkNode.url;
            }
          }
          promises.push(processVideo())
        }
        if (/@circuitverse/.test(text)) {
          const options = parseOptions(text, true);
          const processCV = async () => {
            prepareWrapperNode(node);
            linkNode.type = 'jsx';
            const url = linkNode.url;
            linkNode.value = `<iframe
              width="${options.width || '100%'}"
              height="${options.height || '315px'}"
              src="${url}"
              title="Circuit Vert"
              scrolling="no"
              frameBorder="0"
              webkitAllowFullScreen
              mozAllowFullScreen
              allowFullScreen
              ></iframe>`;
            if (linkNode.url) {
              delete linkNode.url;
            }
          }
          promises.push(processCV())
        }
        if (/@vimeo/.test(text)) {
          const options = parseOptions(text, true);
          const processVideo = async () => {
            prepareWrapperNode(node);
            linkNode.type = 'jsx';
            const url = linkNode.url;
            linkNode.value = `<iframe
              width="${options.width || '100%'}"
              height="${options.height || '315px'}"
              src="${url}"
              title="vimeo-player"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen></iframe>`;
            if (linkNode.url) {
              delete linkNode.url;
            }
          }
          promises.push(processVideo())
        }
        if (/@upload/.test(text)) {
          text = text.replace(/\s*@upload\s*/, '')
          text += ' @button --type=success'
        }
        if (/@download/.test(text)) {
          text = text.replace(/\s*@download\s*/, '')
          text += ' @button --type=warning'
        }
        if (/@button/.test(text)) {
          const options = parseOptions(text, true);
          const processButton = async () => {
            const btype = options.type || 'primary';
            // console.log(linkNode, linkNode.children[0].position);
            linkNode.data = {
              hProperties: {
                className: ['button', `button--${btype}`]
              }
            }
            const val = cleanedText(text).replace(/\s*@button\s*/, '');
            linkNode.children = [
              {
                type: 'text',
                value: val
              }
            ]
          }
          promises.push(processButton())
        }
      }
    )

    if (hasPdf) {
      visit(root, 'root', (node) => {
        node.children.unshift(
          {
            type: 'import',
            value: "import PdfViewer from '@site/src/components/PdfViewer';"
          }
        )
      });
    }
    await Promise.all(promises);
  };
  return transformer;
};

module.exports = plugin;