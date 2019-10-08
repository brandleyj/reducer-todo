import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	const todos = props.todos.todos;
	console.log(props);
	return (
		<div>
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
			))}
			<button onClick={todos.clearTodo}>Clear Completed</button>
		</div>
	);
};

export default TodoList;
