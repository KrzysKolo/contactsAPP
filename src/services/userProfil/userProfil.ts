import axiosClient from "../../api/contactApi";

export const userProfile = async () => {
  const response = await axiosClient.get(`/users.json`);
  return response;
};