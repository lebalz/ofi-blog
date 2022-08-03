
export interface ToolbarOptions {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    color?: boolean;
    background?: boolean;
    ul?: boolean;
    ol?: boolean;
    formula?: boolean;
    code?: boolean;
    image?: boolean;
}

export const TOOLBAR_BASE = [['bold', 'italic', 'underline']];

export const TOOLBAR = [
    ...TOOLBAR_BASE,
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['image'],
];

export const getToolbar = (options: ToolbarOptions) => {
    const toolbar = [];
    if (options.bold || options.italic || options.underline) {
        const marker = [];
        if (options.bold) {
            marker.push('bold');
        }
        if (options.italic) {
            marker.push('italic');
        }
        if (options.underline) {
            marker.push('underline');
        }
        toolbar.push(marker);
    }
    if (options.h1 || options.h2 || options.h3) {
        const h = [];
        if (options.h1) {
            h.push(1);
        }
        if (options.h2) {
            h.push(2);
        }
        if (options.h3) {
            h.push(3);
        }
        h.push(false);
        toolbar.push(h);
    }
    if (options.color || options.background) {
        const c = [];
        if (options.color) {
            c.push({ color: [] });
        }
        if (options.background) {
            c.push({ background: [] });
        }
        toolbar.push(c);
    }
    if (options.ul || options.ol) {
        const l = [];
        if (options.ol) {
            l.push({ list: 'ordered' });
        }
        if (options.ul) {
            l.push({ list: 'bullet' });
        }
        toolbar.push(l);
    }
    if (options.formula || options.image) {
        const visuals = [];
        if (options.formula) {
            visuals.push('formula');
        }
        if (options.image) {
            visuals.push('image');
        }
        toolbar.push(visuals);
    }
    if (options.code) {
        toolbar.push(['code-block']);
    }
    return toolbar;
};


export const FORMATS = [
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'indent',
    'size',
    'width',
    'header',
    'link',
    'image',
    'video',
    'color',
    'background',
    'clean',
    'code-block',
    'indent',
    'blockquote',
    'script',
    'code',
];