import React, { ChangeEventHandler } from 'react';
import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { IoSearch } from "react-icons/io5";

export type SearchBoxProps = {
  placeholder: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBox:React.FC<SearchBoxProps> = ({ placeholder, onChange, value }) => {
  return (
    <Flex>
      <InputGroup
        borderRadius='12px'
        borderWidth='0.5px'
        borderColor='orange.300'
        fontFamily='Orbitron'
        fontSize='14px'
        fontWeight='normal'
        letterSpacing='2px'
        colorScheme='grey.100'
        lineHeight='28px'
        cursor='pointer'
        color='orange.300'
        _hover={{ borderColor: 'blue.500', color: "blue.500" }}
      >
       <Input
          onChange={onChange}
          focusBorderColor="primary.100"
          type='text'
          value={value.toLowerCase()}
          placeholder={placeholder}
          _placeholder={{color: 'gray.300', fontSize: '14px', letterSpacing:'2px'}} />
        <InputRightElement
          pointerEvents='none'
          cursor='pointer'
          children={<IoSearch color='gray.300' fontSize='30px' />}
      />
      </InputGroup>
    </Flex>
  )
}

export default SearchBox;