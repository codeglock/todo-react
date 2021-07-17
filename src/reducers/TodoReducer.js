import { v4 } from 'uuid';
import {
	ADD_TODO,
	CLEAR_ALL_TODO,
	DELETE_TODO,
	LOAD_PERSIST_TODOS,
	TOGGLE_TODO,
	UPDATE_TODO
} from './TodoActionTypes';

export const persistingTodos = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

export const TodoReducer = (state, action) => {
	const { type } = action;
	switch (type) {
		case ADD_TODO:
			let title = action.todo.title;
			let todos = [
				...state,
				{
					title: title,
					completed: false,
					addedTime: Date.now(),
					updatedTime: null,
					id: v4()
				}
			];
			persistingTodos(todos);
			return todos;
		case TOGGLE_TODO:
			let toggledTodos = state.map((todo) =>
				todo.id === action.id
					? {
							...todo,
							completed: action.completed,
							updatedTime: Date.now()
					  }
					: todo
			);
			console.log(toggledTodos);
			persistingTodos(toggledTodos);
			return toggledTodos;
		case UPDATE_TODO:
			let updatedTodos = state.map((todo) =>
				todo.id === action.todo.id
					? {
							...todo,
							title: action.todo.title,
							updatedTime: Date.now()
					  }
					: todo
			);
			persistingTodos(updatedTodos);
			return updatedTodos;
		case LOAD_PERSIST_TODOS:
			let persistTodos = JSON.parse(localStorage.getItem('todos'));
			//check if persistTodos is null

			if (persistTodos && persistTodos.length > state.length) {
				return [...state, ...persistTodos];
			}
			return state;
		case DELETE_TODO:
			let upState = state.filter((todo) => todo.id !== action.id);
			persistingTodos(upState);
			return upState;
		case CLEAR_ALL_TODO:
			state = [];
			localStorage.removeItem('todos');
			return [];
		default:
			return state;
	}
};
