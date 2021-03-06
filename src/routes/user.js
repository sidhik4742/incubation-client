import axios from "axios";

import { paymentApi, userApi } from "../api/index";
import { urlevent } from "../constants/baseUrl";

export const getAllPlans = (id) => {
  try {
    // console.log(token);
    return new Promise((resolve, reject) => {
      axios
        .get(`${urlevent}/${userApi.getallplans}?id=${id}`)
        .then(function (response) {
          // console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } catch (error) {
    console.log("something went to wrong in the /user/payment");
  }
};
