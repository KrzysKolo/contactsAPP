import React from 'react';
import { Text } from '@chakra-ui/react';

export type ErrorMessageProps = {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Text
      color='red.500'
      fontSize='18px'
      fontFamily='Orbitron'
      letterSpacing='2px'
      textAlign='center'
      marginTop='15px'
    >{message}</Text>
  )
}

export default ErrorMessage;