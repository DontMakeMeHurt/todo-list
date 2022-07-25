import './App.css';
import React, { useState, useEffect } from 'react';
import './css/Todo.css';
import Header from './Component/Header';
import Form from './Component/Form';
import TodoList from './Component/TodoList';
const App = () => {
	const initialState = JSON.parse(localStorage.getItem('todos')) || [];
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState(initialState);
	const [editTodo, setEditTodo] = useState(null);
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="container">
			<div className="container__app">
				<div>
					<Header />
				</div>
				<div>
					<Form
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						editTodo={editTodo}
						setEditTodo={setEditTodo}
					/>
				</div>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					editTodo={editTodo}
					setEditTodo={setEditTodo}
				/>
			</div>
		</div>
	);
};

export default App;
