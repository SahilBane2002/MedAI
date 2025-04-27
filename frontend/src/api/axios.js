import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',  // backend server address
  withCredentials: true, // if you're dealing with sessions/cookies
});

export default api;
