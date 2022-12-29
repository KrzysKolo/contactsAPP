import { useEffect } from 'react';
import { LeftPanel, Loading, RightPanel } from '../../components';
import { Grid, GridItem, HStack } from '@chakra-ui/react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle/useWebsiteTitle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { getContact, isLoading, isSuccess, setLoading, setSuccess } from '../../features/firebaseContacts/firebaseContactsSlice';
import { getContacts } from '../../services/contacts/contacts';
import { ContactInFirebase } from '../../models/InterfaceContactsInFirebase';

const HomePages = () => {
  const dispatch = useDispatch<AppDispatch>();
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
        alignItems='flex-start'
        justifyContent='center'
        margin={{ base: '65px auto', lg: '0 auto' }}
        minHeight='80vh'
        padding='2rem'
        width={{ base: '100%', sm: '90%', md: '90%', lg: '1200px' }}
       >
        <Grid
          alignSelf='self-start'
          gap={{ base: '0.25rem', md: '2rem'}}
          justifySelf='center'
          templateColumns={{ base: '100%', lg: 'repeat(2, 1fr)' }}
        >
        {_isLoading
          ? (
            <GridItem colSpan={2} alignSelf='center'>
              <Loading />
            </GridItem>
              )
          : (
              <>
                <GridItem
                  margin={{ base: '5px auto', lg: '0 auto' }}
                  width={{ base: '100%', sm: '90%', md: '60%', lg: '100%' }}
                >
                  <LeftPanel />
                </GridItem>
                <GridItem
                  width={{ base: '5px auto', lg: '0 auto' }}
                  margin={{ base: '0 auto' }}
                >
                  <RightPanel />
                </GridItem>
                </>
            )
          }
          </Grid>
      </HStack>
    </main>
  )
}

export default HomePages;
