import {useState} from "react";
import {useDispatch} from "react-redux";

import {updateItem} from "../../api/todos";
import {UPDATE_ITEM} from "../../constants/constants";
import './TodoModal.css';

const TodoModal = ({item, toggleModalOpen}) => {
    const dispatch = useDispatch();
    const [currentEdit, setCurrentEdit] = useState(item.text);

    const handleChange = (event) => {
        setCurrentEdit(event.target.value);
    };
    const handleSubmit = () => {
        const editedItem = {...item, text: currentEdit};
        updateItem(editedItem)
            .then((response) => {
                dispatch({type: UPDATE_ITEM, payload: response.data});
                toggleModalOpen();
            })
            .catch((error) => {
                alert('Fail to update in database. message: ' + error.message);
            })
    }

    return (
        <div className="modal-body">
            <h4>Edit Modal</h4>
            <div className="edit-row">
                <input
                    value={currentEdit}
                    onChange={handleChange}
                />
                <button
                    className="regular-button"
                    onClick={handleSubmit}>OK
                </button>
                <button
                    className="cancel-button"
                    onClick={toggleModalOpen}>Cancel
                </button>
            </div>

        </div>
    );
}

export default TodoModal;