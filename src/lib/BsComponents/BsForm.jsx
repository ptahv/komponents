import React from 'react';

export default Object.assign(({submitted = false, className = '', ...props}) => {
    const formClassName = 'needs-validation ' + (submitted && 'was-validated ') + className;

    return <form className={formClassName} {...props} noValidate />
}, {
    Group: ({className = '', ...props}) => (
        <div className={'form-group ' + className} {...props} />
    ),
    Check: ({className = '', ...props}) => (
        <div className={'form-check ' + className} {...props} />
    )
})