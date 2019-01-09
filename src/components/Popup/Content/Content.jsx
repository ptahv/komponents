import React from 'react';

export default ({className = '', style = {}, children, ...props}) => (
    <div style={{
        maxHeight: '90vh',
        maxWidth: '90vh',
        ...css`
            overflow-auto 
            padding 
            padding-left-half 
            padding-right-half`,
        ...style}}
        // className={styles.content + ' px-3 py-2 ' + className} 
        {...props}>
        {children}
    </div>
)
