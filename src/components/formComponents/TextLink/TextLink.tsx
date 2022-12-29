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
      color="blue.500"
      cursor='pointer'
      fontFamily='Orbitron'
      fontSize='12px'
      fontWeight='normal'
      letterSpacing='2px'
      lineHeight='14px'
      textDecoration='underline'
      _hover={{ color: "orange.300" }}
    >
      {text}
    </Text>
  </Link>
  )
}

export default TextLink