import React from 'react';
import { DivMenu } from '../menuComponents';
import DivMenuMobile from '../menuComponents/DivMenuMobile/DivMenuMobile'
import dataMenu from '../../assets/data/dataMenu';
import { Flex, Box } from '@chakra-ui/react';


const Header = () => {
  return (
    <>
      <Box
        alignItems='center'
        display={{ base: 'flex', lg: 'none'}}
        justifyContent='center'
        minWidth={{base: "100vw", lg: '1000px', xl: '1200px'}}
        >
        <Flex
          alignItems='center'
          flexDirection='row'
          justifyContent='center'
        >
          <DivMenuMobile menuItems={dataMenu} />
        </Flex>
      </Box>
      <Box
        alignItems='center'
        display={{ base: 'none', lg: 'flex'}}
        justifyContent='center'
        minWidth={{base: "100vw", lg: '1000px', xl: '1200px'}}
        >
        <Flex
          alignItems='center'
          flexDirection='row'
          justifyContent='center'
        >
          <DivMenu menuItems={dataMenu} />
        </Flex>
      </Box>
    </>
  )
}

export default Header;
