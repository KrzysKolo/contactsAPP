import axiosClient from "../../api/contactApi";

export const updateUserProfile = async (id: string, {userName, image }: any) => {
  const response = await axiosClient.put(`/users/${id}.json`, { userName, image  });
  return response;
};