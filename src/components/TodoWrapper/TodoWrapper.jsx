import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import NotFoundImage from '../../assets/images/404.png';
import {
	CLEAR_ALL_TODO,
	LOAD_PERSIST_TODOS
} from '../../reducers/TodoActionTypes';
import Filters from '../Filters/Filters';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';
import TodoItem from '../TodoItem/TodoItem';
import './TodoWrapper.styles.css';

const TodoWrapper = () => {
	const { todos, dispatch } = useContext(TodoContext);
	const [filteredTodos, setFilteredTodos] = useState(todos);
	const [selected, setSelected] = useState('All');

	useEffect(() => {
		dispatch({ type: LOAD_PERSIST_TODOS });
		filterItems(selected);
		// eslint-disable-next-line
	}, [todos]);

	const filterItems = (filter) => {
		setSelected(filter);
		if (filter === 'Active') {
			setFilteredTodos(todos.filter((todo) => todo.completed === false));
		}
		if (filter === 'All') {
			setFilteredTodos(todos.sort((a, b) => b.addedTime - a.addedTime));
		}
		if (filter === 'Completed') {
			let completed = todos.filter((todo) => todo.completed === true);
			setFilteredTodos(
				completed.sort((a, b) => b.updatedTime - a.updatedTime)
			);
		}
	};
	const handleClear = () => {
		window.confirm('Are you sure you want to clear all todos?') &&
			dispatch({ type: CLEAR_ALL_TODO });
	};
	return (
		<div className='todo-wrapper'>
			<Filters onClick={filterItems} selected={selected} />
			<div className='todo-container'>
				{filteredTodos.length > 0 ? (
					filteredTodos.map((i) => {
						return <TodoItem item={i} key={i.id} />;
					})
				) : (
					<div className='no-todos'>
						<img src={NotFoundImage} alt='' />
						<h2>NO TODOS YET</h2>
					</div>
				)}
			</div>
			{filteredTodos.length > 0 && (
				<FloatingActionButton onClick={handleClear} />
			)}
		</div>
	);
};

export default TodoWrapper;
