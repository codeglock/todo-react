import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import {
	DELETE_TODO,
	TOGGLE_TODO,
	UPDATE_TODO
} from '../../reducers/TodoActionTypes';
import CheckBox from '../CheckBox/CheckBox';
import CrossIcon from '../Icons/CrossIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import TickIcon from '../Icons/TickIcon';
import './TodoItem.styles.css';

const TodoItem = ({ item }) => {
	const [show, setShow] = useState(false);
	const [edit, setEdit] = useState(false);
	const [todo, setTodo] = useState(item);
	const { dispatch } = useContext(TodoContext);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, [edit]);

	const handleInput = (e) => {
		setTodo({ ...todo, title: e.target.value });
	};

	const cancelUpdate = () => {
		setEdit(false);
		setTodo(item);
	};
	const onSubmit = () => {
		if (item.title !== todo.title && todo.title.length > 0) {
			dispatch({
				type: UPDATE_TODO,
				todo: { ...todo }
			});
		} else {
			setTodo(item);
		}
		setEdit(false);
	};

	const toggleTodo = (n) => {
		dispatch({
			type: TOGGLE_TODO,
			id: todo.id,
			completed: n
		});
	};

	const deleteTodo = () => {
		window.confirm('Are you sure you want to delete this todo?') &&
			dispatch({
				type: DELETE_TODO,
				id: todo.id
			});
	};

	return (
		<div
			className='todo-item-wrapper'
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			<CheckBox selected={item.completed} handleChange={toggleTodo} />
			<div className='todo-item'>
				<input
					className={`todo-item-input ${edit && 'editing'} ${
						item.completed && 'title-completed'
					}`}
					type='text'
					ref={inputRef}
					autoFocus={true}
					onChange={handleInput}
					value={todo.title}
					name='todoitem'
					id={item.id}
					disabled={!edit}
					placeholder='update your todo'
				/>
				<span className='added-date'>
					{new Date(todo.addedTime).toLocaleDateString('en-US')}
				</span>
				{edit ? (
					<>
						<div onClick={onSubmit} className='update-btn'>
							<TickIcon width={20} height={20} color='green' />
						</div>
						<div onClick={cancelUpdate} className='cancel-btn'>
							<CrossIcon width={16} height={16} color='red' />
						</div>
					</>
				) : (
					show && (
						<>
							<div
								onClick={() => setEdit(true)}
								className='edit-btn'>
								<EditIcon width={16} height={16} color='red' />
							</div>
							<div onClick={deleteTodo} className='delete-btn'>
								<DeleteIcon
									width={16}
									height={16}
									color='red'
								/>
							</div>
						</>
					)
				)}
			</div>
		</div>
	);
};

export default TodoItem;
