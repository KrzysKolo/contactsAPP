import { Button } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

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
      type={variant === "reset" ? 'reset' : 'submit'}
      boxShadow='xs'
      borderRadius='12px'
      color="white"
      colorScheme="secondary"
      fontFamily="Orbitron"
      fontSize="14px"
      lineHeight='16px'
      fontWeight="medium"
      paddingTop='20px'
      paddingBottom='20px'
      letterSpacing='2px'
      marginLeft='10px'
      marginBottom='10px'
      _hover={{ bg: "green.500" }}
      onClick={variant === 'reset' ? onReset : onSubmit}
    >
      {title}
    </Button>
  )
}

export default ButtonInForm;