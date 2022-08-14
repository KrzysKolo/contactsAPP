import { Box, useDisclosure,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { getAllContacts, isLoading } from '../../features/firebaseContacts/firebaseContactsSlice';
import { searchValue } from '../../features/getSearchValue/getSearchValueSlice';
import { stateUser } from '../../features/stateOfLogin/stateOfLoginSlice';
import { ContactInFirebase } from '../../models/InterfaceContactsInFirebase';
import { ContactCard } from '../contactBoxComponents/';
import FormEditContact from '../formComponents/FormEditContact/FormEditContact';
import KModal from '../KModal/KModal';


const ListContacts: React.FC = () => {

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const dispatch = useDispatch<AppDispatch>();
  const _user = useSelector(stateUser);
  const _contactsTab = useSelector(getAllContacts);
  const _isLoading = useSelector(isLoading);

  const [contactsTabUser, setContactsTabUser] = useState<ContactInFirebase[] | any>([])
  const [contactsToList, setContactsToList] = useState<ContactInFirebase[] | any>([]);
  const _searchValue = useSelector(searchValue);

  useEffect(() => {
      setContactsTabUser(_contactsTab.filter((item: { userID: string | any; }) => item.userID === _user.userID));
  }, [_contactsTab,]);

  useEffect(() => {
    if (_searchValue.getSearchValue.searchValue.trim() === '') {
      setContactsToList(contactsTabUser);
    }
    else {
      if (_searchValue.getSearchValue.searchValue.trim() !== "") {
        setContactsToList(
          contactsTabUser.filter((contact: { name: string | any; }) => {
				    const filteredContact = `${contact.name}`;
				      return filteredContact
			                .toLowerCase()
		                  .includes(_searchValue.getSearchValue.searchValue)
			                })
			  );
		  }
    }
  }, [_searchValue, contactsTabUser]);

  return (
    <>
      <Box
        paddingTop='2rem'
      >
        {contactsToList.map((item: ContactInFirebase) => <ContactCard key={item.id} contact={item}/>) }
      </Box>
    </>
  )
}

export default ListContacts;