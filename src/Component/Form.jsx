/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
	const onInputChange = (e) => {
		setInput(e.target.value);
	};

	const updateTodo = (title, id, completed) => {
		const newTodo = todos.map((todo) =>
			todo.id === id ? { title, id, completed } : todo
		);
		setTodos(newTodo);
		setEditTodo('');
	};
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	});

	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		} else {
			setInput('');
		}
	}, [setInput, editTodo]);

	const onFormSubmit = (e) => {
		e.preventDefault();
		if (!editTodo) {
			setTodos([
				...todos,
				{ id: uuidV4(), title: input, completed: false },
			]);
			setInput('');
		} else {
			updateTodo(input, editTodo.id, editTodo.completed);
		}
	};
	return (
		<form onSubmit={onFormSubmit}>
			<input
				ref={inputRef}
				type="text"
				placeholder="Enter a Todo..."
				className="task-input"
				value={input}
				required
				onChange={onInputChange}
				autofocus
			/>
			<button className="button-add" type="submit">
				{editTodo ? 'Change ' : 'Add Todo'}
			</button>
		</form>
	);
};

export default Form;
