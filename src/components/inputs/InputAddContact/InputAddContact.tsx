import React from 'react';
import { Flex, Input } from '@chakra-ui/react';
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
        background='white.100'
        borderRadius='12px'
        borderBottomColor='orange.300'
        borderBottomWidth='2px'
        cursor='pointer'
        fontFamily='Orbitron'
        fontSize='12px'
        fontWeight='normal'
        letterSpacing='2px'
        lineHeight='16px'
        marginBottom='5px'
        marginTop='5px'
        onChange={onChange}
        paddingBottom='16px'
        paddingTop='16px'
        placeholder={placeholder}
        type='text'
        value={value}
        width='100%'
        _hover={{ borderColor: 'blue.500', color: "blue.500" }}
        _placeholder={{color: 'gray.300', fontSize: '12px', letterSpacing:'2px'}}
      />
      { error && touched &&  <ErrorMessage message={message} /> }
    </Flex>
  )
}

export default InputAddContact;