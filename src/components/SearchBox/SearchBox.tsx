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
    <Flex
      alignItems='center'
      justifyContent='center'
      minW={{ base: '90vw', sm: '90vw', md: '470px', lg: '470px' }}
    >
      <InputGroup
        color='orange.300'
        colorScheme='grey.100'
        cursor='pointer'
        borderColor='orange.300'
        borderRadius='12px'
        borderWidth='0.5px'
        fontFamily='Orbitron'
        fontSize='14px'
        fontWeight='normal'
        letterSpacing='2px'
        lineHeight='28px'
        maxWidth={{ base: '90vw', sm: '470px', md: '470px', lg: '470px' }}
        _hover={{ borderColor: 'blue.500', color: "blue.500" }}
      >
       <Input
          focusBorderColor="primary.100"
          onChange={onChange}
          placeholder={placeholder}
          type='text'
          value={value.toLowerCase()}
          _placeholder={{ color: 'gray.300', fontSize: '14px', letterSpacing: '2px' }}
        />
        <InputRightElement
          children={<IoSearch color='gray.300' fontSize='30px' />}
          cursor='pointer'
          pointerEvents='none'
      />
      </InputGroup>
    </Flex>
  )
}

export default SearchBox;