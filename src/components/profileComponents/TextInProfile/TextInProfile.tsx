import {Flex, Text } from '@chakra-ui/react';
import React from 'react';

export type TextInProfileProps = {
  title: string,
  text: string,
};

const TextInProfile: React.FC<TextInProfileProps> = ({ title, text }) => {
  return (
    <Flex
      flexDirection={{base: 'column', sm: 'row'}}
      justifyContent='flex-start'
      alignItems='flex-start'
    >
      <Text
       align='center'
       color="blue.500"
       fontFamily='Orbitron'
       fontSize={{base: '12px', lg: '14px'}}
       fontWeight='normal'
       lineHeight='16px'
       letterSpacing='2px'
       marginBottom='10px'
       marginTop='10px'
      >
        {title}
      </Text>
      <Text
        align='center'
        color="blue.500"
        fontFamily='Orbitron'
        fontSize={{base: '14px', lg: '16px'}}
        fontWeight='normal'
        lineHeight='16px'
        letterSpacing='2px'
        marginBottom='10px'
        marginTop='10px'
        marginLeft='1rem'
      >
        {text}
      </Text>
    </Flex>
  )
}

export default TextInProfile;