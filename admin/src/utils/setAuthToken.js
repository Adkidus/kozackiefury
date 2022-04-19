import api from './api';

const setAuthToken = AUTH_TOKEN => {
  if (AUTH_TOKEN) {
    api.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    localStorage.setItem('token', AUTH_TOKEN);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;