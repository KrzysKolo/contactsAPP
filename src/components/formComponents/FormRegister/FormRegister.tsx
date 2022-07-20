import React, { useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { LoginButton } from '../../buttons'
import { InputSign } from '../../inputs'
import logo from '../../../assets/image/Contact-AppLogo2.png';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const FormRegister = () => {

  const [valueName, setValueName] = useState<string>('');
  const [valuePassword, setValuePassword] = useState<string>('');
  const [valuePasswordRepeat, setValuePasswordRepeat] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  let navigate = useNavigate();

  const registerUserInFirebase = () => {
    if (valueName.length === 0 || valuePassword.length === 0 || valuePasswordRepeat.length === 0 || valuePassword !== valuePasswordRepeat) {
      setIsError(!isError);
    } else {
      console.log('loguje się za pomocą emaila')
      setValueName('');
      setValuePassword('');
      navigate('/signIn');
    }
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
        <InputSign placeholder='repeat the password' value={valuePasswordRepeat} setValue={setValuePasswordRepeat} type='password' />
        <LoginButton onClick={registerUserInFirebase}  name="Zarejestruj się!" />
      </form>
        {isError && <ErrorMessage message='Masz błędy w formularzu rejestracyjnym' />}
    </Box>
  </Flex>
  )
}

export default FormRegister;