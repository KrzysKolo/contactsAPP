import React from 'react';
import { DivMenu } from '../menuComponents';
import dataMenu from '../../assets/data/dataMenu';
import { Flex, Box, Image, Button } from '@chakra-ui/react';


const Header = () => {
  return (
    <Box
      //border='2px solid red'
      width="100vw"
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
      >
        <DivMenu menuItems={dataMenu} />
      </Flex>
    </Box>
  )
}

export default Header;
