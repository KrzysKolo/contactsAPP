import React from 'react';
import { LeftPanel, RightPanel } from '../../components';
import { HStack } from '@chakra-ui/react';

const HomePages = () => {
  return (
    <main>
      <HStack
        width='1180px'
        alignItems='flex-start'
        justifyContent='space-evenly'
        padding='2rem'
      >
        <LeftPanel />
        <RightPanel />
      </HStack>

    </main>
  )
}

export default HomePages;