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
          boxShadow='xs'
          borderColor='blue.500'
          borderWidth='2px'
          borderRadius='12px'
          color="blue.500"
          //colorScheme="secondary"
          fontFamily="Orbitron"
          w="100%"
          fontSize="18px"
          lineHeight='28px'
          fontWeight="medium"
          paddingTop='24px'
          paddingBottom='24px'
          letterSpacing='8%'
          marginTop='10px'
          marginBottom='10px'
          _hover={{ borderColor: 'green.500', color: "green.500" }}
        >
              { name }
          </Button>
        </Link>
      </Box>
  )
}

export default LoginLinkButton;