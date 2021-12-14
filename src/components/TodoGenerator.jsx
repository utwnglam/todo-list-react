import {useState} from "react";
import {useDispatch} from "react-redux";

const TodoGenerator = () => {
    const [currentInput, setCurrentInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };
    const handleSubmit = () => {
        dispatch({type: "updateList", payload: currentInput});
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