import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export interface SocialMediaUrl  {
  facebook?: string,
  linkedin?: string,
  github?: string,
  youtube?: string,
  instagram?: string,
  web?: string,
}
export type socialMediaUrlType = {
  socialMediaTab: SocialMediaUrl[]
}
const initialState: socialMediaUrlType = {
  socialMediaTab: [],
};

const addSocialmediaToStateSlice = createSlice({
  name: 'socialMediaContact',
  initialState,
  reducers: {
    addSocialMediaUrlContact: (state, action) => {
      state.socialMediaTab = action.payload;
    },
  }
})

export const { addSocialMediaUrlContact } = addSocialmediaToStateSlice.actions;
export const stateContactSocialMedia = (state: RootState) => state.addSocialmediaToState.socialMediaTab;
export default addSocialmediaToStateSlice.reducer;