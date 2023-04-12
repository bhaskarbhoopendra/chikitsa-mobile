import axios from "axios";

// class ApiClient {
//   private axios = axiosStatic.create({
//     baseURL: process.env.REACT_APP_BACKEND_URL,
//   });

//   getInstance() {
//     return this.axios;
//   }
// }

// export const apiClient = new ApiClient();

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
