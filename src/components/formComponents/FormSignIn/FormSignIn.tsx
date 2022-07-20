import React, { useState } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import logo from '../../../assets/image/Contact-AppLogo2.png';

import { LoginButton, LoginLinkButton } from '../../buttons';
import { InputSign } from '../../inputs';
import Line from '../Line/Line';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { changeStateLogin } from '../../../features/stateOfLogin/stateOfLoginSlice';
import { useNavigate } from 'react-router-dom';

const FormSignIn = () => {
  const [valueName, setValueName] = useState<string>('');
  const [valuePassword, setValuePassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();

  const emailLogin = () => {
    console.log('loguje się za pomocą emaila')
    setValueName('');
    setValuePassword('');
    dispatch(changeStateLogin(true));
    navigate('/home');
  };

  return (
    <Flex
      flexDirection='column'
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width='350px'
      >
        <Image src={logo} width='100%' />
        <form action="submit">
          <InputSign placeholder='email' value={valueName} setValue={setValueName} type='text' />
          <InputSign placeholder='password' value={valuePassword} setValue={setValuePassword} type='password' />
          <LoginButton onClick={emailLogin}  name="Zaloguj się emailem" />
        </form>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          paddingTop='20px'
          paddingBottom='20px'
        >
          <Line />
          <Text
            fontFamily='Orbitron'
            fontSize='18px'
            letterSpacing='2px'
          >lub</Text>
          <Line />
        </Flex>
        <LoginLinkButton link='/signIn' name="Zaloguj przez Google" />
        <LoginLinkButton link='/signIn' name="Zaloguj przez Facebook" />
      </Box>
    </Flex>
  )
}

export default FormSignIn;