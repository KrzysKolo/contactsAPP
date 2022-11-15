import { Box, Flex, Image, Link, HStack } from '@chakra-ui/react';
import logoKK from '../../assets/image/logo.png';
import { MdOutlinePhonelinkRing, MdLocationOn } from "react-icons/md";
import { ImEnvelop } from "react-icons/im";
import { AiOutlineCopyright } from "react-icons/ai";
import FooterText from '../footerComponents/FooterText/FooterText';

const Footer = () => {
  return (
    <div>
      <Box
        alignItems='center'
        display={{ base: 'flex', lg: 'none'}}
        flexDirection='column'
        justifyContent='center'
        minWidth={{base: "100vw", lg: '1000px', xl: '1200px'}}
      >
      <Flex
        alignItems='flex-start'
        flexDirection='column'
        justifyContent='space-between'
        minWidth={{ lg: '990px', xl: '1200px' }}
        padding='0 10px 0 20px'
        width='100vw'
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
              fontSize='14px'
            >
              <MdOutlinePhonelinkRing />
              <FooterText text=" +48 501-770-693" />
            </HStack>
            <HStack
              color="blue.500"
              fontSize='14px'
            >
              <ImEnvelop />
              <FooterText text='kontakt@krzysztofa-kolodziejczak.pl' />
            </HStack>
          </Flex>
          <HStack
               color="blue.500"
               fontSize='20px'
          >
            <MdLocationOn />
            <FooterText text='Piła' />
          </HStack>
        </Flex>
        <Flex
          color="blue.500"
          fontSize='20px'
          alignItems='center'
        >
          <AiOutlineCopyright />
          <FooterText text='2022' />
        </Flex>
      </Box>



      <Box
        alignItems='center'
        display={{ base: 'none', lg: 'flex'}}
        flexDirection='column'
        justifyContent='center'
        minWidth={{base: "100vw", lg: '1000px', xl: '1200px'}}
      >
      <Flex
        alignItems='center'
        flexDirection='row'
        justifyContent='space-between'
        minWidth={{ lg: '990px', xl: '1200px' }}
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
              fontSize='14px'
            >
              <MdOutlinePhonelinkRing />
              <FooterText text=" +48 501-770-693" />
            </HStack>
            <HStack
              color="blue.500"
              fontSize='14px'
            >
              <ImEnvelop />
              <FooterText text='kontakt@krzysztofa-kolodziejczak.pl' />
            </HStack>
          </Flex>
          <HStack
               color="blue.500"
               fontSize='20px'
          >
            <MdLocationOn />
            <FooterText text='Piła' />
          </HStack>
        </Flex>
        <Flex
          color="blue.500"
          fontSize='20px'
          alignItems='center'
        >
          <AiOutlineCopyright />
          <FooterText text='2022' />
        </Flex>
      </Box>
    </div>
  )
}

export default Footer;