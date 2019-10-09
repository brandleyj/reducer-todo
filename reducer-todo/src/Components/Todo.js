import React from "react";

const Todo = props => {
	return (
		<div
			className={`item${props.todo.completed ? " completed" : ""}`}
			onClick={() => props.toggleItem(props.todo.id)}
		>
			<p>{props.todo.item}</p>
		</div>
	);
};

export default Todo;
