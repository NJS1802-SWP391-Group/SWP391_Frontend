import axiosClient from "./axiosClient";

const diamondApi = {
  checkDiamond: (data: string) => {
    const url = `/DiamondCheck/Check/${data}`;
    return axiosClient.get(url);
  },
};

export default diamondApi;
