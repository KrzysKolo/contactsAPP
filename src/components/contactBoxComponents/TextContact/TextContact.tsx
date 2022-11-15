import React from 'react';
import { Text } from '@chakra-ui/react';

export type TextContactProps = {
  contact: string,
};

const TextContact: React.FC<TextContactProps> = ({contact}) => {
  return (
    <Text
      color="white"
      fontFamily="Orbitron"
      fontSize="1x"
      fontWeight="medium"
      letterSpacing='2px'
      marginLeft='1rem'
    >
      {contact}
    </Text>
  )
}

export default TextContact;