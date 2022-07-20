import React, { Dispatch, SetStateAction } from 'react'
import { Flex, Input } from '@chakra-ui/react';

export type InputSignProps = {
  placeholder: string,
  value: string,
  type: string,
  setValue: Dispatch<SetStateAction<string>>,
}

const InputSign: React.FC<InputSignProps> = ({ placeholder, value, type, setValue }) => {
  return (
    <Flex>
      <Input
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
        onChange={(e) => setValue(e.target.value)}
        />
    </Flex>
  )
}

export default InputSign;