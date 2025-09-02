import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // It will switch local or production automatically
  withCredentials: true,                   // This is for cookies if any.
});

export default api;
