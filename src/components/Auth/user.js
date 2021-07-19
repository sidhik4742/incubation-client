import axios from "axios";

const urluser = "http://localhost:4000/api/user";

export const getAllUser = async (id) => {
  id = id || "";
  return await axios.get(`${urluser}/${id}`);
};

// add user api
export const adduser = async (user) => {
  return await axios.post(urluser, user);
};

// edit user
export const edituser = async (id, user) => {
  return await axios.patch(`${urluser}/${id}`, user);
};

// DELET USER
export const deleteuser = async (id) => {
  return await axios.delete(`${urluser}/${id}`);
};
