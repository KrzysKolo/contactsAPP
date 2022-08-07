import React, { useState } from 'react';
import { ContactInFirebase } from '../../../models/InterfaceContactsInFirebase';

import ContactBox from '../ContactBox/ContactBox';
import ContactNameBox from '../ContactNameBox/ContactNameBox';

export type ContactCardProps = {
  contact: ContactInFirebase | any,
};

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [isVisibleCard, setIsVisibleCard] = useState<boolean>(false)

  const handleChangeStateVisibleCard = (e: string) => {
    setIsVisibleCard(!isVisibleCard);

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