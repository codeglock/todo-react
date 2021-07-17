import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Background from './components/Background/Background';
import TodoWrapper from './components/TodoWrapper/TodoWrapper';
import TodoContextProvider from './context/TodoContext';

function App() {
	return (
		<TodoContextProvider>
			<div className='app'>
				<Background />
				<h1 className='title'>TODO</h1>
				<AddTodo />
				<TodoWrapper />
			</div>
		</TodoContextProvider>
	);
}

export default App;
