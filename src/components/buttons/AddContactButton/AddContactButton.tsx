import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { IoAddCircleOutline } from "react-icons/io5";

export type AddContactButtonProps = {
  text: string,
  onClick: () => void,
};

const AddContactButton:React.FC<AddContactButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      backgroundColor='orange.300'
      borderRadius='12px'
      boxShadow='base'
      color='white'
      fontFamily='Orbitron'
      fontSize='16px'
      justifyContent='space-between'
      letterSpacing='2px'
      marginTop='2.5rem'
      onClick={onClick}
      padding={{ base: '4px 53px', sm: '24px 53px' }}
      transitionDuration='500ms'
      minW={{ base: '90vw', sm: '470px', md: '470px', lg: '470px' }}
      _hover={{ backgroundColor: 'orange.200', color: "blue.500" }}
      _active={{ backgroundColor: 'orange.300'}}
    >
      <Box
        marginRight={{ base: '5px', sm: '5px', md: '36px', lg: '36px' }}
      >
        {text}
      </Box>
      <Box>
        <IoAddCircleOutline fontSize='30px' />
      </Box>
    </Button>
  )
}

export default AddContactButton;