import { Grid, VStack } from '@chakra-ui/react';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { Loading } from '../../components';
import UserProfile from '../../components/UserProfile/UserProfile';
import { stateUser, stateUserGoogleOrFacebook, userOfLoggedEmailAndPasswordPhoto } from '../../features/stateOfLogin/stateOfLoginSlice';
import { getUserData, getUserProfile, isLoadingUser, isLoginEmail, isSuccessUser, setLoadingUser, setSuccessUser } from '../../features/userProfile/userProfileSlice';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';
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
       for (const key in res.data) {
         usersTab.push({ ...res.data[key], id: key });
      };
      let userTab: UserProfileInFirebase | any = [];
      userTab.push(usersTab.filter((item: { userID: string; }) => item.userID === _userID.userID));
      if (userTab[0].length > 1) {
        dispatch(getUserData(userTab[0].splice(0, 1)));
      }
      dispatch(getUserData(userTab));

      userTab[0].forEach((item: any) => {
        const photos = [
          item.photo,
        ]
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
    else if (_userProfil.length > 1) {
      dispatch(getUserData(_userProfil.splice(0,1)))
    }
  }, [_isSuccessUser]);

  useEffect(() => {
      setUser(_userProfil[0]);

  }, [_isSuccess]);

  useEffect(() => {
    if (_userProfilGoogleOrFacebook.userID !== ""){
      setUser(Tab);
    }
   }, [_isSuccess, _userProfilGoogleOrFacebook.userID]);

  useWebsiteTitle('Twój profil');

  return (
    <VStack
      minHeight='70vh'
      marginTop={{ base: '3rem', lg: '5rem' }}
    >
      <Grid templateColumns={{base: '100%', lg: '1200px'}} gap={{ base: '2' }}>
        {_isLoading
          ? ( <Loading />)
          : (
              <UserProfile user={user} loginEmail={_isLoginEmail} />
            )
        }
      </Grid>
    </VStack>
  )
}

export default ProfilePages;


