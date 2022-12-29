import { Flex, Image } from '@chakra-ui/react';
import error from './../../assets/image/404-error-page-not-found.jpg';


const NotFound = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
    >
      <Image
         alt='Error 404'
         objectFit='cover'
         src={error}
         width='60%'
       />
    </Flex>
  )
}

export default NotFound;