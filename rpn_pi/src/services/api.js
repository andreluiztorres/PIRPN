import axios from 'axios';

const api = axios.create({
    baseURL: 'https://webserviderpn.herokuapp.com/',
});

export default api;