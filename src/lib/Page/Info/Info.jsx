import React from 'react';

export default ({
	style = {},
	
	children,
	
	...props
}) => (
	<div 
		style={{...css`
			width-max 
			padding 
			padding-top-half 
			padding-bottom-half 
			position-relative
			background-color-secondary`,
			...style}}
		{...props}
		// className={'w-100 px-3 py-2 position-relative bg-secondary ' + className}
		>
		{children}
	</div>
)