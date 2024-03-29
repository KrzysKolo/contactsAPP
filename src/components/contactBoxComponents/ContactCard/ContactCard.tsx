import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import contactApi from '../../../api/contactApi';
import { ContactInFirebase } from '../../../models/InterfaceContactsInFirebase';
import FormEditContact from '../../formComponents/FormEditContact/FormEditContact';
import KModal from '../../KModal/KModal';
import ContactBox from '../ContactBox/ContactBox';
import ContactNameBox from '../ContactNameBox/ContactNameBox';

export type ContactCardProps = {
  contact: ContactInFirebase | any,
};

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {

  const [isVisibleCard, setIsVisibleCard] = useState<boolean>(false);

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
        onOpen={onOpenEdit}
        onClose={onCloseEdit}
        title={"Edytuj kontakt"}
      >
        <FormEditContact
          contact={contact}
          handleEditContact={handleEditContact}
          onClose={onCloseEdit}
        />
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