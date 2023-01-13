const students = [
]

students.forEach(student => {
    const hash = student.split('@')[0].split('').map(c => c.charCodeAt(0)).reduce((v, s) => v + (s + 1), 1);
    const hash100raw = Math.floor(hash / 100);
    const hash100 = hash100raw % 16;
    const hash10 = Math.floor((hash - hash100raw * 100) / 10) % 16;
    const hash1 = hash - hash100raw * 100 - hash10 * 10;
    const color = `F${hash100.toString(16)}F${hash10.toString(16)}F${hash1.toString(16)}`.toUpperCase();

    console.log(student, color, `RGB(${240 + hash100}, ${240 + hash10}, ${240 + hash1})`);
});  