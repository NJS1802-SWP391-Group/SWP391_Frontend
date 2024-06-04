import { RegisterRequest } from "../interfaces/register/RegisterRequest";
import axiosClient from "./axiosClient";

const signUpApi = {
  register(data: RegisterRequest) {
    const url = "/Auth/Signup";
    return axiosClient.post(url, data);
  },
};

export default signUpApi;
