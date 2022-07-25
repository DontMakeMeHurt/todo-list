import React from 'react';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
	const handleDelete = ({ id }) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleComplete = (todo) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const handleEdit = ({ id }) => {
		const findTodo = todos.find((todo) => todo.id === id);
		setEditTodo(findTodo);
	};
	return (
		<ul className="todos-list">
			{todos.map((todo) => (
				<li className="list-item space" key={todo.id}>
					<input
						type="text"
						value={todo.title}
						className={`list ${todo.completed ? 'complete' : ''}`}
						onChange={(e) => e.target.preventDefault()}
						readOnly
					/>
					<div className="button-list">
						<button
							className="button-complete task-button"
							onClick={() => handleComplete(todo)}
						>
							<i className="bi bi-check-circle-fill"></i>
						</button>
						<button
							className="button-edit task-button"
							onClick={() => handleEdit(todo)}
						>
							<i className="bi bi-pencil-square"></i>
						</button>
						<button
							className="button-delete task-button"
							onClick={() => handleDelete(todo)}
						>
							<i className="bi bi-trash"></i>
						</button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
