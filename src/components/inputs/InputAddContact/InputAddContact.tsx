import { Flex, Input } from '@chakra-ui/react';
import React from 'react';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

export type InputAddContactProps = {
  placeholder: string,
  value: string,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  error: string | any;
  message: string | any;
  touched: string | any;
}

const InputAddContact:React.FC<InputAddContactProps> = ({ placeholder, value, onChange, error, message, touched }) => {
  return (
    <Flex
      flexDirection='column'
    >
      <Input
         placeholder={placeholder}
         type='text'
         value={value}
         fontFamily='Orbitron'
         fontSize='12px'
         fontWeight='normal'
         letterSpacing='2px'
         //colorScheme='#d2d1d13e'
         lineHeight='16px'
         background='white.100'
         marginTop='5px'
         marginBottom='5px'
         borderRadius='12px'
         borderBottomWidth='2px'
         borderBottomColor='orange.300'
         paddingTop='16px'
         paddingBottom='16px'
         width='100%'
         cursor='pointer'
         _hover={{ borderColor: 'blue.500', color: "blue.500" }}
        _placeholder={{color: 'gray.300', fontSize: '12px', letterSpacing:'2px'}}
         onChange={onChange}
      />
      { error && touched &&  <ErrorMessage message={message} /> }
    </Flex>
  )
}

export default InputAddContact;