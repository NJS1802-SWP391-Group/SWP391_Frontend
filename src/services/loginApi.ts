import { LoginRequest } from "../interfaces/login/loginRequest";
import axiosClient from "./axiosClient";

const loginAPI = {
  loginAsCustomer: (loginRequest: LoginRequest) => {
    return axiosClient.post(
      "/Auth/LoginAsCustomer/login-as-customer",
      loginRequest
    );
  },
  loginAsSystem: (loginRequest: LoginRequest) => {
    return axiosClient.post(
      "/Auth/LoginAsSystem/login-as-system",
      loginRequest
    );
  },
};

export default loginAPI;
