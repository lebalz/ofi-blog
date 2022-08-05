const visit = require('unist-util-visit');

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
        commentCounter[node.type] += 1;
      }
    )
  };
  return transformer;
};

module.exports = plugin;