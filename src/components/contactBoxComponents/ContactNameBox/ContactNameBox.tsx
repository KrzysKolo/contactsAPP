import { Box, HStack, Text, } from '@chakra-ui/react';
import React from 'react';
import { IoChevronDown } from "react-icons/io5";
import { ContactInFirebase } from '../../../models/InterfaceContactsInFirebase';

export type ContactNameBoxProps = {
  contact: ContactInFirebase,
  onClick: () => void,
};

const ContactNameBox:React.FC<ContactNameBoxProps> = ({ contact, onClick }) => {
  return (
    <Box
      onClick={onClick}
      minW={{ base: '90vw', sm: '90vw', md: '470px', lg: '470px' }}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <HStack
        background={contact.typeContact === "1" ? "blue.500" : "green.500"}
        borderRadius='12px'
        boxShadow='md'
        cursor='pointer'
        marginBottom='8px'
        padding='15px'
        width={{ base: '90vw', sm: '470px', md: '470px', lg: '470px' }}
      >
        <Text
          color="white"
          fontFamily="Orbitron"
          fontSize="14px"
          fontWeight="medium"
          letterSpacing='2px'
          lineHeight='14px'
          marginRight='1.5rem'
          width="100%"
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