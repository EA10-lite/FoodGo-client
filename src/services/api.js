import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()

axios.defaults.baseURL = process.env.BASE_API;


axios.interceptors.request.use(async (config)=> {
    config.headers.Authorization = `Bearer ${ localStorage.getItem("foodgo-token")}`;

    return config;
});

export default axios;