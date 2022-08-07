import React from 'react';
import { Text } from '@chakra-ui/react';

export type TextContactProps = {
  contact: string,
};

const TextContact: React.FC<TextContactProps> = ({contact}) => {
  return (
    <Text
      fontSize="1x"
      marginLeft='1rem'
      color="white"
      letterSpacing='2px'
      fontFamily="Orbitron"
      fontWeight="medium"

    > {contact} </Text>
  )
}

export default TextContact;