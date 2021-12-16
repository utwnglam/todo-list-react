import {useEffect} from "react";
import {useDispatch} from "react-redux";

import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {getTodoList} from "../api/todos";
import {INIT_TODO} from "../constants/constants";

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getTodoList().then((response) => {
            dispatch({type: INIT_TODO, payload: response.data})
        })
        .catch((error) => {
            alert('Fail to get from database. message: ' + error.message);
        })
    }, [])

    return (
        <div>
            <h4>Todo List</h4>
            <TodoGenerator />
            <TodoGroup />
        </div>
    );
}

export default TodoList;
