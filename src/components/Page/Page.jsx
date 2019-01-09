import React from 'react';

import Info from './Info/Info.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

export default Object.assign(({
	children,
	style = {},
	className=''
}) => (
	<div 
		className={className}	
		style={{...css`flex size-max`, ...style}}
		// className={'d-flex flex-column h-100 w-100 ' + className}
		> 
		{children}
	</div>
), {
	Info,
	Content,
	Footer
})