import {UPDATE_LIST} from "../constants/constants";

const todoListReducer = (state = {todoItemList: []}, action) => {
    switch (action.type) {
        case UPDATE_LIST:
            return {...state, todoItemList: [...state.todoItemList, action.payload]}
        default:
            return state;
    }
}

export default todoListReducer;