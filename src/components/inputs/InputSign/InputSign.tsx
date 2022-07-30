import React, { Dispatch, SetStateAction } from 'react'
import { Flex, Input } from '@chakra-ui/react';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

export type InputSignProps = {
  placeholder: string,
  name: string,
  value: string,
  type: string,
  onChange: React.MouseEventHandler<HTMLElement> | any,
  error: string | any;
  message: string | any;
  touched: string | any;
};

const InputSign: React.FC<InputSignProps> = ({ placeholder, value, type, onChange, error, message, name, touched }) => {
  return (
    <Flex
      flexDirection='column'
    >
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        fontFamily='Orbitron'
        fontSize='14px'
        fontWeight='normal'
        letterSpacing='2px'
        colorScheme='#d2d1d13e'
        lineHeight='28px'
        background='white.100'
        marginTop='15px'
        marginBottom='10px'
        borderRadius='12px'
        borderBottomWidth='2px'
        borderBottomColor='blue.500'
        paddingTop='24px'
        paddingBottom='24px'
        cursor='pointer'
        _hover={{ borderBottomColor: 'green.500', color: "green.500" }}
        onChange={onChange}
      />
      {error && touched && <ErrorMessage message={message} />}
    </Flex>
  )
}

export default InputSign;