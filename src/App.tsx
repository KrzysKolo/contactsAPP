import React, { useEffect, useState } from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, Flex } from '@chakra-ui/react';
import { HomePages, LoginFormPages, SignInForm, RegisterForm, ProfilePages, NotFound } from './pages';

import './App.css';
import { AppDispatch } from './app/store';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated, stateLogin } from './features/stateOfLogin/stateOfLoginSlice';
import useWebsiteTitle from './hooks/useWebsiteTitle/useWebsiteTitle';
import { useDispatch, useSelector} from 'react-redux';
import { setLoading } from './features/firebaseContacts/firebaseContactsSlice';
import { Footer, FormForgetPassword, Header } from './components';



function App() {
  const dispatch = useDispatch<AppDispatch>();
  const _userLoginState = useSelector(stateLogin);
  const [userName, setUserName] = useState(window.localStorage.getItem('userContactsApp'))

  useWebsiteTitle('ContactsApp');

  const checkUser = () => {
    const tokenData = window.localStorage.getItem('userContactsApp');
    if (tokenData && _userLoginState.stateOfLogin.isLoginUser === false) {
      dispatch(isAuthenticated(true));
    }
  };

  useEffect(() => {
    checkUser();
    dispatch(setLoading(true));
  }, []);

  return (
    <ChakraProvider>
      <ColorModeProvider>
        <Flex direction="column" align="center" justify="center">
          <CSSReset />

            <Router>
              { _userLoginState.stateOfLogin.isLoginUser ? <Header /> : <p></p> }
              <Routes>
                <Route path="/home" element={ userName || _userLoginState.stateOfLogin.isLoginUser ? <HomePages /> : <Navigate replace to='/' />} />
                <Route path="/profile" element={ _userLoginState.stateOfLogin.isLoginUser || userName ? <ProfilePages /> : <Navigate to='/' />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/forget-password" element={<FormForgetPassword />} />
                <Route path="/" element={<LoginFormPages />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              { _userLoginState.stateOfLogin.isLoginUser ? <Footer /> : <p></p> }
              </Router>

        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
