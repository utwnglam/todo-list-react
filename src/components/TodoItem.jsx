import '../index.css';

const TodoItem = ({content}) => {
    return (
        <div className="todoItem">
            <p>{content}</p>
        </div>
    );
}

export default TodoItem;