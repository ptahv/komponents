import React from 'react';
import ReactDOM from 'react-dom'

import './Fullscreen.css';

export default ({modal, children}) => {
    const node = document.createElement('div');
        
    node.className = [
        'komponents-fullscreen',
        styles.screen,
        modal && 'komponents-fullscreen-modal'
    ].filter(Boolean).join(' ');

    document.body.appendChild(node);

    React.useEffect(() => () => 
        node && document.body.removeChild(node)
    , []);
        
    return ReactDOM.createPortal(
        children,
        node
    );
}
