import './TodoModal.css';

const TodoModal = () => {
    return (
        <div className="modal-body">
            <h4>Edit Modal</h4>
            <input type="para"/>
            <button className="regular-button">OK</button>
            <button className="cancel-button">Cancel</button>
        </div>
    );
}

export default TodoModal;