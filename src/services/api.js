import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

axios.defaults.baseURL = "https://foodgo-server.onrender.com/api";


axios.interceptors.request.use(async (config)=> {
    config.headers.Authorization = `Bearer ${ localStorage.getItem("foodgo-token")}`;

    return config;
});

export default axios;