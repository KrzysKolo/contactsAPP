import React from 'react';
import { Box, Flex, Image, useDisclosure } from '@chakra-ui/react';
import logo from './../../assets/image/kontakt.jpg';
import { AddContactButton } from '../buttons';
import KModal from '../KModal/KModal';
import FormAddContact from '../formComponents/FormAddContact/FormAddContact';


const LeftPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <KModal
         isOpen={isOpen}
         title={"Dodaj nowy kontakt"}
         onOpen={onOpen}
         onClose={onClose}
      >
        <FormAddContact onClose={onClose} />
      </KModal>
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
          <AddContactButton text='Dodaj nowy kontakt' onClick={onOpen} />
        </Box>
      </Flex>
    </>
  )
}

export default LeftPanel;