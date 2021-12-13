import {useState} from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const [todoItemList, setTodoItemList] = useState([]);

    return (
        <div>
            <h4>Todo List</h4>
            <TodoGroup todoItemList={todoItemList} />
            <TodoGenerator
                todoItemList={todoItemList}
                setTodoItemList={setTodoItemList}
            />
        </div>
    );
}

export default TodoList;
