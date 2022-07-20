import { HStack } from '@chakra-ui/react';
import React from 'react'
import { FormLogin } from '../../components';

const LoginFormPages = () => {
  return (
    <main>
      <HStack
        height='100vh'
        justifyContent='center'
      >
        <FormLogin />
      </HStack>
    </main>
  )
}

export default LoginFormPages;