import api from "./api";

export const getTodoList = () => {
    return api.get("/todoList");
}

export const addTodoItem = (data) => {
    return api.post("/todoList", data);
}

export const updateItemStatus = (data) => {
    return api.put(`/todoList/${data.id}`, {...data, done: !data.done});
}

export const deleteItem = (id) => {
    return api.delete(`/todoList/${id}`);
}
