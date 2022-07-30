import { Box,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ContactToFirebase, isSuccess } from '../../features/addContactToFirebase/addContactToFirebaseSlice';
import { getContactsFromFirebase } from '../../features/getContacts/getContactsSlice';
import { searchValue } from '../../features/getSearchValue/getSearchValueSlice';
import { ContactCard } from '../contactBoxComponents/';

const ListContacts: React.FC = () => {
  const dispatch = useDispatch();
  const { contactsTab } = useSelector((store: any) => store.getContacts);
  console.log(contactsTab);
  const [contactsToList, setContactsToList] = useState([]);
  const _searchValue = useSelector(searchValue);
  const _isSuccess = useSelector(isSuccess);
  console.log(_isSuccess)
  const Adsd = getContactsFromFirebase();
  console.log(Adsd);

  useEffect(() => {
    if (_searchValue.getSearchValue.searchValue.trim() === '') {
      setContactsToList(contactsTab);
      return;
    }
    else {
      if (_searchValue.getSearchValue.searchValue.trim() !== "") {
        setContactsToList(
          contactsTab.filter((contact: { name: string | any; }) => {
				const filteredContact = `${contact.name}`;
				return filteredContact
			.toLowerCase()
			.split(" ")
			.join("")
      .includes(_searchValue.getSearchValue.searchValue)
			}
			  )
			);
		  }
    }

  }, [_searchValue, contactsTab]);

  return (
    <Box
      paddingTop='2rem'
    >
      {contactsToList.map((item: ContactToFirebase) => <ContactCard key={item.idContact} contact={item}/>) }
    </Box>
  )
}

export default ListContacts;