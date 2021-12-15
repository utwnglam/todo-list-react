import axios from "axios";

const api = axios.create({
    baseURL: 'https://61b987cd38f69a0017ce6089.mockapi.io/'
})

export default api;
