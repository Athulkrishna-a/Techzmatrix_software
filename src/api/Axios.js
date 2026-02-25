import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.43:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default api;