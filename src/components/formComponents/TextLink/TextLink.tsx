import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export type TextLinkProps = {
  text: string,
  pathInRouting: string,
}

const TextLink: React.FC<TextLinkProps> = ({ text, pathInRouting }) => {
  return (
    <Link to={pathInRouting}>
    <Text
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
      {text}
    </Text>
  </Link>
  )
}

export default TextLink