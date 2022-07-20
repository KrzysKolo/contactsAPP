import { HStack } from '@chakra-ui/react'
import React from 'react'
import FormSignIn from '../../components/formComponents/FormSignIn/FormSignIn'

const SignInForm = () => {
  return (
    <main>
       <HStack
        height='100vh'
        justifyContent='center'
      >
        <FormSignIn />
      </HStack>
    </main>
  )
}

export default SignInForm;