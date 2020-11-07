import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
	return (
		<div style={{ color: todo.isCompleted ? 'gray' : '' }} className='todo'>
			{todo.text}
			<div className='button-holder'>
				<button onClick={() => completeTodo(index)}>Complete</button>

				<button onClick={() => removeTodo(index)}>remove</button>
			</div>
		</div>
	);
};

function TodoForm({ addTodo }) {
	const [value, setValue] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='enter todo...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
}

const App = () => {
	const [todos, setTodos] = useState([
		{
			text: 'Excercise for atleast an hour ',
			isCompleted: false,
		},
		{
			text: 'Drink atleast 15 glass of water',
			isCompleted: false,
		},
	]);
	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};
	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<div className='App'>
			<header>TODO LIST</header>
			<div className='todo-list'>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
