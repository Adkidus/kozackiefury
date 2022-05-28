import axios from 'axios';

var API_URL;
switch(process.env.NODE_ENV) {
  case 'production':
      API_URL = 'https://api.kozackiefury.pl';
    break;
  case 'development':
  default:
      API_URL = 'http://localhost:5000';
  }

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;