/**
 * 
 * @param {{test: RegExp, key: string, type: string}} optionConfig 
 * @param {string} configString 
 * @param {Object} options the parsed options returned
 * @returns 
 */
const processOption = (optionConfig, configString, options = {}) => {
    if (!configString) {
        return options;
    }
    if (optionConfig.test.test(configString)) {
        if (optionConfig.type === 'boolean') {
            options[optionConfig.key] = true;
            return options;
        }
        const res = configString.match(optionConfig.test);
        if (!res || !res.groups || !res.groups.value) {
            return options;
        }
        switch (optionConfig.type) {
            case 'int':
                const num = Number.parseInt(res.groups.value, 10);
                options[optionConfig.key] = num;
                break;
            case 'float':
            case 'number':
                const flt = Number.parseFloat(res.groups.value);
                options[optionConfig.key] = flt;
                break;
            default:
                options[optionConfig.key] = res.groups.value;
                break;
        }
    }
    return options;
}

module.exports = processOption;