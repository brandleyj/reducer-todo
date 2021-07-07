import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	const todos = props.todos.todos;
	console.log(props);

	const toggleItem = id => {
		props.dispatch({ type: "TOGGLE_COMPLETED", payload: id });
	};

	const handleClear = e => {
		props.dispatch({ type: "CLEAR_COMPLETED" });
	};

	return (
		<div>
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} toggleItem={toggleItem} />
			))}
			<button onClick={handleClear}>Clear Completed</button>
		</div>
	);
};

export default TodoList;
