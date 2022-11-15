import { Box, Flex } from '@chakra-ui/react';


export type BurgerIconProps = {
  open: boolean,
  setOpen: () => void,
}

const BurgerIcon:React.FC<BurgerIconProps> = ({ open, setOpen }) => {

  return (
    <Flex
      borderRadius='8px'
      flexDirection='column'
      height='2rem'
      justifyContent='space-between'
      onClick={setOpen}
      transformOrigin='1px'
      transition="all 0.3s linear"
      width='2.5rem'
    >
      <Box
        backgroundColor={open ? "blue.500" : "blue.500"}
        borderRadius='3px'
        height='0.25rem'
        transform={open ? "rotate(45deg) translate(5px, 1rem)" : "rotate(0)"}
        width='2.5rem'
      ></Box>
      <Box
         backgroundColor={open ? "blue.500" : "blue.500"}
         borderRadius='3px'
         height='0.25rem'
         opacity={open ? "0" : "1"}
         transform={open ? "translateX(100%)" : "translateX(0)"}
         width='2.5rem'
      ></Box>
      <Box
         backgroundColor={open ? "blue.500" : "blue.500"}
         borderRadius='3px'
         height='0.25rem'
         transform={open ? "rotate(-45deg) translate(5px, -1.2rem)" : "rotate(0)"}
         width='2.5rem'
      ></Box>
      </Flex>


  )
}

export default BurgerIcon