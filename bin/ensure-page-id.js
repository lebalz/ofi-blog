const fs = require('fs');
const matter = require('gray-matter');
const uuid = require('uuid');

/**
 * 
 * @param {string} file 
 */
function ensurePageId(file) {
    if (!file.endsWith('.md')) {
        return;
    }
    const fm = matter.read(file);
    fm.data.sidebar_custom_props = {
        ...(fm.data.sidebar_custom_props || {}),
    }
    if (!fm.data.sidebar_custom_props.id) {
        fm.data.sidebar_custom_props.id = uuid.v4();
        fs.writeFileSync(
            file,
            matter.stringify(fm.content, fm.data),
            {encoding: 'utf8'}
        )
    }
}

module.exports = ensurePageId;