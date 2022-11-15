import { Box, Grid, GridItem, Image, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import contactApi from '../../../api/contactApi';
import photoUser from '../../../assets/image/user.png';
import { setSuccess } from '../../../features/firebaseContacts/firebaseContactsSlice';
import { setSuccessUser } from '../../../features/userProfile/userProfileSlice';
import ButtonInForm from '../../buttons/ButtonInForm/ButtonInForm';
import FormEditProfile from '../../formComponents/FormEditProfile/FormEditProfile';
import KModal from '../../KModal/KModal';
import TextInProfile from '../TextInProfile/TextInProfile';

export type UserDetailsProps = {
  item: string | any,
  key: string | any,
  loginEmail?: boolean,
};

const UserDetails: React.FC<UserDetailsProps> = ({ item, loginEmail }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  //EDYTOWANIE KONTAKTU
  const handleEditProfile = async({ userName, photo }: any ) => {

    try {
    const data = await contactApi.patch(`/users/${item.id}.json`,
      {userName, photo  }
      );
      dispatch(setSuccessUser(true));
      dispatch(setSuccess(true));
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <KModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        title={"Edtruj profil"}
      >
        <FormEditProfile onClose={onClose} item={item} handleEditProfile={handleEditProfile} />
      </KModal>
      <Grid templateColumns={{base: '100%', lg: 'repeat(3, 1fr)' }} gap={{ base: '2' }}>
        <GridItem>
          <Box
            alignItems='center'
            border='3px solid green'
            borderBottomRightRadius={{ base: '30px', lg: '60px' }}
            borderTopLeftRadius={{ base: '20px', lg: '40px' }}
            boxShadow='2xl'
            display='flex'
            justifyContent='center'
            marginLeft='4rem'
            marginRight='4rem'
            width={{base: '120px', lg:'200px'}}
          >
            {item.photo !== ""
              ? (<Image
                alt={item.userName}
                borderBottomRightRadius={{ base: '30px', lg: '60px' }}
                borderTopLeftRadius={{ base: '20px', lg: '40px' }}
                objectFit='cover'
                src={item.photo}
                width='99%'
              />)
              : (<Image
                alt={item.userName}
                src={photoUser}
              />)
            }
            </Box>
        </GridItem>
        <GridItem colSpan={2} alignSelf='center'>
          <Box>
            <TextInProfile title='Twój NICK: ' text={item.userName} />
            <TextInProfile title='Email: ' text={item.email} />
            <TextInProfile title='Twoje ID: ' text={item.userID} />
            <Box
              marginTop='3rem'
            >{loginEmail &&
              <ButtonInForm variant="submit" title="Edytuj profil" onSubmit={onOpen}  />
              }
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default UserDetails;