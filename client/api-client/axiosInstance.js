import axios from "axios";
import { signOut } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.apiURL,
});

const setToken = (token) => {
  // console.log('set token', token)
  if (token)
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common["Authorization"];
};

axiosInstance.interceptors.response.use((response) => response, (error) => {
    const statusCode = error.response ? error.response.status : null;
    // console.log(statusCode)
    // console.log(error)
    if(statusCode === 401){
      setToken("");
      signOut({ callbackUrl: '/login' })
    }
    throw error;
});

export { axiosInstance, setToken };
