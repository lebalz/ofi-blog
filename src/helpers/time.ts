export const slimTime = (ms: number) => {
    const t = new Date(ms).toISOString().slice(11, -5);
    if (t.startsWith('00:00')) {
        return `${t.slice(6).replace(/^0+/,'')}s`;
    }
    if (t.startsWith('00')) {
        return `${t.slice(3).replace(/^0+/,'')}m`;
    }
    return `${t.replace(/^0+/,'')}h`;
}

export const formatTime = (ms: number) => {
    const t = new Date(ms).toISOString().slice(11, -5);
    if (t.startsWith('00')) {
        return `${t.slice(3)} m`;
    }
    return `${t} h`;
};

export const formatDate = (date: Date) => {
    const [year, month, day] = date.toISOString().slice(0, 10).split('-');
    return `${day}.${month}.${year}`;
};
