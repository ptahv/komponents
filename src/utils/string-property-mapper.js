export default (propKey, propMappings) => {
    const propMapKeys = Object.keys(propMappings)
    
    return (props = {}) => {
        const propKeys = Object.keys(props)
            .filter(key => key !== propKey);

        return {
            [propKey]: [props[propKey] || '']
                .concat(propKeys
                    .filter(p => propMapKeys.includes(p))
                    .map(p => propMappings[p]))
                .filter(Boolean)
                .join(' '),

            ...propKeys.reduce((retVal, key) => {
                if (!propMapKeys.includes(key))
                    retVal[key] = props[key];

                return retVal;
            }, {})
        }
    }
}