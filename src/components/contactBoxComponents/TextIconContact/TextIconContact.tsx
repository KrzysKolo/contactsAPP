import React from 'react';
import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TextIconContactProps = {
  icon:  any;
  contact: string;
}

const TextIconContact: React.FC<TextIconContactProps> = ({ icon, contact }) => {

  return (
    <Text
      fontSize="12px"
      marginLeft='0.75rem'
      color="white"
      letterSpacing='2px'
      fontFamily="Orbitron"
      fontWeight="medium"
      width='100%'
    ><FontAwesomeIcon fontSize="x-small" icon={icon} /> {contact}</Text>
  )
}

export default TextIconContact