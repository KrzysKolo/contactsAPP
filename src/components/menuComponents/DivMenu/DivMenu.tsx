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
import { isAuthenticated, stateEmailAndPassword, stateUser, stateUserGoogleOrFacebook, userOfLogged, userOfLoggedEmailAndPassword, userOfLoggedWithGoogleOrFacebook } from '../../../features/stateOfLogin/stateOfLoginSlice';
import useStateStorage from '../../../hooks/useStateStorage/useStateStorage';
import { getUserProfile, setLoginEmail } from '../../../features/userProfile/userProfileSlice';
import { tab } from '@testing-library/user-event/dist/types/convenience';

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
  const _userGoogleOrFacebook = useSelector(stateUserGoogleOrFacebook);


  console.log(_userEmailProfile)
  useEffect(() => {
    if (_userEmail.email.length !== 0) {
      setUserPhoto(_userEmailProfile[0].photo);
      setName(_userEmail.email);
    } else {
      setUserPhoto(_userGoogleOrFacebook.photo);
      setName(_userGoogleOrFacebook.userName);
    }
   }, [_userEmailProfile, _userGoogleOrFacebook])

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
    dispatch(userOfLoggedEmailAndPassword(userEmail));
    dispatch(userOfLoggedWithGoogleOrFacebook(userGoogleOrFacebook));
    dispatch(setLoginEmail(false));
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
           fontFamily='Orbitron'
           fontSize='16px'
           fontWeight='normal'
           lineHeight='16px'
           letterSpacing='2px'
           color="blue.500"
           align='center'
           marginTop='10px'
           marginBottom='10px'
          marginLeft='1rem'
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
      width='1200px'
      justifyContent='space-between'
      boxShadow='sm'
     >
      <Box
        width='80px'
      >
        <Image
          width='100%'
          src={logo}
        />
        </Box>
      <Flex>
        {menuItem}
      </Flex>
      <Box>
        <Flex
          justifyContent='center'
          alignItems='center'
        >
          <Box
            width='60px'
            height='60px'
            borderRadius='50%'
            border='2px'
            borderColor='blue.500'
            marginRight='2rem'
            boxShadow='base'
            onClick={handleOpenProfile}
            >
              {userPhoto
                ? <Image
                  src={userPhoto}
                  alt={userName}
                  borderRadius='50%'
                  width='60px'
                />
                : <Image
                  src={userP}
                  alt={userName}
                  borderRadius='50%'
                  width='60px'
                />
              }
          </Box>
          <Link to='/'>
            <Button
              padding='10px'
              color='blue.500'
              fontFamily='Orbitron'
              letterSpacing='2px'
              onClick={handleChangeStateLogin}
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