const initialState = {
    lists: []
}

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "SAVE_LIST":
			return {
				...state,
				lists: [...state.lists, {list: action.payload}]
			};
		default:
			return state;
	}
}