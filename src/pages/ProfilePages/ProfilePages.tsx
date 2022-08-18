import { Flex, HStack, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { Loading } from '../../components';
import UserProfile from '../../components/UserProfile/UserProfile';
import { isLoading } from '../../features/firebaseContacts/firebaseContactsSlice';
import { stateUser, stateUserGoogleOrFacebook, userOfLoggedEmailAndPasswordPhoto } from '../../features/stateOfLogin/stateOfLoginSlice';
import { getUserData, getUserProfile, isLoadingUser, isLoginEmail, isSuccessUser, setLoadingUser, setLoginEmail, setSuccessUser } from '../../features/userProfile/userProfileSlice';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';
import { ContactInFirebase } from '../../models/InterfaceContactsInFirebase';
import { UserProfileInFirebase } from '../../models/InterfaceUserProfile';
import { userProfile } from '../../services/userProfil/userProfil';

const ProfilePages = () => {
  useWebsiteTitle('Twój profil');

  const dispatch = useDispatch<AppDispatch>();
  const _isLoading = useSelector(isLoadingUser);
  const _isSuccess = useSelector(isSuccessUser);
  const _userProfil = useSelector(getUserProfile);
  const _userProfilGoogleOrFacebook = useSelector(stateUserGoogleOrFacebook);
  const _isLoginEmail = useSelector(isLoginEmail);
   const Tab: { userID: string; userName: string; email: string; photo: string; }[] = []
    Tab.push(_userProfilGoogleOrFacebook)
  const [user, setUser] = useState<UserProfileInFirebase[] | any>([]);


  const _userID = useSelector(stateUser);
  const _isSuccessUser = useSelector(isSuccessUser)


  let usersTab: UserProfileInFirebase[] = [];

  const fetchUserProfile = async () => {
    try {
      const res = await userProfile();
      console.log(res)
       for (const key in res.data) {
        usersTab.push({ ...res.data[key], id: key });
      };
      let userTab: UserProfileInFirebase | any = [];
      userTab.push(usersTab.filter((item: { userID: string; }) => item.userID === _userID.userID))
      dispatch(getUserData(userTab));
      userTab[0].forEach((item: any) => {
        const photos = [
          item.photo,
        ]
        console.log(photos)
        dispatch(userOfLoggedEmailAndPasswordPhoto(photos));
      });
      dispatch(setLoadingUser(false));
      dispatch(setSuccessUser(false));
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    if (_userProfil.length !== 0) {
      fetchUserProfile();
    }
  }, [_isSuccessUser]);

  useEffect(() => {
    if (_userProfil.length !== 0) {
      setUser(_userProfil[0]);
    }
  }, [_isSuccess]);

  useEffect(() => {
    if (_userProfilGoogleOrFacebook.userID !== ""){
      setUser(Tab);
    }
   }, [_isSuccess, _userProfilGoogleOrFacebook.userID]);

  useWebsiteTitle('Twój profil');
console.log(user)
  return (
    <VStack
      height='70vh'
      marginTop='5rem'
    > {_isLoading
        ? ( <Loading />)
        : (
          <Flex width='1200px'>
            <UserProfile user={user} loginEmail={_isLoginEmail} />)
          </Flex>)
      }

    </VStack>
  )
}

export default ProfilePages;


