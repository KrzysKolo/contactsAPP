import React from 'react';
import { Text } from '@chakra-ui/react';

export type TextFormLoginProps = {
  text: string,
};

const TextFormLogin: React.FC<TextFormLoginProps> = ({ text }) => {
  return (
    <Text
    fontFamily='Orbitron'
    fontSize='18px'
    fontWeight='normal'
    lineHeight='25px'
    letterSpacing='2px'
    align='center'
    marginTop='10px'
    marginBottom='10px'
    width='100%'
>
  { text }
</Text>
  )
}

export default TextFormLogin