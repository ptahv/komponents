import React from 'react';

export default ({
	style = {},
	
	onScrollBottom,

	children,
	
	...props
}) => (
	<div 
		style={{...css`
			flex
			overflow-auto
			position-relative`,
			...style}}

		onScroll={!onScrollBottom ? null : (e) => {
			const {target} = e;
		
			if (!target) 
				return null;
		
			const scrollHeight = target.scrollHeight - target.offsetHeight;
		
			if (scrollHeight - target.scrollTop <= 200) {
				onScrollBottom(e);
			}
		}}>
		{children}

		<div style={css`position-absolute top left right`}>
			<div style={{ 
				height: 5,
				boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 2px -4px inset',
				...css`position-fixed width-max` 
			}} />
		</div>
	</div>
)