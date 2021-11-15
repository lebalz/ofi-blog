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
