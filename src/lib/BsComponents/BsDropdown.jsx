import React from 'react' ;

export default Object.assign(({className = '', ...props}) => (
    <div className={'dropdown ' + className} {...props} />
), {
    Menu: ({className = '', ...props}) => (
        <div className={'dropdown-menu ' + className} {...props} />
    ),
    Item: ({className = '', ...props}) => (
        <a href="#" className={'dropdown-item ' + className} {...props} />
    ),
    Divider: ({className = '', ...props}) => (
        <div className={'dropdown-menu ' + className} {...props} />
    )
})