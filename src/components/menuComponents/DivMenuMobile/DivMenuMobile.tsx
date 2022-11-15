import { Box, Flex, Text, Image, Button, InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { dataMenuType } from '../../../assets/data/dataMenu';
import { getContact } from '../../../features/firebaseContacts/firebaseContactsSlice';
import { isAuthenticated, userOfLogged, userOfLoggedEmailAndPasswordPhoto, userOfLoggedWithGoogleOrFacebook } from '../../../features/stateOfLogin/stateOfLoginSlice';
import { getUserData, setLoginEmail } from '../../../features/userProfile/userProfileSlice';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import logo from './../../../assets/image/Contact-AppLogo2.png';
import { useDispatch } from 'react-redux';
import { RiLogoutCircleLine } from "react-icons/ri";

export type DivMenuProps = {
  menuItems: dataMenuType[],
};

const DivMenuMobile: React.FC<DivMenuProps> = ({ menuItems }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setOpen(!open)
  };

  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <Flex
        alignItems='center'
        backgroundColor='white'
        boxShadow='2xl'
        color='white'
        cursor='pointer'
        fontFamily='Orbitron'
        fontSize='18px'
        height='65px'
        justifyContent='space-between'
        position='absolute'
        right='0'
        top='0'
        width='100%'
        zIndex='999999'
      >
        <Box
          display={open ? "none" : "block"}
          height='60px'
          marginLeft='10px'
          objectFit='cover'
          width='60px'
          >
          <Image
            src={logo}
            width='100%'
          />
        </Box>
        <Box
          marginLeft={open ? "1.2rem" : "50%"}
          minWidth="80px"
          transition="all 0.3s linear"
        >
          <BurgerIcon open={open} setOpen={()=>setOpen(!open)} />
        </Box>
        <Flex
          background='white'
          color='blue.500'
          flexFlow='column nowrap'
          height='100vh'
          paddingBottom='10rem'
          paddingLeft='2rem'
          paddingTop='5rem'
          position='fixed'
          right='0'
          transform={open ? "translateX(0)" : "translateX(100%)"}
          transition="all 0.3s linear"
          top='0'
          width='70vw'
          >
          {
            menuItems.map(item =>
              <Box
                zIndex='9999999'
                marginTop='2rem'
                cursor='pointer'
                key={item.id}>
                <NavLink to={item.path} >
                  <Text
                    color="blue.500"
                    fontFamily='Orbitron'
                    fontSize='18px'
                    fontWeight='normal'
                    lineHeight='18px'
                    onClick={()=>setOpen(!open)}
                     _hover={{ color: "green.500" }}
                  >
                    {item.name}
                  </Text>
                </NavLink>
              </Box>)
          }
          <Link to='/'>
            <Flex
              alignItems='center'
              color='blue.500'
              fontFamily='Orbitron'
              letterSpacing='2px'
              margin='1.75rem 0'
              onClick={handleChangeStateLogin}
            >
              <Box
                fontSize='18px'
                margin='10px'
                pointerEvents='none'
              >
                  <RiLogoutCircleLine color='gray.300' />
              </Box>
              <Box
                fontSize='18px'
              >
                Wyloguj się
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </div>
  )
}

export default DivMenuMobile