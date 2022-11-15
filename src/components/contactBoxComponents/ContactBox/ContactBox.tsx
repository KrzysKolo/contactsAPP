import { Box, HStack, Stack, Text, VStack, Image, Flex, Link, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { IoChevronUpSharp } from "react-icons/io5";
import photoUsers from '../../../assets/image/users.png';
import TextContact from '../TextContact/TextContact';
import TextIconContact from '../TextIconContact/TextIconContact';
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from 'react-icons/fa';
import { RiFacebookBoxFill, RiLinkedinBoxFill, RiGithubFill, RiYoutubeFill, RiInstagramLine } from 'react-icons/ri'
import { TbWorld } from 'react-icons/tb'
import { ContactInFirebase } from '../../../models/InterfaceContactsInFirebase';
import { removeContacts } from '../../../services/removeContacts/removeContacts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { setSuccess } from '../../../features/firebaseContacts/firebaseContactsSlice';

export type ContactBoxProps = {
  contact: ContactInFirebase,
  onClick: () => void,
  onOpen: () => void;
}

const ContactBox:React.FC<ContactBoxProps> = ({ contact, onClick, onOpen }) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveContact = async () => {
    const id: string | any = contact.id;
      try {
        await removeContacts(id);
        dispatch(setSuccess(true));
       } catch (error) {
        console.log(error);
      }
  };

  return (
    <Flex
      maxW={{ base: '90vw', sm: '470px', md: '470px', lg: '470px' }}
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        background={contact.typeContact === "1" ? "blue.500" : "green.500"}
        borderLeftWidth='2px'
        borderRadius='12px'
        borderLeftColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
        borderRightWidth='2px'
        borderRightColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
        borderBottomWidth='3px'
        borderBottomColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
        boxShadow='md'
        marginBottom='10px'
        width={{ base: '90vw', sm: '90vw', md: '470px', lg: '470px' }}
      >
        <HStack
          cursor='pointer'
          marginBottom='-8px'
          onClick={onClick}
          padding='15px'
        >
          <Text
            color="white"
            fontFamily="Orbitron"
            fontWeight="medium"fontSize="14px"
            letterSpacing='2px'
            lineHeight='14px'
            marginRight='1.5rem'
            w="100%"
          >
            {contact.name}
          </Text>
            <Box
              color='white'
              _hover={{ transform: 'scale(1.2)'}}
            >
              <IoChevronUpSharp
                fontSize='18px'
                fontWeight='bold'
              />
            </Box>
        </HStack>
        <Box
          background='rgba(243, 206, 126, 0.9)'
          height='3px'
          marginBottom='0'
          width='100%'
        ></Box>
        <Flex
          width='100%'
        >
          <HStack
            padding='5px 15px'
            width='30%'
          >
            <Flex
              alignItems='center'
              flexDirection='column'
              justifyContent='center'
            >
              <Text
                color="white"
                fontFamily="Orbitron"
                fontSize="14px"
                fontWeight="medium"
                letterSpacing='2px'
                lineHeight='14px'
                textAlign='center'
                marginBottom='5px'
                padding='5px'
                width='100%'
                >
                  {contact.description}
              </Text>
              <Flex
                alignItems='center'
                border="1px solid #f6ad55"
                borderRadius="50%"
                boxShadow="lg"
                justifyContent='center'
                height='80px'
                width='80px'
                >
                  <Image
                    alt={contact.name}
                    borderRadius='full'
                    objectFit='cover'
                    boxSize='96%'
                    src={(contact.image?.name !== "") ? contact.image?.url : photoUsers}
                  />
              </Flex>
            </Flex>
          </HStack>
          <Stack
            width='90%'
          >
            <Box
              borderBottomColor='rgba(255, 255, 255, 0.3)'
              borderBottomWidth='1px'
              margin='10px auto'
              pb="2"
              width='90%'
            >
              {contact.addresses.country ? <TextContact contact={contact.addresses.country } /> : <p></p>}
              {contact.addresses.street ? <TextContact contact={contact.addresses.street } /> : <p></p>}
              <Box
                display="flex"
              >
                {contact.addresses.code ? <TextContact contact={contact.addresses.code} /> : <p></p>}
                {contact.addresses.city ? <TextContact contact={contact.addresses.city} /> : <p></p>}
              </Box>
          </Box>
            <Box
              margin='0 auto'
              width='98%'
            >
                {contact.addresses.email && <TextIconContact icon={faEnvelope} contact={contact.addresses.email} />}
                {contact.addresses.phone && <TextIconContact icon={faPhone} contact={contact.addresses.phone} />}
              </Box>
          </Stack>
        </Flex>
        <Flex
          height='20px'
        >
          <Box
            background='#ffffff'
            borderLeft='230px solid transparent'
            borderTopColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
            borderTopWidth='30px'
            height='0'
            margin='auto 0'
            width='50%'
          >
          </Box>
          <Box
            border='2px solid {contact.typeContact === "1" ? "blue.500" : "green.500"}'
            borderRightRadius='12px'
            width='50%'
          >
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          background='white'
          justifyContent='space-between'
          paddingBottom='10px'
          borderBottomRadius='12px'
          paddingTop='10px'
          marginTop='-5px'
          >
          <HStack
            padding='5px 15px'
          >
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              cursor='pointer'
              fontSize='20px'
              onClick={handleRemoveContact}
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <BsTrash />
            </Box>
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              cursor='pointer'
              fontSize='20px'
              onClick={onOpen}
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <FaRegEdit />
            </Box>
          </HStack>
          <HStack
            padding='5px 15px'
          >
            {contact.socialMedia.facebook &&
              <Link href={contact.socialMedia.facebook} isExternal>
                <Box
                  color={contact.typeContact === "1" ? "blue.500" : "green.500"}
                  cursor='pointer'
                  fontSize='20px'
                  _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
                >
                <RiFacebookBoxFill />
                </Box>
              </Link>
            }
            {contact.socialMedia.linkedin &&
              <Link href={contact.socialMedia.linkedin} isExternal>
                <Box
                  color={contact.typeContact === "1" ? "blue.500" : "green.500"}
                  cursor='pointer'
                  fontSize='20px'
                  _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
                >
                  <RiLinkedinBoxFill />
                </Box>
              </Link>
            }
            {contact.socialMedia.github &&
              <Link href={contact.socialMedia.github} isExternal>
              <Box
                color={contact.typeContact === "1" ? "blue.500" : "green.500"}
                cursor='pointer'
                fontSize='20px'
                _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
              >
                <RiGithubFill />
                </Box>
              </Link>
            }
            {contact.socialMedia.youtube &&
              <Link href={contact.socialMedia.youtube} isExternal>
              <Box
                color={contact.typeContact === "1" ? "blue.500" : "green.500"}
                cursor='pointer'
                fontSize='20px'
                _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
              >
                <RiYoutubeFill />
                </Box>
                </Link>
            }
            {contact.socialMedia.instagram &&
              <Link href={contact.socialMedia.instagram} isExternal>
              <Box
                color={contact.typeContact === "1" ? "blue.500" : "green.500"}
                cursor='pointer'
                fontSize='20px'
                _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
              >
                <RiInstagramLine />
                </Box>
                </Link>
            }
            {contact.socialMedia.web &&
              <Link href={contact.socialMedia.web} isExternal>
              <Box
                color={contact.typeContact === "1" ? "blue.500" : "green.500"}
                cursor='pointer'
                fontSize='20px'
                _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
              >
                <TbWorld />
                </Box>
              </Link>
            }
          </HStack>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default ContactBox;