import api from "./api";

export const getTodoList = () => {
    return api.get("/todoList");
}

export const addTodoItem = (data) => {
    return api.post("/todoList", data);
}

export const updateItem = (data) => {
    return api.put(`/todoList/${data.id}`, data);
}

export const deleteItem = (id) => {
    return api.delete(`/todoList/${id}`);
}
