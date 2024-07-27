import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
export default http;
