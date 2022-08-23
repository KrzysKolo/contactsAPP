import { useState, useEffect } from 'react';
import { Box, Image, Flex, Text, HStack } from '@chakra-ui/react';
import logo from '../../../assets/image/Contact-AppLogo2.png';
import { LoginButton } from '../../buttons';
import { InputSign } from '../../inputs';
import Line from '../Line/Line';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { isAuthenticated, stateUser, userOfLogged, userOfLoggedEmailAndPasswordPhoto, userOfLoggedWithGoogleOrFacebook } from '../../../features/stateOfLogin/stateOfLoginSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { auth, FacebookProvider, GoogleProvider } from '../../../firebase/config';
import { signInWithPopup } from 'firebase/auth';
import axios from '../../../api/contactAuth';
import useStateStorage from '../../../hooks/useStateStorage/useStateStorage';
import instance from '../../../api/contactAuth';
import { resourceLimits } from 'worker_threads';
import ForgetPassword from '../../ForgetPassword/ForgetPassword';
import TextLink from '../TextLink/TextLink';
import { userProfile } from '../../../services/userProfil/userProfil';
import { getUserData, getUserProfile, isSuccessUser, setLoadingUser, setLoginEmail, setSuccessUser } from '../../../features/userProfile/userProfileSlice';
import { UserProfileInFirebase } from '../../../models/InterfaceUserProfile';
import { isSuccess } from '../../../features/firebaseContacts/firebaseContactsSlice';


const FormSignIn = () => {
  const [valueName] = useState<string>('');
  const [valuePassword] = useState<string>('');
  const [userNameInStorage, setUserNameInStorage] = useStateStorage("", "")

  const _userID = useSelector(stateUser);
  const _isSuccessUser = useSelector(isSuccessUser)
  const _isSuccess = useSelector(isSuccess);

  let usersTab: UserProfileInFirebase[] = [];

  const fetchUserProfile = async () => {
    try {
      const res = await userProfile();
       for (const key in res.data) {
        usersTab.push({ ...res.data[key], id: key });
      };
       let userTab: UserProfileInFirebase | any = [];
      userTab.push(usersTab.filter(item => item.userID === _userID.userID))
      dispatch(getUserData(userTab));
      userTab[0].forEach((item: any) => {
        const photos = [
          item.photo,
        ]
         dispatch(userOfLoggedEmailAndPasswordPhoto(photos));
      });

      dispatch(setLoadingUser(false));
      dispatch(setSuccessUser(false));
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [_userID.userID, ]);

  const validationSchema = () => yup.object().shape({
    userName: yup.string().required('Nazwa użytkownika jest obowiązkowa').min(6, 'Nazwa użytkownika musi imieć conajmniej 6 znaków').max(50, 'nazwa użytkownika nie może być dłuższa jak 50 znaków').email('Email zawiera błędy'),
    password: yup.string().required('Hasło jest wymagane')
  });

  const formik = useFormik({
    initialValues: {
      userName: valueName,
      password: valuePassword,
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        const res = await instance.post('accounts:signInWithPassword', {
          email: formik.values.userName,
          password: formik.values.password,
          returnSecureToken: true,
        });
        dispatch(isAuthenticated(true));
        dispatch(setLoginEmail(true));
        dispatch(userOfLogged({
          userID: res.data.localId,
          email: formik.values.userName,
          password: formik.values.password,
          returnSecureToken: true,
        }));
        window.localStorage.setItem('userContactsApp', `${formik.values.userName}`);
        actions.resetForm();
        navigate('/home');
      }
      catch (ex) {
        console.log(ex)
      }

    }
  });

  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const userDataGoogleOrFacebook = {
          userID: result.user.uid,
          userName: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }
        dispatch(userOfLoggedWithGoogleOrFacebook(userDataGoogleOrFacebook));
        dispatch(isAuthenticated(true));
        dispatch(setLoginEmail(false));
        window.localStorage.setItem('userContactsApp', `${result.user.displayName}`);
        navigate('/home');
      })
      .catch((error) => {
      console.log(error);
    })
  }
  const signInWithFacebook = () => {
    signInWithPopup(auth, FacebookProvider)
      .then((result) => {
        const userDataGoogleOrFacebook = {
          userID: result.user.uid,
          userName: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }
        dispatch(userOfLoggedWithGoogleOrFacebook(userDataGoogleOrFacebook));
        dispatch(isAuthenticated(true));
        dispatch(setLoginEmail(false));
        window.localStorage.setItem('userContactsApp', `${result.user.displayName}`);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error)
      })
  };

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
          <LoginButton onClick={formik.handleSubmit} name="Zaloguj się emailem" />
          <HStack
            justifyContent='space-between'

          >
            <TextLink text='Zarejestruj się' pathInRouting='/register' />
            <TextLink text='Nie pamiętam hasła' pathInRouting='/forget-password' />
          </HStack>
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
        <LoginButton onClick={signInWithGoogle} name="Zaloguj przez Google" />
        <LoginButton onClick={signInWithFacebook} name="Zaloguj przez Facebook" />
      </Box>
    </Flex>
  )
}

export default FormSignIn;