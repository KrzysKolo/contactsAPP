import React from 'react';
import { UserProfileInFirebase } from '../../models/InterfaceUserProfile';
import UserDetails from '../profileComponents/UserDetails/UserDetails';

export type UserProfileProps = {
  user: UserProfileInFirebase[] | any;
  loginEmail?: boolean;
};

const UserProfile:React.FC<UserProfileProps> = ({ user, loginEmail }) => {
  return (
    <>
      {user.map((item: { userID: string, userName: string, }) => <UserDetails key={item.userID} item={item} loginEmail={loginEmail} />)}
    </>
  )
}

export default UserProfile;