import { useState } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import logo from '../../../assets/image/Contact-AppLogo2.png';
import { LoginButton, LoginLinkButton } from '../../buttons';
import { InputSign } from '../../inputs';
import Line from '../Line/Line';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { changeStateLogin } from '../../../features/stateOfLogin/stateOfLoginSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormSignIn = () => {
  const [valueName] = useState<string>('');
  const [valuePassword] = useState<string>('');

  const validationSchema = () => yup.object().shape({
    userName: yup.string().required('Nazwa użytkownika jest obowiązkowa').min(6, 'Nazwa użytkownika musi imieć conajmniej 6 znaków').max(30, 'nazwa użytkownika nie może być dłuższa jak 30 znaków').email('Email zawiera błędy'),
    password: yup.string().required('Hasło jest wymagane')
  });

  const formik = useFormik({
    initialValues: {
      userName: valueName,
      password: valuePassword,
    },
    validationSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(changeStateLogin(true));
      navigate('/home');
      actions.resetForm();
    }
  });

  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();

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
            onChange={formik.handleChange}
            value={formik.values.userName}
            type='text'
            message={formik.errors.userName}
            error={formik.errors.userName}
            touched={formik.touched.userName}
          />

          <InputSign
            name='password'
            placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            type='password'
            message={formik.errors.password}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <LoginButton onClick={formik.handleSubmit}  name="Zaloguj się emailem" />
        </form>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          paddingTop='20px'
          paddingBottom='20px'
        >
          <Line />
          <Text
            fontFamily='Orbitron'
            fontSize='18px'
            letterSpacing='2px'
          >lub</Text>
          <Line />
        </Flex>
        <LoginLinkButton link='/signIn' name="Zaloguj przez Google" />
        <LoginLinkButton link='/signIn' name="Zaloguj przez Facebook" />
      </Box>
    </Flex>
  )
}

export default FormSignIn;