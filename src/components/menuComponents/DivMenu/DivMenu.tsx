import React, { useEffect, useState } from 'react';
//CHAKRA COMPONENTS
import { Box, Flex, HStack, Image, Button, Text } from '@chakra-ui/react';
//REACT-ROUTER-DOM
import { Link, NavLink, useNavigate } from 'react-router-dom';
//FILES
import { dataMenuType } from '../../../assets/data/dataMenu';
import logo from './../../../assets/image/Contact-AppLogo2.png';
import userP from './../../../assets/image/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated, stateEmailAndPasswordPhoto, stateUser, stateUserGoogleOrFacebook, userOfLogged, userOfLoggedEmailAndPasswordPhoto, userOfLoggedWithGoogleOrFacebook } from '../../../features/stateOfLogin/stateOfLoginSlice';
import useStateStorage from '../../../hooks/useStateStorage/useStateStorage';
import { getUserData, getUserProfile, setLoginEmail } from '../../../features/userProfile/userProfileSlice';
import { getContact } from '../../../features/firebaseContacts/firebaseContactsSlice';

export type DivMenuProps = {
  menuItems: dataMenuType[],
};

const DivMenu: React.FC<DivMenuProps> = ({ menuItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storage, setStorage] = useStateStorage("klucz", "")
  const [userPhoto, setUserPhoto] = useState<string | any>('')
  const [userName, setName] = useState<string>('')
  const _userEmail = useSelector(stateUser);
  const _userEmailProfile = useSelector(getUserProfile);
  const _userPhoto = useSelector(stateEmailAndPasswordPhoto);
  const _userGoogleOrFacebook = useSelector(stateUserGoogleOrFacebook);

  useEffect(() => {
    if (_userEmail.email.length !== 0) {
      setUserPhoto(_userPhoto.length !== 0 ? _userPhoto[0] : " ");
      setName(_userEmail.email);
    } else {
      setUserPhoto(_userGoogleOrFacebook.photo);
      setName(_userGoogleOrFacebook.userName);
    }
   }, [_userEmailProfile, _userGoogleOrFacebook, _userPhoto[0]])

  const userEmail = {
    userID: '',
    email: '',
    password: '',
    photo: '',
    token: '',
  };

  const userGoogleOrFacebook = {
    userID: '',
    userName: '',
    email: '',
    photo: '',
  };

  const handleChangeStateLogin = () => {
    navigate('/');
    dispatch(isAuthenticated(false));
    window.localStorage.removeItem('userContactsApp');
    dispatch(userOfLoggedEmailAndPasswordPhoto(''));
    dispatch(userOfLogged(userEmail))
    dispatch(getUserData(userEmail));
    dispatch(userOfLoggedWithGoogleOrFacebook(userGoogleOrFacebook));
    dispatch(setLoginEmail(false));
    dispatch(getContact([]));
  };

  const handleOpenProfile = () => {
    navigate('/profile');
  };

  const menuItem = menuItems.map(item =>
    <Box
      margin='0 20px'
      padding='5px'
      key={item.id}>
      <NavLink to={item.path}>
        <Text
           align='center'
           color="blue.500"
           fontFamily='Orbitron'
           fontSize='16px'
           fontWeight='normal'
           lineHeight='16px'
           letterSpacing='2px'
           marginBottom='10px'
           marginLeft='1rem'
           marginTop='10px'
           _hover={{ color: "green.500" }}
        >
          {item.name}
        </Text>
      </NavLink>
    </Box>)

  return (
   <>
      {storage}

    <HStack
      boxShadow='sm'
      justifyContent={{ lg: 'space-between' }}
      minWidth={{ lg: '990px', xl: '1200px' }}
     >
      <Box
        objectFit='cover'
        width='80px'
      >
        <Image
          src={logo}
          width='100%'
        />
        </Box>
      <Flex>
        {menuItem}
      </Flex>
      <Box>
        <Flex
          alignItems='center'
          justifyContent='center'
        >
          <Box
            border='2px'
            borderColor='blue.500'
            borderRadius='50%'
            boxShadow='base'
            height='60px'
            marginRight='2rem'
            objectFit='cover'
            onClick={handleOpenProfile}
            width='60px'
            >
              {userPhoto !==""
                ? <Image
                    alt={userName}
                    borderRadius='50%'
                    height='100%'
                    objectFit='cover'
                    src={userPhoto}
                    width='100%'
                />
                : <Image
                  alt={userName}
                  borderRadius='50%'
                  height='100%'
                  objectFit='cover'
                  src={userP}
                  width='60px'
                />
              }
          </Box>
          <Link to='/'>
            <Button
              color='blue.500'
              fontFamily='Orbitron'
              letterSpacing='2px'
              onClick={handleChangeStateLogin}
              padding='10px'
            >
              Wyloguj się
            </Button>
          </Link>
        </Flex>
      </Box>
    </HStack>
  </>
  )
}

export default DivMenu;