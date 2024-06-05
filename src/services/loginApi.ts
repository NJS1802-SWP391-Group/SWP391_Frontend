import { LoginRequest } from "../interfaces/login/loginRequest";
import axiosClient from "./axiosClient";

const loginAPI = {
  login: (loginRequest: LoginRequest) => {
    return axiosClient.post("/Auth/Login", loginRequest);
  },
};

export default loginAPI;
