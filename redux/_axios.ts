// import { getCookie } from "cookies-next";
import axios from "axios";

const baseURL = "https://darksolutiondashboard.o-projects.org/api/";

export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(async (config) => {
  // const token = getCookie("loxaToken");
  // console.log(token, "token from axios");
  // if (token) {
  //   config.headers["Authorization"] = `Bearer ${token}`;
  // } else {
  //   config.headers["x-token"] = "klnm";
  // }

  return config;
});

export default api;
