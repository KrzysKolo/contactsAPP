import { DivMenu } from '../menuComponents';
import dataMenu from '../../assets/data/dataMenu';
import { Flex } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Flex
      alignItems='center'
      flexDirection='row'
    >
      <DivMenu menuItems={dataMenu} />
    </Flex>
  )
}

export default Navigation