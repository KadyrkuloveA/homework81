import axios from 'axios';
import {apiURL} from "./constans";

const axiosLink = axios.create({
    baseURL: apiURL
});

export default axiosLink;