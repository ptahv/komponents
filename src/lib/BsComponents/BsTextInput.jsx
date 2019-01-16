import React from 'react';

export default ({
    id, 
    label, 
    name, 
    className = '', 
    type='text', 
    
    validFeedback,
    invalidFeedback,
    ...props
}) => <>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} name={name || id} type={type} className={'form-control ' + className} {...props} />
    {invalidFeedback && <div className="invalid-feedback">{invalidFeedback}</div>}
    {validFeedback && <div className="invalid-feedback">{validFeedback}</div>}
</>