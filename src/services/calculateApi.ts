import { CalculateInterface } from "../interfaces/calculate/calculateInterface";
import axiosClient from "./axiosClient";

const calculateApi = {
  getCalculateValue: (data: CalculateInterface) => {
    const url = "/Diamond/calculte-diamond-value";
    return axiosClient.post(url, data);
  },
};

export default calculateApi;
