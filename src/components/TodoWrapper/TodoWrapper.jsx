import React from 'react';
import Filters from '../Filters/Filters';
import FloatingActionButton from '../Filters/FloatingActionButton';
import TodoItem from '../TodoItem/TodoItem';
import './TodoWrapper.styles.css'

const TodoWrapper = () => {
	return (
		<div className="todo-wrapper">
			<Filters/>
			<div className="todo-container">
				{
					[1,2,3,4,5,6,7,8,9,10,11,12].map((i)=>{
						return <TodoItem item={i} key={i}/>
					})
				}
			</div>
			<FloatingActionButton/>
		</div>
	);
};

export default TodoWrapper;
