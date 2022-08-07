import { Box, HStack, Stack, Text, VStack, Image, Flex } from '@chakra-ui/react';
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
import { ContactToFirebase } from '../../../features/addContactToFirebase/addContactToFirebaseSlice';

export type ContactBoxProps = {
  contact: ContactToFirebase,
  onClick: () => void,
}

const ContactBox:React.FC<ContactBoxProps> = ({ contact, onClick }) => {
  console.log(contact)
  return (
    <Stack
      background={contact.typeContact === "1" ? "blue.500" : "green.500"}
      borderRadius='12px'
      marginBottom='10px'
      boxShadow='md'
      borderLeftWidth='2px'
        borderLeftColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
        borderRightWidth='2px'
        borderRightColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
        borderBottomWidth='3px'
        borderBottomColor={contact.typeContact === "1" ? "blue.500" : "green.500"}

    >
      <HStack
        onClick={onClick}
        padding='15px'
        marginBottom='-8px'
        cursor='pointer'

       >
         <Text
          color="white"
          letterSpacing='2px'
          fontFamily="Orbitron"
          w="100%"
          fontSize="14px"
          lineHeight='14px'
          fontWeight="medium"
          marginRight='1.5rem'
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
        height='3px'
        background='rgba(243, 206, 126, 0.9)'
        width='100%'
        marginBottom='0'
      ></Box>
      <Flex
        width='100%'
      >
        <HStack
          padding='5px 15px'
          width='30%'
         >
          <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
           >
            <Text
              color="white"
              letterSpacing='2px'
              fontFamily="Orbitron"
              w="100%"
              fontSize="14px"
              lineHeight='14px'
              fontWeight="medium"
              width='100%'
              textAlign='center'
              padding='5px'
              marginBottom='5px'
            >{contact.description}</Text>
            <Flex
              width='80px'
              height='80px'
              borderRadius="50%"
              border="1px solid #f6ad55"
              boxShadow="lg"
              alignItems='center'
              justifyContent='center'
            >
              <Image  borderRadius='full' boxSize='96%' objectFit='cover'src={(contact.image?.name !== "") ? contact.image?.url : photoUsers } alt={contact.name} />
            </Flex>
          </Flex>
        </HStack>
        <Stack
          width='90%'
         >
          <Box
            pb="2"
            borderBottomColor='rgba(255, 255, 255, 0.3)'
            borderBottomWidth='1px'
            width='90%'
            margin='10px auto'

          >
             {contact.addresses.street ? <TextContact contact={contact.addresses.street } /> : <p></p>}

            <Box
              display="flex"
            >
              {contact.addresses.code ? <TextContact contact={contact.addresses.code} /> : <p></p>}
              {contact.addresses.city ? <TextContact contact={contact.addresses.city} /> : <p></p>}
            </Box>
        </Box>
          <Box
            width='98%'
            margin='0 auto'
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
          width='50%'
          background='#ffffff'
          height='0'
          borderTopWidth='30px'
          borderTopColor={contact.typeContact === "1" ? "blue.500" : "green.500"}
          borderLeft='230px solid transparent'
          margin='auto 0'
        >

         </Box>
        <Box
          width='50%'
          border='2px solid {contact.typeContact === "1" ? "blue.500" : "green.500"}'
          borderRightRadius='12px'
        >

        </Box>
      </Flex>
      <Flex
        background='white'
        marginTop='-5px'
        borderBottomRadius='12px'
        paddingBottom='10px'
        paddingTop='10px'
        alignItems='center'
        justifyContent='space-between'
        >
        <HStack
          padding='5px 15px'
        >
          <Box
            color={contact.typeContact === "1" ? "blue.500" : "green.500"}
            fontSize='20px'
            cursor='pointer'
            _hover={{ transform: 'scale(1.2)', color: 'orange.300'}}
          >
            <BsTrash />
          </Box>
          <Box
            color={contact.typeContact === "1" ? "blue.500" : "green.500"}
            fontSize='20px'
            cursor='pointer'
            _hover={{ transform: 'scale(1.2)', color: 'orange.300'}}
          >
            <FaRegEdit />
          </Box>
        </HStack>
        <HStack
          padding='5px 15px'
        >
          {contact.socialMedia.facebook &&
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              fontSize='20px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <RiFacebookBoxFill />
            </Box>
          }
          {contact.socialMedia.linkedin &&
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              fontSize='20px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <RiLinkedinBoxFill />
            </Box>
          }
          {contact.socialMedia.github &&
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              fontSize='20px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <RiGithubFill />
            </Box>
          }
          {contact.socialMedia.youtube &&
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              fontSize='20px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <RiYoutubeFill />
            </Box>
          }
          {contact.socialMedia.youtube &&
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              fontSize='20px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <RiInstagramLine />
            </Box>
          }
          {contact.socialMedia.web &&
            <Box
              color={contact.typeContact === "1" ? "blue.500" : "green.500"}
              fontSize='20px'
              cursor='pointer'
              _hover={{ transform: 'scale(1.2)', color: 'orange.300' }}
            >
              <TbWorld />
            </Box>
          }


        </HStack>
      </Flex>

    </Stack>
  )
}

export default ContactBox;