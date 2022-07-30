import React, { useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { LoginButton } from '../../buttons'
import { InputSign } from '../../inputs'
import logo from '../../../assets/image/Contact-AppLogo2.png';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormRegister = () => {



  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      passwordaa: '',
    },
    validationSchema: yup.object({
      userName: yup.string().required('Nazwa użytkownika jest obowiązkowa').min(6, 'Nazwa użytkownika musi imieć conajmniej 6 znaków').max(30, 'nazwa użytkownika nie może być dłuższa jak 30 znaków').email('Email zawiera błędy'),
      password: yup.string().required('Hasło jest wymagane'),
      passwordaa: yup.string().required('Hasła muszą być identyczne'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      navigate('/signIn');
      actions.resetForm();
    }
  });

/*   const registerUserInFirebase = () => {
    if (valueName.length === 0 || valuePassword.length === 0 || valuePasswordRepeat.length === 0 || valuePassword !== valuePasswordRepeat) {
      setIsError(!isError);
    } else {
      console.log('loguje się za pomocą emaila')
      setValueName('');
      setValuePassword('');
      navigate('/signIn');
    }
  }; */

  return (
    <Flex
    flexDirection='column'
    alignItems="center"
    justifyContent="center"
  >
    <Box
      width='350px'
    >
      <Image src={logo} width='100%' />
      <form action="submit">
          <InputSign
            name='userName'
            placeholder='email'
            value={formik.values.userName}
            onChange={formik.handleChange}
            message={formik.errors.userName}
            error={formik.errors.userName}
            type='text'
            touched={formik.touched.userName}
          />
          <InputSign
            placeholder='password'
            onChange={formik.handleChange}
            type='password'
            message={formik.errors.password}
            error={formik.errors.password}
            value={formik.values.password}
            name='password'
            touched={formik.touched.password}
          />
          <InputSign
            placeholder='repeat the password'
            onChange={formik.handleChange}
            type='password'
            message={formik.errors.passwordaa}
            error={formik.errors.passwordaa}
            value={formik.values.passwordaa}
            name='passwordaa'
            touched={formik.touched.passwordaa}
             />
        <LoginButton onClick={formik.handleSubmit}  name="Zarejestruj się!" />
      </form>

    </Box>
  </Flex>
  )
}

export default FormRegister;