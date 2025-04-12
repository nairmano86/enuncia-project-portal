import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://enuncia-backend.onrender.com/api', // replace with your actual backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
