import { Box, HStack, Text, } from '@chakra-ui/react';
import React from 'react';
import { IoChevronDown } from "react-icons/io5";
import { ContactToFirebase } from '../../../features/addContactToFirebase/addContactToFirebaseSlice';



export type ContactNameBoxProps = {
  contact: ContactToFirebase,
  onClick: () => void,
};

const ContactNameBox:React.FC<ContactNameBoxProps> = ({ contact, onClick }) => {
  return (
    <Box
      width='475px'
      onClick={onClick}
    >
      <HStack
        background={contact.typeContact === "1" ? "blue.500" : "green.500"}
        padding='15px'
        borderRadius='12px'
        marginBottom='8px'
        cursor='pointer'
        boxShadow='md'
      >
        <Text
          color="white"
          letterSpacing='2px'
          fontFamily="Orbitron"
          w="100%"
          fontSize="14px"
          lineHeight='14px'
          fontWeight="medium"
          marginRight='1.5rem'
        >
          {contact.name}
        </Text>
          <Box
            color='white'
            _hover={{ transform: 'scale(1.2)'}}
          >
            <IoChevronDown
              fontSize='18px'
              fontWeight='bold'
            />
          </Box>
      </HStack>
    </Box>
  )
}

export default ContactNameBox;