import '../index.css';
import {useDispatch} from "react-redux";
import {UPDATE_DONE} from "../constants/constants";

const TodoItem = ({item}) => {
    const dispatch = useDispatch();
    const updateDoneState = () => {
        dispatch({type: UPDATE_DONE, payload: item.id});
    }

    return (
        <div className="todoItem" onClick={updateDoneState}>
            <p className={item.done ? "itemDone" : null}>
                {item.text}
            </p>
        </div>
    );
}

export default TodoItem;