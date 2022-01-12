import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5000/'
    // baseURL: 'https://api.kozackiefury.pl/'
});
export default instance;