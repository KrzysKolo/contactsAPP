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
      color="white"
      fontFamily="Orbitron"
      fontSize="14px"
      fontWeight="medium"
      letterSpacing='2px'
      marginLeft='0.75rem'
      width='100%'
    >
      <FontAwesomeIcon fontSize="x-small" icon={icon} />
      {contact}
    </Text>
  )
}

export default TextIconContact