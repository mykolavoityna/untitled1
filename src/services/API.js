import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);


const getUsers = () => axiosInstance ('/users');

const getComments =() => axiosInstance('/comments');

const getPost = () => axiosInstance('/posts');


export {getUsers,getComments,getPost};


