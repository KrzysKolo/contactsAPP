import axiosClient from "../../api/contactApi";

export const getContacts = async () => {
  const response = await axiosClient.get('/contacts.json');
  return response;
};