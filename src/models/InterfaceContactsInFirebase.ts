import { ContactAddresses } from "../features/addAddressesToState/addAddressesToStateSlice"
import { SocialMediaUrl } from "../features/addSocialMediaToState/addSocialmediaToStateSlice"

export interface ContactInFirebase  {
  idContact: string,
  id?: string,
  userID: string,
  name: string,
  description?: string,
  typeContact: string,
  addresses?: ContactAddresses[] | any,
  socialMedia?: SocialMediaUrl[] | any,
  image?: {
    name: string,
    url: string
  }
};