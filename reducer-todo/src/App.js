import React, { useReducer } from "react";
import "./App.css";
import Form from "./Components/Form";
import { reducer, initialState } from "./reducers/reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<Form dispatch={dispatch} />
		</div>
	);
}

export default App;
