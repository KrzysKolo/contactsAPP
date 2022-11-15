import { Text } from '@chakra-ui/react';
import React from 'react';

export type FooterTextProps = {
  text: string,
};

const FooterText: React.FC<FooterTextProps> = ({ text }) => {
  return (
    <Text
      align='center'
      color="blue.500"
      fontFamily='Orbitron'
      fontSize='12px'
      fontWeight='normal'
      lineHeight='14px'
      letterSpacing='2px'
      marginTop='10px'
      marginBottom='10px'
      textAlign='left'
      width='100%'
    >
      {text}
    </Text>
  )
}

export default FooterText;