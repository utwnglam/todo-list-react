import {useState} from "react";
import {useDispatch} from "react-redux";

import {addTodoItem} from "../api/todos";
import {ADD_ITEM} from "../constants/constants";

const TodoGenerator = () => {
    const [currentInput, setCurrentInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };
    const handleSubmit = () => {
        addTodoItem({text: currentInput, done: false}).then((response) => {
            dispatch({type: ADD_ITEM, payload: response.data});
        })
        .catch((error) => {
            alert('Fail to post from database. message: ' + error.message);
        })
        setCurrentInput('');
    }

    return (
        <div>
            <input
                value={currentInput}
                onChange={handleChange}
            />
            <button className="regular-button"
                onClick={handleSubmit}
                disabled={currentInput.length === 0}>add
            </button>
        </div>
    );
}

export default TodoGenerator;