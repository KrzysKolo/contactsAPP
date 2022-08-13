import { Box, Flex, Image, Link, HStack, Text, VStack } from '@chakra-ui/react';
import logoKK from '../../assets/image/logo.png';
import React from 'react';
import { MdOutlinePhonelinkRing, MdLocationOn } from "react-icons/md";
import { ImEnvelop } from "react-icons/im";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
       <Flex
      //border='2px solid red'
      width="100vw"
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        width='1200px'
      >
          <Box width='50px'>
            <Link href='http://krzysztofa-kolodziejczak.pl/' target='_blank' >
              <Image src={logoKK} alt='Logo autora aplikacji' />
            </Link>
          </Box>
          <Flex
            flexDirection='column'
          >
            <HStack
              color="blue.500"
              fontSize='16px'
            >
              <MdOutlinePhonelinkRing />
              <Text
                textAlign='left'
                fontFamily='Orbitron'
                fontSize='14px'
                fontWeight='normal'
                lineHeight='16px'
                letterSpacing='2px'
                color="blue.500"
                align='center'
                marginTop='10px'
                marginBottom='10px'
                width='100%'
              >+48 501-770-693</Text>
            </HStack>
            <HStack
              color="blue.500"
              fontSize='16px'
            >
              <ImEnvelop />
              <Text
                fontFamily='Orbitron'
                fontSize='14px'
                fontWeight='normal'
                lineHeight='28px'
                letterSpacing='2px'
                color="blue.500"
                align='center'
                marginTop='10px'
                marginBottom='10px'
                width='100%'
              >kontakt@krzysztofa-kolodziejczak.pl</Text>
            </HStack>
          </Flex>
          <HStack
               color="blue.500"
               fontSize='20px'
          >
            <MdLocationOn />
            <Text
              fontFamily='Orbitron'
              fontSize='14px'
              fontWeight='normal'
              lineHeight='28px'
              letterSpacing='2px'
              color="blue.500"
              align='center'
              marginTop='10px'
              marginBottom='10px'
              width='100%'
            >Piła</Text>
          </HStack>
        </Flex>
        <Flex
          color="blue.500"
          fontSize='20px'
          alignItems='center'
        >
          <AiOutlineCopyright />
          <Text
            fontFamily='Orbitron'
            fontSize='14px'
            fontWeight='normal'
            lineHeight='28px'
            letterSpacing='2px'
            color="blue.500"
            align='center'
            marginTop='10px'
            marginBottom='10px'
            width='100%'
          >2022</Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default Footer;