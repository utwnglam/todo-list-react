import {useSelector} from "react-redux";

const StaticTodoList = ({isDone}) => {
    const {todoItemList} = useSelector(state => state);
    const filteredTodoList = todoItemList.filter(item => item.done === isDone);

    const status = isDone ? 'done' :' not done'
    return (
        <div>
            {filteredTodoList.length > 0 ? (
                filteredTodoList.map(item => <p>{item.text}</p>)
            ) : (
                <p>No todo item is {status}.</p>
            )}
        </div>
    );
}

export default StaticTodoList;