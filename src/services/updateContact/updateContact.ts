import axiosClient from "../../api/contactApi";

export const updateContact = async (id: string, {name, description, typeContact, addresses, socialMedia, image }: any) => {
  const response = await axiosClient.put(`/contacts/${id}.json`, { name, description, typeContact, addresses, socialMedia, image  });
  return response;
};