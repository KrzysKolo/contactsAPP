import { Box, Flex, HStack, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { LoginButton } from '../../buttons'
import { InputSign } from '../../inputs'
import logo from '../../../assets/image/Contact-AppLogo2.png';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextLink from '../TextLink/TextLink';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase/config';


const FormForgetPassword = () => {
  const [valueName] = useState<string>('');
  const navigate = useNavigate();

  const validationSchema = () => yup.object().shape({
    userName: yup.string().required('Nazwa użytkownika jest obowiązkowa').min(6, 'Nazwa użytkownika musi imieć conajmniej 6 znaków').max(50, 'nazwa użytkownika nie może być dłuższa jak 50 znaków').email('Email zawiera błędy'),
  });

  const formik = useFormik({
    initialValues: {
      userName: valueName,
    },

    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        console.log('resetuje hasło')
        await sendPasswordResetEmail(auth, `${formik.values.userName}`);
        actions.resetForm();
        navigate('/signin');
      }
      catch (ex) {
        console.log(ex)
      }

    }
  });


  return (
    <Flex
      alignItems="center"
      flexDirection='column'
      justifyContent="center"
  >
    <Box
      width='350px'
    >
      <Image src={logo} width='100%' />
      <form action="submit">
        <InputSign
          error={formik.errors.userName}
          message={formik.errors.userName}
          name='userName'
          onChange={formik.handleChange}
          placeholder='email'
          touched={formik.touched.userName}
          type='text'
          value={formik.values.userName}
        />
          <LoginButton onClick={formik.handleSubmit} name="Resetuj hasło" />
          <HStack
            justifyContent='space-between'
          >
            <TextLink text='Zarejestruj się' pathInRouting='/register' />
            <TextLink text='Zaloguj się' pathInRouting='/signin' />
          </HStack>
        </form>
      </Box>
      </Flex>
  )
}

export default FormForgetPassword