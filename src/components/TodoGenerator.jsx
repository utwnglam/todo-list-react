import {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_ITEM} from "../constants/constants";

const TodoGenerator = () => {
    const [currentInput, setCurrentInput] = useState('');
    const [id, setId] = useState(0);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };
    const handleSubmit = () => {
        const todoInfo = {id, text: currentInput, done: false};
        dispatch({type: ADD_ITEM, payload: todoInfo});
        setCurrentInput('');
        setId(id+1);
    }

    return (
        <div>
            <input
                value={currentInput}
                onChange={handleChange}
            />
            <button className="add-button"
                onClick={handleSubmit}
                disabled={currentInput.length === 0}>add
            </button>
        </div>
    );
}

export default TodoGenerator;