import { Box, Flex, useDisclosure,  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getAllContacts } from '../../features/firebaseContacts/firebaseContactsSlice';
import { searchValue } from '../../features/getSearchValue/getSearchValueSlice';
import { stateUser } from '../../features/stateOfLogin/stateOfLoginSlice';
import { ContactInFirebase } from '../../models/InterfaceContactsInFirebase';
import { ContactCard } from '../contactBoxComponents/';

const ListContacts: React.FC = () => {

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const _user = useSelector(stateUser);
  const _contactsTab = useSelector(getAllContacts);

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

    //PAGINATE

    const numberOfContacts = contactsToList.length;
    const [pageNumber, setPageNumber] = useState(0);
    const contactsPerPage = 10;
    const pagesVisited = pageNumber * contactsPerPage;
    const displayContacts = contactsToList.slice(pagesVisited, pagesVisited + contactsPerPage)
    .map((item: ContactInFirebase) => <ContactCard key={item.id} contact={item} />);
    const pageCount = Math.ceil(numberOfContacts / contactsPerPage);

    const changePage = ({ selected }: any) => {
      setPageNumber(selected);
    };

  return (
    <>
      <Flex
        flexDirection='column'
        maxW={{ base: '90vw', sm: '90vw', md: '470px', lg: '470px' }}
      >
        <Box
          alignItems='center'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          paddingTop='2rem'
        >
          {displayContacts}
        </Box>
        <Flex>
          <ReactPaginate
            activeClassName={"paginationActive"}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            nextLabel={">>"}
            nextLinkClassName={"nextBttn"}
            onPageChange={changePage}
            pageCount={pageCount}
            previousLabel={"<<"}
            previousLinkClassName={"previousBttn"}
           />
        </Flex>
      </Flex>
    </>
  )
}

export default ListContacts;