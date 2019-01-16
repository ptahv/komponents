import React from 'react';

export default ({
    id, 
    label, 
    className = '', 
    type='checkbox', 

    validFeedback,
    invalidFeedback,
    ...props
}) => (
    <div className='form-check'>
        <input id={id} name={name || id} type={type} className={'form-check-input ' + className} {...props} />
        {label && <label className='form-check-label' htmlFor={id}>{label}</label>}
        {invalidFeedback && <div className="invalid-feedback">{invalidFeedback}</div>}
        {validFeedback && <div className="invalid-feedback">{validFeedback}</div>}
    </div>
)