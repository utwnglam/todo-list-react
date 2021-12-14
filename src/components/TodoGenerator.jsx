import {useState} from "react";

const TodoGenerator = ({updateList}) => {
    const [currentInput, setCurrentInput] = useState('');

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };
    const handleSubmit = () => {
        updateList(currentInput);
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