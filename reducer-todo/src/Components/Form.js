import React, { useState } from "react";

function Form({ dispatch }) {
	const [todo, setTodo] = useState("");

	const handleChanges = e => {
		setTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: todo });
		setTodo("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="task" value={todo} onChange={handleChanges} />
			<button type="submit">Add</button>
		</form>
	);
}

export default Form;
