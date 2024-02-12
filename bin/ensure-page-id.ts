import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { v4 as uuid } from 'uuid';

export const ensurePageId = (file: string) => {
    if (!(file.endsWith('.md') || !file.endsWith('.mdx')) || path.basename(file).startsWith('_')) {
        return;
    }
    const fm = matter.read(file);
    fm.data.sidebar_custom_props = {
        ...(fm.data.sidebar_custom_props || {}),
    }
    if (!fm.data.sidebar_custom_props.id) {
        fm.data.sidebar_custom_props.id = uuid();
        fs.writeFileSync(
            file,
            matter.stringify(fm.content, fm.data),
            {encoding: 'utf8'}
        )
        return true;
    }
    return false;
}
