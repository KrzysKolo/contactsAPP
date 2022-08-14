import React from 'react'
import { Box, Button } from '@chakra-ui/react';

export type LoginButtonProps = {
  onClick: () => void,
  name: string,
};

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, name}) => {
  return (
    <Box>
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
        letterSpacing='2px'
        marginTop='10px'
        marginBottom='10px'
        _hover={{ borderColor: 'green.500', color: "green.500" }}
        onClick={onClick}
      >
        { name }
      </Button>
    </Box>
  )
}

export default LoginButton;