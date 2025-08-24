import axios from "axios";

const BASE_URL = "https://cliqcall-backend.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
