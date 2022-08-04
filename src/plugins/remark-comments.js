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
    const commentCounter = {
      paragraph: 0,
      table: 0,
      heading: 0,
      figure: 0
    }
    visit(
      root,
      Object.keys(commentCounter),
      function visitor(node, idx, parent) {
        // console.log(node, node.children);
        // console.log(parent);
        if (!node.children) {
          node.children = [];
        }
        if (node.children.some(el => el.type === 'comment')) {
          return;
        }
        parent.children[idx] = {
          type: 'div',
          data: {
            hName: 'div',
            hProperties: {
              className: ['commentable']
            }
          },
          children: [
            node,
            {
              type: 'html',
              data: {
                hName: 'Comment',
                hProperties: {
                  type: node.type,
                  nr: commentCounter[node.type]
                }
              },
              children: [
                {
                  type: 'text',
                  value: '.'
                }
              ]
            }
          ]
        }
        // node.children = [
        //   {
        //     type: 'comment',
        //     data: {
        //       hName: 'span',
        //       hProperties: {
        //         className: ['comment', node.type, `nr-${commentCounter[node.type]}`]
        //       }
        //     },
        //     value: `${node.type}-${commentCounter[node.type]}`
        //   }
        // ]
        commentCounter[node.type] += 1;
      }
    )
    // console.log(file.history[0], commentCounter)
  };
  return transformer;
};

module.exports = plugin;