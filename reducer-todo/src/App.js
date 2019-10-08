import React, { useReducer } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { reducer, initialState } from "./reducers/reducer";

function App() {
	const [todos, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<h1>Reducer Todo List</h1>
			<Form dispatch={dispatch} />
			<TodoList todos={todos} dispatch={dispatch} />
		</div>
	);
}

export default App;
