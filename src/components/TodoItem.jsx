import '../index.css';
import {useDispatch} from "react-redux";
import {DELETE_ITEM, UPDATE_STATUS} from "../constants/constants";
import {deleteItem, updateItemStatus} from "../api/todos";
import {useState} from "react";

const TodoItem = ({item}) => {
    const [disabled, setDisabled] = useState(false);

    const dispatch = useDispatch();
    const updateDoneState = () => {
        updateItemStatus(item).then((response) => {
            dispatch({type: UPDATE_STATUS, payload: response.data});
        }).catch((error) => {
            alert('Fail to update in database. message: ' + error.message);
        })

    };
    const deleteTodo = () => {
        setDisabled(true);
        deleteItem(item.id).then(() => {
            dispatch({type: DELETE_ITEM, payload: item.id});
        }).catch((error) => {
            alert('Fail to delete in database. message: ' + error.message);
        })
    };

    const todoStatus = item.done ? "item-done" : "";
    return (
        <div className="todo-item">
            <span className={`todo-item-text ${todoStatus}`} onClick={updateDoneState}>
                <p>{item.text}</p>
            </span>
            <button
                className="delete-button"
                onClick={deleteTodo}
                disabled={disabled}>❌
            </button>
        </div>
    );
}

export default TodoItem;