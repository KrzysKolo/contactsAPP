import { Box,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Contacts } from '../../features/getContacts/getContactsSlice';
import { searchValue } from '../../features/getSearchValue/getSearchValueSlice';
import { ContactCard } from '../contactBoxComponents/';

const ListContacts:React.FC = () => {
  const { contactsTab } = useSelector((store: any) => store.getContacts);
  console.log(contactsTab);
  const [contactsToList, setContactsToList] = useState([]);
  const _searchValue = useSelector(searchValue)
  console.log(_searchValue)
  console.log(_searchValue.getSearchValue.searchValue)

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
      {contactsToList.map((item: { id: any; contactID?: string; name?: string; email?: string; phone?: string; street?: string; code?: string; city?: string; description?: string; image?: { name?: string | undefined; url?: string | undefined; }; typeContact?: string; }) => <ContactCard key={item.id} contact={item}/>) }
    </Box>
  )
}

export default ListContacts;