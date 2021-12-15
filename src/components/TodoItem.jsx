import * as React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {useDispatch} from "react-redux";
import {DELETE_ITEM, UPDATE_STATUS} from "../constants/constants";
import {deleteItem, updateItemStatus} from "../api/todos";
import {useState} from "react";
import {CloseOutlined, EditOutlined} from "@ant-design/icons";
import Modal from '@mui/material/Modal';
import TodoModal from "./TodaModal/TodoModal";

const TodoItem = ({item}) => {
    const [disabled, setDisabled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const updateDoneState = () => {
        updateItemStatus(item).then((response) => {
            dispatch({type: UPDATE_STATUS, payload: response.data});
        }).catch((error) => {
            alert('Fail to update in database. message: ' + error.message);
        })

    };
    const deleteTodo = () => {
        setDisabled(true);
        deleteItem(item.id).then(() => {
            dispatch({type: DELETE_ITEM, payload: item.id});
        }).catch((error) => {
            alert('Fail to delete in database. message: ' + error.message);
        })
    };
    const editTodo = () => {
      
    }

    const todoStatus = item.done ? "item-done" : "";
    return (
        <div className="todo-item">
            <Modal
                open={isModalOpen}
                onClose={editTodo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                children={<TodoModal />} />
            <span className={`todo-item-text ${todoStatus}`} onClick={updateDoneState}>
                <p>{item.text}</p>
            </span>
            <button
                className="todo-item-button"
                onClick={deleteTodo}
                disabled={disabled}>
                <CloseOutlined style={{fontSize: 16}} />
            </button>

            <button
                className="todo-item-button"
                onClick={() => setIsModalOpen(!isModalOpen)}>
                <EditOutlined />
            </button>

        </div>
    );
}

export default TodoItem;