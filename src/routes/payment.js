import axios from "axios";

import { paymentApi } from "../api/index";
import { urlevent } from "../constants/baseUrl";

export const getPaymentDetails = (billingDetails) => {
  try {
    // console.log(token);
    return new Promise((resolve, reject) => {
      axios
        .post(`${urlevent}/${paymentApi.getPaymentDetails}`, billingDetails)
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
