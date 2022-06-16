 const defaultUnit = (value: string | number, unit: string = "px") => {
    // when only a number is given, add the default unit
    if (/^\d+(\.\d*)?$/.test(`${value}`)) {
        return `${value}${unit}`;
    }
    return `${value}`;
};

export {
    defaultUnit
}