import axiosClient from "../../api/contactApi";

export const getContacts = async () => {
  const response = await axiosClient.get('/contacts.json');
  console.log(response)
  return response;
};