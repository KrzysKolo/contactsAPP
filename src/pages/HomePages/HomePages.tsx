import { useEffect } from 'react';
import { LeftPanel, RightPanel } from '../../components';
import { HStack } from '@chakra-ui/react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { getAllContacts, getContact, isLoading, isSuccess, setLoading, setSuccess } from '../../features/firebaseContacts/firebaseContactsSlice';
import { getContacts } from '../../services/contacts/contacts';
import { stateUser } from '../../features/stateOfLogin/stateOfLoginSlice';
import { ContactInFirebase } from '../../models/InterfaceContactsInFirebase';

const HomePages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const _allContacts = useSelector(getAllContacts);
  const _user = useSelector(stateUser);
  const _isSuccess = useSelector(isSuccess);
  const _isLoading = useSelector(isLoading);
  console.log(_isSuccess)

  const fetchContacts = async () => {
    try {
      const res = await getContacts();
      let contactsTab:  ContactInFirebase[] = [];
      for (const key in res.data) {
        contactsTab.push({ ...res.data[key], id: key })
      }

      console.log(contactsTab)
      dispatch(getContact(contactsTab));
      dispatch(setLoading(false));
      dispatch(setSuccess(false));

    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [_isSuccess]);


  useWebsiteTitle('Kontakty')
  return (
    <main>
      <HStack
        width='1180px'
        alignItems='flex-start'
        justifyContent='space-evenly'
        padding='2rem'
      >
        {_isLoading
          ? (<p>Loading</p>)
          : (<>
              <LeftPanel />
              <RightPanel />
          </>)
         }
      </HStack>
    </main>
  )
}

export default HomePages;
