import React, { useState } from "react";

function Form({ dispatch }) {
	const [todo, setTodo] = useState("");

	const handleChanges = e => {
		setTodo(e.target.value);
	};

	return (
		<form onSubmit={() => dispatch({ type: "ADD_TODO", payload: todo })}>
			<input type="text" name="task" value={todo} onChange={handleChanges} />
			<button type="submit">Add</button>
		</form>
	);
}

export default Form;
