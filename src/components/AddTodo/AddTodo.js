import React from 'react';
import './AddTodo.styles.css';

const AddTodo = () => {
	return (
		<>
			<form className='form'>
				<input
					className='todo-input'
					type='text'
					name='todoitem'
					id='todoitem'
					placeholder='type your todo here'
				/>
				<button className='submit-btn'>+</button>
			</form>
		</>
	);
};

export default AddTodo;
