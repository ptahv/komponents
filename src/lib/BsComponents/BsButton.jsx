import React from 'react' ;

import stringPropertyMapper from '../../utils/string-property-mapper.js';

const spMapper = stringPropertyMapper('className', {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-light',
    dark: 'btn-dark',
    link: 'btn-link',
    'outline-primary' : 'btn-outline-primary',
    'outline-secondary' : 'btn-outline-secondary',
    'outline-success' : 'btn-outline-success',
    'outline-danger' : 'btn-outline-danger',
    'outline-warning' : 'btn-outline-warning',
    'outline-info' : 'btn-outline-info',
    'outline-light' : 'btn-outline-light',
    'outline-dark' : 'btn-outline-dark',
    'outline-link' : 'btn-outline-link',
    large: 'btn-lg',
    small: 'btn-sm',
    block: 'btn-block',
    active: 'active',
    close: 'close',
})

export default ({type = 'button', ...props}) => {
    const _props = spMapper(props)

    return <button {...Object.assign({}, _props, {
        type,
        className: 'btn ' + _props.className
    })} />
}

