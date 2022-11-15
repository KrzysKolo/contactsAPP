import React from 'react'
import { Box, Image, Flex } from '@chakra-ui/react';
import logo from '../../../assets/image/Contact-AppLogo2.png';
import { LoginLinkButton } from '../../buttons';
import TextFormLogin from '../TextFormLogin/TextFormLogin';

const FormLogin = () => {

  return (
    <Flex
      alignItems="center"
      flexDirection='column'
      justifyContent="center"
    >
      <Box
        width='350px'
      >
        <Image
          marginBottom='20px'
          src={logo}
          width='100%'
        />
        <TextFormLogin text='ContactsApp to aplikacja, która w jednym miejscu przechowuje Twoje kontakty.' />
        <LoginLinkButton link='/signIn' name="Zaloguj się!" />
        <TextFormLogin text='Jeśli nie masz konta' />
        <LoginLinkButton link='/register' name="Zarejestruj się!" />
      </Box>
    </Flex>
  )
}

export default FormLogin