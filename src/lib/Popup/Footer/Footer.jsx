import React from 'react';

export default ({ style = {}, children }) => (
    <div
        style={{
            ...css`
                text-align-center
                background-color-white
                border-top
                padding
                padding-horizontal-half`,
            ...style}}
        {...props}>
        {children}
    </div>
)