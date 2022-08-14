import React, { useEffect, useState } from 'react';
//CHAKRA COMPONENTS
import { Box, Flex, HStack, Image, Button, Text } from '@chakra-ui/react';
//REACT-ROUTER-DOM
import { Link, NavLink, useNavigate } from 'react-router-dom';
//FILES
import { dataMenuType } from '../../../assets/data/dataMenu';
import logo from './../../../assets/image/Contact-AppLogo2.png';
import user from './../../../assets/image/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated, stateUser, stateUserFacebook, stateUserGoogle, userOfLogged, userOfLoggedWithFacebook, userOfLoggedWithGoogle } from '../../../features/stateOfLogin/stateOfLoginSlice';
import useStateStorage from '../../../hooks/useStateStorage/useStateStorage';
;


export type DivMenuProps = {
  menuItems: dataMenuType[],
};

const DivMenu: React.FC<DivMenuProps> = ({ menuItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [storage, setStorage] = useStateStorage("klucz", "")

  const [userPhoto, setUserPhoto] = useState<string>('')
  const _user = useSelector(stateUser);
  const _userGoogle = useSelector(stateUserGoogle);
  const _userFacebook = useSelector(stateUserFacebook);

  useEffect(() => {
    if (_user.email.length !== 0) {
      setUserPhoto(_user.email)
    } else if (_userGoogle.photo.length !== 0) {
      setUserPhoto(_userGoogle.photo);
    }
    else {
      setUserPhoto(_userFacebook.photo);
    }
  }, [])

console.log(_userFacebook.photo)
  console.log(userPhoto);

  const userEmail = {
    userID: '',
    email: '',
    password: '',
    token: ''
  };

  const userGoogle = {
    userName: '',
    email: '',
    photo: '',
  };

  const userFacebook = {
    userName: '',
    email: '',
    photo: '',
  };

  const handleChangeStateLogin = () => {
    navigate('/');
    dispatch(isAuthenticated(false));
    window.localStorage.removeItem('userContactsApp');
    dispatch(userOfLogged(userEmail));
    dispatch(userOfLoggedWithGoogle(userGoogle));
    dispatch(userOfLoggedWithFacebook(userFacebook));

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
        {item.name}
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
        <Text>{userPhoto}</Text>
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
                  alt='Jan Nowak'
                  borderRadius='50%'
                  width='60px'
                />
                : <Image
                  src={user}
                  alt='Jan Nowak'
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