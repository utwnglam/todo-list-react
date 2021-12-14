import {ADD_ITEM, UPDATE_DONE} from "../constants/constants";

const todoListReducer = (state = {todoItemList: []}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const todoInfo = {id: state.todoItemList.length, text: action.payload, done: false};
            return {...state, todoItemList: [...state.todoItemList, todoInfo]};
        case UPDATE_DONE:
            let updateItem = state.todoItemList[action.payload];
            updateItem.done = !updateItem.done;
            state[action.payload] = updateItem;
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default todoListReducer;