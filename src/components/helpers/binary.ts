const chunk = <T>(arr: T[], chunkSize: number): T[][] => {
    if (chunkSize <= 0) {
        throw 'Invalid chunk size';
    }
    const r: T[][] = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
        r.push(arr.slice(i, i + chunkSize));
    }
    return r;
};

const fromBin = (bin: string, slice?: number) => {
    bin = bin.trim().replace(/^0+/, '');
    if (slice && bin.length > slice) {
        bin = bin.slice(bin.length - slice);
    }
    try {
        const ord = parseInt(bin, 2);
        return String.fromCodePoint(ord);
    } catch {
        return;
    }
};

const textChunks = (text: string, size: number, padChr: string = '0'): string[] => {
    const chunks: string[] = [];
    let sanitized = text.replace(/\s+/g, '');
    if (sanitized.length % size !== 0) {
        sanitized = sanitized.padStart(sanitized.length + (size - sanitized.length % size), '0');
    }
    while (sanitized.length > 0) {
        chunks.push(sanitized.slice(0, size));
        sanitized = sanitized.slice(size);
    }
    return chunks;
};

const controlBits = (octet: string) => {
    const m = octet.match(/^(?<control>1{1,4}0)/);
    if (!m) {
        return 0;
    }
    return m.groups.control.length - 1;
};

const fromUTF8 = (bin: string) => {
    let sanitized = bin.replace(/[^01]/g, '');
    if (sanitized.length % 8 !== 0) {
        sanitized = sanitized.padStart(Math.floor(sanitized.length / 8) * 8 + 8, '0');
    }
    const chunks = chunk(sanitized.split(''), 8).map((a) => a.join(''));
    const res = [];
    const tmp = [];
    let toEat = 0;
    chunks.forEach((seq) => {
        if (toEat === 0) {
            toEat = controlBits(seq);
        } else if (toEat > 0) {
            if (!seq.startsWith('10')) {
                console.warn('invalid sequence, expected to start with 10', seq);
                toEat = controlBits(seq);
            }
        }
        const data = seq.replace(/^1{1,4}0/, '');
        tmp.push(data)
        toEat = toEat - 1;
        if (toEat <= 0) {
            res.push(tmp.join(''));
            tmp.splice(0);
        }
    });
    return res.map((chr) => fromBin(chr)).join('')
};


export {fromUTF8, fromBin, chunk, textChunks};