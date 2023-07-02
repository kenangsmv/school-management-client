import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2020", // Replace this with the address where your backend server is running.
});

export default instance;
