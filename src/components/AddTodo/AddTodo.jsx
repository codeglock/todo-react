import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { ADD_TODO } from '../../reducers/TodoActionTypes';
import './AddTodo.styles.css';

const AddTodo = () => {
	const { dispatch } = useContext(TodoContext);

	const [todo, setTodo] = useState('');
	var KEY_ESCAPE = 27;

	const handleClear = (e) => {
		if (e.keyCode === KEY_ESCAPE) {
			setTodo('');
		}
	};
	const onChange = (e) => {
		setTodo(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ADD_TODO, todo: { title: todo } });
		setTodo('');
	};
	return (
		<>
			<form className='form' onSubmit={onSubmit}>
				<input
					onKeyDown={handleClear}
					className='todo-input'
					type='text'
					onChange={onChange}
					value={todo}
					name='todoitem'
					id='todoitem'
					placeholder='type your todo here - press Esc to clear typings'
				/>
				<button
					className='submit-btn'
					style={{
						opacity: !todo && '0',
						right: todo ? '0' : '-19px'
					}}>
					+
				</button>
			</form>
		</>
	);
};

export default AddTodo;
