import React from 'react';

import Fullscreen from '../Fullscreen/Fullscreen.jsx';

// import styles from './Popup.module.css';

import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

export default Object.assign(({
    header, 

    onClose,

    style = {},
    className = '',

    children
}) => (
    <Fullscreen modal>
        <div 
            style={css`width-max height-max`}
            // className='w-100 h-100'
            onClick={onClose}
            >
            <div 
                style={{
                    transform: 'translateY(-50%)',
                    ...css`
                        position-absolute,
                        shadow
                        top-half
                        left-half
                        background-color-white`,
                    ...style
                }}
                className={className}
                onClick={e => e.stopPropagation()}
                style={style}
                >

                {onClose && (
                    <Button close
                        style={{
                            zIndex: 999, 
                            ...css`
                            position-absolute
                            top
                            right`
                        }} 
                        // className={'close ' + styles.closeButton}
                        onClick={onClose} />
                )}

                {header && (
                    
                    <div
                        style={css`
                            background-color-white
                            padding
                            padding-horizontal-half
                            margin-none
                            border-bottom
                        `}>
                        <div className='header'> {header} </div>
                    </div>
                )}
                {children}
            </div>
        </div>
    </Fullscreen>
), {
    Content,
    Footer
});