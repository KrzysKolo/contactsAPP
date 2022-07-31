import React, { useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { LoginButton } from '../../buttons'
import { InputSign } from '../../inputs'
import logo from '../../../assets/image/Contact-AppLogo2.png';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/config';

const FormRegister = () => {
  const [email] = useState<string>('');
  const [password] = useState<string>('');
  const [passwordConfirm] = useState<string>('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: email,
      password: password,
      passwordConfirm: passwordConfirm,
    },
    validationSchema: yup.object({
      userName: yup.string().required('Nazwa użytkownika jest obowiązkowa').min(6, 'Nazwa użytkownika musi imieć conajmniej 6 znaków').max(30, 'nazwa użytkownika nie może być dłuższa jak 30 znaków').email('Email zawiera błędy'),
      password: yup.string().required('Hasło jest wymagane'),
      passwordConfirm: yup.string().required('Hasła muszą być identyczne'),
    }),
    onSubmit: (values, actions) => {
      if (password !== passwordConfirm) {
        alert("Hasa musza być takie same");
        return;
      } else {
        createUserWithEmailAndPassword(auth, formik.values.userName, formik.values.password).then(() => {
          navigate("/");
        })
          .catch((err) => alert(err.message));
      }
      actions.resetForm();
    }
  });

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
            message={formik.errors.passwordConfirm}
            error={formik.errors.passwordConfirm}
            value={formik.values.passwordConfirm}
            name='passwordConfirm'
            touched={formik.touched.passwordConfirm}
             />
        <LoginButton onClick={formik.handleSubmit}  name="Zarejestruj się!" />
      </form>

    </Box>
  </Flex>
  )
}

export default FormRegister;