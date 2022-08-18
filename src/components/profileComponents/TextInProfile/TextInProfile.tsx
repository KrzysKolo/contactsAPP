import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export type TextInProfileProps = {
  title: string,
  text: string,
};

const TextInProfile: React.FC<TextInProfileProps> = ({ title, text }) => {
  return (
    <Flex>
      <Text
       fontFamily='Orbitron'
       fontSize='14px'
       fontWeight='normal'
       lineHeight='16px'
       letterSpacing='2px'
       color="blue.500"
       align='center'
       marginTop='10px'
       marginBottom='10px'
      >
        {title}
      </Text>
      <Text
        fontFamily='Orbitron'
        fontSize='16px'
        fontWeight='normal'
        lineHeight='16px'
        letterSpacing='2px'
        color="blue.500"
        align='center'
        marginTop='10px'
        marginBottom='10px'
        marginLeft='1rem'
      >
        {text}
      </Text>
    </Flex>
  )
}

export default TextInProfile;