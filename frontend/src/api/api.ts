import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.HOST}:8080`
});

export default api;