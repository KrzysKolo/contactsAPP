import { HStack } from '@chakra-ui/react';
import React from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';

const ProfilePages = () => {
  useWebsiteTitle('Twój profil');
  return (
    <HStack
      height='80vh'
    >ProfilePages</HStack>
  )
}

export default ProfilePages;