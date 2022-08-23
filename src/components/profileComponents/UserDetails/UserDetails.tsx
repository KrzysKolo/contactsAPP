import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { isTemplateHead } from 'typescript';
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
         title={"Edtruj profil"}
         onOpen={onOpen}
         onClose={onClose}
      >
        <FormEditProfile onClose={onClose} item={item} handleEditProfile={handleEditProfile} />
      </KModal>
      <Box
        width='200px'
        border='3px solid green'
        borderTopLeftRadius='40px'
        borderBottomRightRadius='60px'
        boxShadow='2xl'
        marginLeft='4rem'
        marginRight='4rem'
        display='flex'
        alignItems='center'
        justifyContent='center'

      >
        {item.photo !== ""
          ? (<Image src={item.photo} alt={item.userName} objectFit='cover' width='99%'  borderTopLeftRadius='40px'
          borderBottomRightRadius='60px' />)
          : (<Image src={photoUser} alt={item.userName} />)
        }
      </Box>
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
      <Box>

      </Box>
    </>
  )
}

export default UserDetails;