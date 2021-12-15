import {ADD_ITEM, DELETE_ITEM, INIT_TODO, UPDATE_STATUS} from "../constants/constants";

const todoListReducer = (state = {todoItemList: []}, action) => {
    switch (action.type) {
        case INIT_TODO:
            return {...state, todoItemList: action.payload};

        case ADD_ITEM:
            return {...state, todoItemList: [...state.todoItemList, action.payload]};

        case UPDATE_STATUS:
            const newListAfterUpdate = state.todoItemList.map(item => (
                item.id === action.payload.id ? action.payload : item
            ));
            return {...state, todoItemList: newListAfterUpdate};

        case DELETE_ITEM:
            const newListAfterDelete = state.todoItemList.filter(item => item.id !== action.payload);
            return {...state, todoItemList: newListAfterDelete};

        default:
            console.log(state.todoItemList);
            return state;
    }
}

export default todoListReducer;