import '../index.css';
import {useDispatch} from "react-redux";
import {DELETE_ITEM, UPDATE_DONE} from "../constants/constants";

const TodoItem = ({item}) => {
    const dispatch = useDispatch();
    const updateDoneState = () => {
        dispatch({type: UPDATE_DONE, payload: item.id});
    }
    const deleteItem = () => {
        dispatch({type: DELETE_ITEM, payload: item.id});
    }

    return (
        <div className="todo-item">
            <span className="todo-item-text" onClick={updateDoneState}>
                <p className={item.done ? "item-done" : null}>{item.text}</p>
            </span>
            <button
                className="delete-button"
                onClick={deleteItem}>❌
            </button>
        </div>
    );
}

export default TodoItem;