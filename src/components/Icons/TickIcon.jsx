import React from 'react';

const TickIcon = ({ width, height, color }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			id='bold'
			enableBackground='new 0 0 24 24'
			viewBox='0 0 24 24'
			width={width}
			height={height}
			fill={color}>
			<g>
				<path d='m9.707 19.121c-.187.188-.442.293-.707.293s-.52-.105-.707-.293l-5.646-5.647c-.586-.586-.586-1.536 0-2.121l.707-.707c.586-.586 1.535-.586 2.121 0l3.525 3.525 9.525-9.525c.586-.586 1.536-.586 2.121 0l.707.707c.586.586.586 1.536 0 2.121z' />
			</g>
		</svg>
	);
};

export default TickIcon;
