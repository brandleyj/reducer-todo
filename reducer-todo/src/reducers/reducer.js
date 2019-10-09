export const initialState = {
	todos: [
		{
			item: "Learn about reducers",
			completed: false,
			id: 3892987589
		}
	]
};

export function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO":
			const newTodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state,
				todos: [...state.todos, newTodo]
			};
		case "TOGGLE_COMPLETED":
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.payload) {
						return {
							...todo,
							completed: !todo.completed
						};
					} else {
						return todo;
					}
				})
			};

		case "CLEAR_COMPLETED":
			return {
				...state,
				todos: state.todos.filter(item => !item.completed)
			};

		default:
			return state;
	}
}
