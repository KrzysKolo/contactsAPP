import { HStack } from '@chakra-ui/react'
import React from 'react'
import FormRegister from '../../components/formComponents/FormRegister/FormRegister'

const RegisterForm = () => {
  return (
    <main>
    <HStack
     height='100vh'
     justifyContent='center'
   >
     <FormRegister />
   </HStack>
 </main>
  )
}

export default RegisterForm;