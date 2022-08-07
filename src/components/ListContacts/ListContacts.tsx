import { Box,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ContactToFirebase, isSuccess } from '../../features/addContactToFirebase/addContactToFirebaseSlice';
import { getContactsFromFirebase } from '../../features/getContacts/getContactsSlice';
import { searchValue } from '../../features/getSearchValue/getSearchValueSlice';
import { stateUser } from '../../features/stateOfLogin/stateOfLoginSlice';
import { ContactCard } from '../contactBoxComponents/';

const ListContacts: React.FC = () => {
  const dispatch = useDispatch();
  const _user = useSelector(stateUser);
  const { contactsTab } = useSelector((store: any) => store.getContacts);
  const [contactsTabUser] = useState(contactsTab.filter((item: { userID: string | any; }) => item.userID === _user.userID));
  const [contactsToList, setContactsToList] = useState([]);
  const _searchValue = useSelector(searchValue);
  const _isSuccess = useSelector(isSuccess);

  useEffect(() => {
    if (_searchValue.getSearchValue.searchValue.trim() === '') {
      setContactsToList(contactsTabUser);
      return;
    }
    else {
      if (_searchValue.getSearchValue.searchValue.trim() !== "") {
        setContactsToList(
          contactsTabUser.filter((contact: { name: string | any; }) => {
				const filteredContact = `${contact.name}`;
				return filteredContact
			.toLowerCase()
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