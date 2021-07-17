import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import './FloatingActionButton.styles.css';

const FloatingActionButton = ({ onClick }) => {
	return (
		<div
			className='floating-action'
			aria-label='Delete all items'
			onClick={onClick}>
			<span className='clear-btn'>
				<DeleteIcon width='30' height='30' color='#2f16ec' />
			</span>
		</div>
	);
};

export default FloatingActionButton;
