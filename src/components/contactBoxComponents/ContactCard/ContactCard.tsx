import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactApi from '../../../api/contactApi';
import { ContactAddresses } from '../../../features/addAddressesToState/addAddressesToStateSlice';
import { ContactInFirebase } from '../../../models/InterfaceContactsInFirebase';
import FormEditContact from '../../formComponents/FormEditContact/FormEditContact';
import KModal from '../../KModal/KModal';
import ContactBox from '../ContactBox/ContactBox';
import ContactNameBox from '../ContactNameBox/ContactNameBox';
import ReactPaginate from 'react-paginate';

export type ContactCardProps = {
  contact: ContactInFirebase | any,
};

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {

  const [isVisibleCard, setIsVisibleCard] = useState<boolean>(false);
  const dispatch = useDispatch();


  const handleChangeStateVisibleCard = (e: string) => {
    setIsVisibleCard(!isVisibleCard);
  };
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

//EDYTOWANIE KONTAKTU
  const handleEditContact = async({ name, description, typeContact, addresses, socialMedia, image }: any ) => {
    console.log({ name, description, typeContact, addresses, socialMedia, image })
    try {
    const data = await contactApi.patch(`/contacts/${contact.id}.json`,
      {name, description, typeContact, addresses, socialMedia, image  }
     );
    return data;
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <KModal
        isOpen={isOpenEdit}
        title={"Edytuj kontakt"}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}>
        <FormEditContact
          contact={contact}
          onClose={onCloseEdit}
          handleEditContact={handleEditContact} />
      </KModal>
      <section>
        {
          isVisibleCard
            ? (<ContactBox contact={contact} onClick={() => handleChangeStateVisibleCard(`${contact.id}`)} onOpen={onOpenEdit} />)
            : (<ContactNameBox contact={contact} onClick={() => handleChangeStateVisibleCard(`${contact.id}`)} />)
        }
      </section>
    </>
  )
}

export default ContactCard;