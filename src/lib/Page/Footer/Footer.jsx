import React from 'react';

export default ({
	style = {},
	
	children,

	...props
}) => (
	<div
		// className={'px-3 py-2 border-top position-relative ' + className} 
		style={{...css`
			padding
			padding-top-half
			padding-bottom-half
			border-top
			position-relative`, 
			...style}}
		{ ...props }
		>
		{children}
	</div>
)