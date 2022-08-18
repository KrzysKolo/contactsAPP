import { useEffect } from 'react';
import { LeftPanel, Loading, RightPanel } from '../../components';
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

  const fetchContacts = async () => {
    try {
      const res = await getContacts();
      let contactsTab:  ContactInFirebase[] = [];
      for (const key in res.data) {
        contactsTab.push({ ...res.data[key], id: key })
      }
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

  useWebsiteTitle('Kontakty');

  return (
    <main>
      <HStack
        width='1180px'
        minHeight='80vh'
        alignItems='flex-start'
        justifyContent='space-evenly'
        padding='2rem'
      >
        {_isLoading
          ? (<Loading />)
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
