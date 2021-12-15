import '../index.css';
import {useDispatch} from "react-redux";
import {DELETE_ITEM, UPDATE_STATUS} from "../constants/constants";

const TodoItem = ({item}) => {
    const dispatch = useDispatch();
    const updateDoneState = () => {
        dispatch({type: UPDATE_STATUS, payload: item.id});
    }
    const deleteItem = () => {
        dispatch({type: DELETE_ITEM, payload: item.id});
    }

    const todoStatus = item.done ? "item-done" : "";
    return (
        <div className="todo-item">
            <span className={`todo-item-text ${todoStatus}`} onClick={updateDoneState}>
                <p>{item.text}</p>
            </span>
            <button
                className="delete-button"
                onClick={deleteItem}>❌
            </button>
        </div>
    );
}

export default TodoItem;