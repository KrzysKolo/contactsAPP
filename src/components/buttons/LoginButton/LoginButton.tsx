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
        fontFamily="Orbitron"
        fontSize="18px"
        fontWeight="medium"
        letterSpacing='2px'
        lineHeight='28px'
        marginBottom='10px'
        marginTop='10px'
        onClick={onClick}
        paddingTop='24px'
        paddingBottom='24px'
        w="100%"
        _hover={{ borderColor: 'green.500', color: "green.500" }}
      >
        { name }
      </Button>
    </Box>
  )
}

export default LoginButton;