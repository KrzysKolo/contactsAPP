import React from 'react';
import { DivMenu } from '../menuComponents';
import dataMenu from '../../assets/data/dataMenu';
import { Flex } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Flex
      flexDirection='row'
      alignItems='center'
    >
      <DivMenu menuItems={dataMenu} />
    </Flex>
  )
}

export default Navigation