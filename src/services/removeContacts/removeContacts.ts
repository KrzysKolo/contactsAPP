import axiosClient from "../../api/contactApi";

export const removeContacts = async (id: string) => {
  const response = await axiosClient.delete(`/contacts/${id}.json`);
  return response;
};