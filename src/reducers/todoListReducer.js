import {ADD_ITEM, DELETE_ITEM, UPDATE_STATUS} from "../constants/constants";

const todoListReducer = (state = {todoItemList: []}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, todoItemList: [...state.todoItemList, action.payload]};

        case UPDATE_STATUS:
            const newListAfterUpdate = state.todoItemList.map(item => (
                item.id === action.payload ? {...item, done: !item.done} : item
            ))
            return {...state, todoItemList: newListAfterUpdate};

        case DELETE_ITEM:
            const newListAfterDelete = state.todoItemList.filter(item => item.id !== action.payload)
            return {...state, todoItemList: newListAfterDelete};
        default:
            return state;
    }
}

export default todoListReducer;