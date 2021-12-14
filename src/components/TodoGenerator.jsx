import {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_ITEM} from "../constants/constants";

const TodoGenerator = () => {
    const [currentInput, setCurrentInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };
    const handleSubmit = () => {
        dispatch({type: ADD_ITEM, payload: currentInput});
        setCurrentInput('');
    }

    return (
        <div>
            <input
                value={currentInput}
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}
                disabled={currentInput.length === 0}>
                add
            </button>
        </div>
    );
}

export default TodoGenerator;