import React from 'react';
import { Text } from '@chakra-ui/react';

export type ErrorMessageProps = {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Text
      color='red.500'
      fontFamily='Orbitron'
      fontSize='14px'
      letterSpacing='2px'
      marginTop='15px'
      textAlign='center'
    >
      {message}
    </Text>
  )
}

export default ErrorMessage;