import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    return (
        <div>
            <h4>Todo List</h4>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}

export default TodoList;
