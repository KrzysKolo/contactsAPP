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
        background='white.100'
        borderBottomColor='blue.500'
        borderBottomWidth='2px'
        borderRadius='12px'
        cursor='pointer'
        fontFamily='Orbitron'
        fontSize='14px'
        fontWeight='normal'
        lineHeight='28px'
        letterSpacing='2px'
        marginBottom='10px'
        marginTop='15px'
        name={name}
        onChange={onChange}
        paddingBottom='24px'
        paddingTop='24px'
        placeholder={placeholder}
        type={type}
        value={value}
        _hover={{ borderBottomColor: 'green.500', color: "green.500" }}
      />
      {error && touched && <ErrorMessage message={message} />}
    </Flex>
  )
}

export default InputSign;