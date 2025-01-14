import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

axios.defaults.baseURL = process.env.BASE_API;


axios.interceptors.request.use(async (config)=> {
    const token = localStorage.getItem("foodgo-token")
    config.headers.Authorization = `Bearer ${token.slice(1, token.length - 1)}`;

    return config;
});

export default axios;