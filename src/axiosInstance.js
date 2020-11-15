import axios from "axios";
import { AIMS_BACKEND_URL } from "./app/constants/baseConstants";

export default (history = null) => {
  let headers = {};
debugger;
  if (localStorage.aimsadmintoken) {
    headers.Authorization = `Bearer ${localStorage.aimsadmintoken}`;
  }

  const axiosInstance = axios.create({
    baseURL: AIMS_BACKEND_URL,
    headers,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      // perform a task before the request is sent
      console.log("Request was sent");
      return config;
    },
    (error) => {
      // handle the error
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
        console.log("response was sent");
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("aimsadmintoken");
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
