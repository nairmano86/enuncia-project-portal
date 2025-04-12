// src/api-utils/axios.js

import axios from 'axios';

// Create an axios instance with default settings
const instance = axios.create({
  baseURL: 'https://enuncia-backend.onrender.com/api', // Replace with your backend URL if different
  headers: {
    'Content-Type': 'application/json', // Default content type for requests
  },
});

export default instance;
