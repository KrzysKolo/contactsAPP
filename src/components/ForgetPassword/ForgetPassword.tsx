import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <Link to='/forget-password'>
      <Text
        textAlign='right'
        cursor='pointer'
        textDecoration='underline'
        fontFamily='Orbitron'
        fontSize='12px'
        fontWeight='normal'
        lineHeight='14px'
        letterSpacing='2px'
        color="blue.500"
        _hover={{ color: "orange.300" }}
      >
        Nie pamiętam hasła!
      </Text>
    </Link>
  )
}

export default ForgetPassword;