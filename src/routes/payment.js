import axios from "axios";

import { paymentApi } from "../api/index";
import { urlevent } from "../constants/baseUrl";

export const getPaymentDetails = (details, id) => {
  try {
    // console.log(id);
    return new Promise((resolve, reject) => {
      axios
        .post(`${urlevent}/${paymentApi.getPaymentDetails}`, { details, id })
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
