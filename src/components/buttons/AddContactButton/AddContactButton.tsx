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
      marginTop='2.5rem'
      onClick={onClick}
      padding='24px 53px'
      fontFamily='Orbitron'
      fontSize='16px'
      letterSpacing='2px'
      justifyContent='space-between'
      borderRadius='12px'
      backgroundColor='orange.300'
      color='white'
      boxShadow='base'
      transitionDuration='500ms'
      _hover={{ backgroundColor: 'orange.200', color: "blue.500" }}
      _active={{ backgroundColor: 'orange.300'}}
    >
      <Box
        marginRight='36px'
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