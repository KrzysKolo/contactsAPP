import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import ListContacts from '../ListContacts/ListContacts';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { getSearchValue } from '../../features/getSearchValue/getSearchValueSlice';


const RightPanel = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch()

  const handleChangeValue = (e: { target: { value: React.SetStateAction<string> | any; }; }) => {
    setValue(e.target.value);
    dispatch(getSearchValue(e.target.value.toLowerCase()));
  };

  return (
    <Flex
      alignItems='center'
      flexDirection='column'
    >
      <SearchBox placeholder='Search...' value={value} onChange={handleChangeValue} />
      <ListContacts />
    </Flex>
  )
}

export default RightPanel;