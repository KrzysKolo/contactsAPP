import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import logo from './../../assets/image/kontakt.jpg';
import { AddContactButton } from '../buttons';

const LeftPanel = () => {
  const handleOpenFormToAddContact = () => {
    console.log('Dodaje ')
  };

  return (
    <Flex
      maxWidth='45%'
      flexDirection='column'
      alignItems='center'
       >
      <Flex
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src={logo}
          alt='Logo'
          width='70%'
          objectFit='cover'
        />
      </Flex>
      <Box>
        <AddContactButton text='Dodaj nowy kontakt' onClick={handleOpenFormToAddContact} />
      </Box>
    </Flex>
  )
}

export default LeftPanel;