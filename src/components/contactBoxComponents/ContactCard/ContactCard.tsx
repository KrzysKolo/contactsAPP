import React, { useState } from 'react';
import { ContactToFirebase } from '../../../features/addContactToFirebase/addContactToFirebaseSlice';

import ContactBox from '../ContactBox/ContactBox';
import ContactNameBox from '../ContactNameBox/ContactNameBox';

export type ContactCardProps = {
  contact: ContactToFirebase | any,
};

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [isVisibleCard, setIsVisibleCard] = useState<boolean>(false)

  const handleChangeStateVisibleCard = (e: string) => {
    setIsVisibleCard(!isVisibleCard);
    console.log('sdsds')
  };
  console.log(isVisibleCard);
  return (
    <section>
      {isVisibleCard
        ? (<ContactBox contact={contact} onClick={() => handleChangeStateVisibleCard(`${contact.id}`)} /> )
        : (<ContactNameBox contact={contact} onClick={() => handleChangeStateVisibleCard(`${contact.id}`)} />)
      }

    </section>
  )
}

export default ContactCard;