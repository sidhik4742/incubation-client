import axios from "axios";

import { userApi } from "../api/index";
import { urlevent } from "../constants/baseUrl";

export const getallsubscribers = (id) => {
  try {
    // console.log(token);
    return new Promise((resolve, reject) => {
      axios
        .get(`${urlevent}/${userApi.getallsubscribers}`)
        .then(function (response) {
          // console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } catch (error) {
    console.log("something went to wrong in the /user/getallsubscribers");
  }
};
