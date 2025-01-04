import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.73.84.222:8080'
});

export default api;