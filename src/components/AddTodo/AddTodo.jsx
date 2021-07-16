import React,{useState} from 'react';
import './AddTodo.styles.css';

const AddTodo = () => {
	const [todo, setTodo] = useState('');
	var KEY_ESCAPE = 27;

	const handleClear = (e)=>{
		if(e.keyCode === KEY_ESCAPE){
			setTodo('')
		}
	}
	const onChange = (e) => {
		setTodo(e.target.value)
	}

	const onSubmit = (e) =>{
		e.preventDefault()
	}
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
				<button className='submit-btn' style={{opacity: !todo && '0', right: todo ? '0':'-19px'}}>+</button>
			</form>
		</>
	);
};

export default AddTodo;
