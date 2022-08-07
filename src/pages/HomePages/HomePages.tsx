import React, { useEffect } from 'react';
import { LeftPanel, RightPanel } from '../../components';
import { HStack } from '@chakra-ui/react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';
import { isAuthenticated, stateUser } from '../../features/stateOfLogin/stateOfLoginSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../services/contacts/contacts';
import axios from 'axios';
import axiosClient from '../../api/contactApi';

const HomePages = () => {

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
