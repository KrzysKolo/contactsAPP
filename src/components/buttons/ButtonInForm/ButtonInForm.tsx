import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export type ButtonInFormProps = {
  title: string
  onSubmit?: MouseEventHandler<HTMLDivElement> | any;
  onReset?: MouseEventHandler<HTMLDivElement> | any;
  variant: string,
};

const ButtonInForm = ({ title, onSubmit, onReset, variant}: ButtonInFormProps) => {
  return (
    <Button
      bg={variant === "reset" ? "orange.300" : "blue.500"}
      borderRadius='12px'
      boxShadow='xs'
      color="white"
      colorScheme="secondary"
      fontFamily="Orbitron"
      fontSize="14px"
      fontWeight="medium"
      lineHeight='16px'
      letterSpacing='2px'
      paddingTop='20px'
      paddingBottom='20px'
      marginLeft='10px'
      marginBottom='10px'
      onClick={variant === 'reset' ? onReset : onSubmit}
      type={variant === "reset" ? 'reset' : 'submit'}
      _hover={{ bg: "green.500" }}
      >
      {title}
    </Button>
  )
}

export default ButtonInForm;