import React from 'react';
import './Filters.styles.css';

const Filters = ({ onClick, selected }) => {
	const filters = ['All', 'Active', 'Completed'];
	return (
		<div className='filters'>
			{filters.map((item, i) => {
				return (
					<span
						key={i}
						onClick={() => onClick(item)}
						className={`filter-item ${
							selected === item ? 'selected' : ''
						}`}>
						{item}
					</span>
				);
			})}
		</div>
	);
};

export default Filters;
