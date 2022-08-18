import { Text } from '@chakra-ui/react';
import React from 'react';

export type FooterTextProps = {
  text: string,
};

const FooterText: React.FC<FooterTextProps> = ({ text }) => {
  return (
    <Text
    textAlign='left'
    fontFamily='Orbitron'
    fontSize='12px'
    fontWeight='normal'
    lineHeight='14px'
    letterSpacing='2px'
    color="blue.500"
    align='center'
    marginTop='10px'
    marginBottom='10px'
    width='100%'
    >
      {text}
    </Text>
  )
}

export default FooterText;