import {useState} from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [todoItemList, setTodoItemList] = useState([]);
    const updateList = (newItem) => {
        setTodoItemList(oldTodoItemList => [...oldTodoItemList, newItem]);
    }

    return (
        <div>
            <h4>Todo List</h4>
            <TodoGroup />
            <TodoGenerator updateList={updateList} />
        </div>
    );
}

export default TodoList;
