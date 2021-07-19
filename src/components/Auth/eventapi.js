import axios from "axios";

import {urlevent} from "../../constants/baseUrl";

// create post event

export const createEvent = async (Cevent) => {
  try {
    return await axios.post(`${urlevent}/createEvent`, Cevent);
  } catch (error) {
    console.log("Error while creating event.", error);
  }
};

// get all event form
export const GetallEvent = async () => {
  try {
    const response = await axios.get(`${urlevent}/getall`);
    return response.data;
  } catch (error) {
    console.log("error while loadding the events..", error);
  }
};

// get single event by an Id
export const GetsingleEvent = async (id) => {
  try {
    const response = await axios.get(`${urlevent}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while loadding the event..", error);
  }
};

// delete the event
export const DeleteEVent = async (id) => {
  try {
    await axios.delete(`${urlevent}/delete/${id}`);
  } catch (error) {
    console.log("error while loadding the events..", error);
  }
};

/// update event

export const updateEventOne = async (id, Uevent) => {
  try {
    await axios.post(`${urlevent}/update/${id}`, Uevent);
  } catch (error) {
    console.log("error while updating the events..", error);
  }
};

// upload file

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${urlevent}/file`, data);
  } catch (error) {
    console.log("error while uploading the file .. ", error);
  }
};
