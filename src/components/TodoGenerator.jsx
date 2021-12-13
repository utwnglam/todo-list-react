import {useState} from "react";

const TodoGenerator = ({todoItemList, setTodoItemList}) => {
    const [currentInput, setCurrentInput] = useState('');
    const [warning, setWarning] = useState('');

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };

    const handleSubmit = () => {
        if (currentInput === '') {
            setWarning('Input cannot be empty.');
        } else {
            const newList = todoItemList.concat(currentInput);
            setTodoItemList(newList);
            setCurrentInput('');
            setWarning('');
        }
    }

    return (
        <div>
            <input
                value={currentInput}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>add</button>
            <p>{warning}</p>
        </div>
    );
}

export default TodoGenerator;