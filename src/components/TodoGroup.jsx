import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const {todoItemList} = useSelector(state => state);

    return (
        <div>
            {todoItemList.length > 0 ?
                (todoItemList.map((item) =>
                    <TodoItem key={item.id} item={item}/>
                )) : (
                    <p>No todo. Create a new one!</p>
                )}
        </div>
    )
}

export default TodoGroup;