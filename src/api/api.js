import axios from "axios";

export const getProductData = () => {
  return axios
    .get("https://test.api.weniv.co.kr/mall")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getCouponData = () =>
  axios
    .get("https://test.api.weniv.co.kr/coupon")
    .then((res) => res.data)
    .catch((error) => console.log(error));
