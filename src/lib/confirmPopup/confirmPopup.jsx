import React from 'react';
import ReactDOM from 'react-dom'
 
import Popup from '../Popup/Popup.jsx';
import Button from '../Button/Button.js';

export default ({
    value,
    onSuccess,
    onCancel,

    confirmText = 'Confirm',
    acceptText = 'Accept',
    cancelText = 'Cancel',

    style = {},
    className = '',
}) => {
    
    const node = document.createElement('div');
    document.body.appendChild(node);

    const handleSuccess = () => {
        document.body.removeChild(node);
        
        if (onSuccess)
            onSuccess();
    }

    const handleCancel = () => {
        document.body.removeChild(node);
        
        if (onCancel)
            onCancel();
    }

    render(
        <Popup header={confirmText} onClose={onCancel}>
            <div
                className={className}
                style={{ ...css`margin-bottom`, ...style}}
                >
                {value}
            </div>

            <Button primary
                value={acceptText}
                onClick={handleSuccess}
                />
            
            <Button link
                value={locales.cancel}
                onClick={handleCancel}
                />
        </Popup>,
        
        node
    )
}