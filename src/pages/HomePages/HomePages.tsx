import React, { useEffect } from 'react';
import { LeftPanel, RightPanel } from '../../components';
import { HStack } from '@chakra-ui/react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';
import { isAuthenticated } from '../../features/stateOfLogin/stateOfLoginSlice';
import { useNavigate } from 'react-router-dom';

const HomePages = () => {
  const navigate = useNavigate();


  useWebsiteTitle('Kontakty')
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

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
