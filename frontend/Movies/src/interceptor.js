import axios from "axios";
import { ACCESS } from "./globals";

const url = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

url.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default url;
