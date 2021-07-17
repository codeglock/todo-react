import React from 'react';
import TickIcon from '../Icons/TickIcon';
import './CheckBox.styles.css';

const CheckBox = ({ handleChange, selected }) => {
	return (
		<div
			className={`checkbox-wrapper checkbox-wrapper-${
				selected ? 'checked' : 'unchecked'
			}`}
			onClick={() => handleChange(!selected)}>
			{selected && <TickIcon width='16' height='16' color='#2f16ec' />}
		</div>
	);
};

export default CheckBox;
