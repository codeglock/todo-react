import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Background from './components/Background/Background';
import TodoWrapper from './components/TodoWrapper/TodoWrapper';

function App() {
	return (
		<div className='app'>
			<Background />
			<h1 className='title'>TODO</h1>
			<AddTodo />
			<TodoWrapper />
		</div>
	);
}

export default App;
