import TodoItem from "./TodoItem";

const TodoGroup = ({todoItemList}) => {
    return (
        <div>
            {todoItemList.length > 0 ?
                (todoItemList.map((item, index) =>
                    <TodoItem key={index} content={item}/>
                )) : (
                    <p>No todo. Create a new one!</p>
                )}
        </div>
    )
}

export default TodoGroup;