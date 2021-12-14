import {useState} from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [todoItemList, setTodoItemList] = useState([]);
    const updateList = (newItem) => {
        setTodoItemList([...todoItemList, newItem]);
    }

    return (
        <div>
            <h4>Todo List</h4>
            <TodoGroup todoItemList={todoItemList} />
            <TodoGenerator updateList={updateList} />
        </div>
    );
}

export default TodoList;
