import React from 'react'
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export type LoginLinkButtonProps = {
  link: string,
  name: string,
}

const LoginLinkButton: React.FC<LoginLinkButtonProps> = ({ link, name}) => {
  return (
    <Box>
      <Link to={link}>
        <Button
          bg="orange.300"
          borderColor='blue.500'
          borderRadius='12px'
          borderWidth='2px'
          boxShadow='xs'
          color="blue.500"
          fontFamily="Orbitron"
          fontSize="18px"
          fontWeight="medium"
          letterSpacing='8%'
          lineHeight='28px'
          marginBottom='10px'
          marginTop='10px'
          paddingTop='24px'
          paddingBottom='24px'
          w="100%"
          _hover={{ borderColor: 'green.500', color: "green.500" }}
        >
              { name }
          </Button>
        </Link>
      </Box>
  )
}

export default LoginLinkButton;