const todoListReducer = (state = {todoItemList: []}, action) => {
    switch (action.type) {
        case "updateList":
            return {...state, todoItemList: [...state.todoItemList, action.payload]}
        default:
            return state;
    }
}

export default todoListReducer;