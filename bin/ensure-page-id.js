const fs = require('fs');
const matter = require('gray-matter');
const uuid = require('uuid');

/**
 * 
 * @param {string} file 
 */
function ensurePageId(file) {
    if (!file.endsWith('.md') || file.startsWith('_')) {
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
        return true;
    }
    return false;
}

module.exports = ensurePageId;