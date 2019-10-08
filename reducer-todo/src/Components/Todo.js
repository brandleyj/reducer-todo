import React from "react";

const Todo = props => {
	return (
		<div
			className={`item${props.todo.completed ? " completed" : ""}`}
			onClick={() => props.toggleItem(props.item.id)}
		>
			<p>{props.todo.item}</p>
		</div>
	);
};

export default Todo;
