import { useState } from 'react'
import { Box, Flex, HStack, Image } from '@chakra-ui/react'
import { LoginButton } from '../../buttons'
import { InputSign } from '../../inputs'
import logo from '../../../assets/image/Contact-AppLogo2.png';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../../features/stateOfLogin/stateOfLoginSlice';
import instance from '../../../api/contactAuth';
import TextLink from '../TextLink/TextLink';
import axiosClient from '../../../api/contactApi';


const FormRegister = () => {
  const [email] = useState<string>('');
  const [password] = useState<string>('');
  const [passwordConfirm] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: email,
      password: password,
      passwordConfirm: passwordConfirm,
    },
    validationSchema: yup.object({
      userName: yup.string().required('Nazwa użytkownika jest obowiązkowa').min(6, 'Nazwa użytkownika musi imieć conajmniej 6 znaków').max(50, 'nazwa użytkownika nie może być dłuższa jak 50 znaków').email('Email zawiera błędy'),
      password: yup.string().required('Hasło jest wymagane'),
      passwordConfirm: yup.string().required('Hasła muszą być identyczne'),
    }),
    onSubmit: async (values, actions) => {
      if (password !== passwordConfirm) {
        alert("Hasa musza być takie same");
        return;
      } else {
        try {
          const res = await instance.post('accounts:signUp', {
            loginEmail: false,
            email: formik.values.userName,
            password: formik.values.password,
            returnSecureToken: true,
          })
          const res2 = await axiosClient.post('/users.json', { userName: '', email: formik.values.userName, photo: '', userID: res.data.localId, loginEmail: true });
          dispatch(isAuthenticated(false));
          navigate('/signin');
          actions.resetForm();
        }
        catch (ex) {
          console.log(ex)
        }
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
          <InputSign
            error={formik.errors.password}
            message={formik.errors.password}
            name='password'
            onChange={formik.handleChange}
            placeholder='password'
            touched={formik.touched.password}
            type='password'
            value={formik.values.password}
          />
          <InputSign
            error={formik.errors.passwordConfirm}
            message={formik.errors.passwordConfirm}
            name='passwordConfirm'
            onChange={formik.handleChange}
            placeholder='repeat the password'
            touched={formik.touched.passwordConfirm}
            type='password'
            value={formik.values.passwordConfirm}
             />
          <LoginButton onClick={formik.handleSubmit} name="Zarejestruj się!" />
          <HStack
            justifyContent='space-between'
          >
            <TextLink text='' pathInRouting='' />
            <TextLink text='Zaloguj się' pathInRouting='/signin' />
          </HStack>
      </form>
    </Box>
  </Flex>
  )
}

export default FormRegister;