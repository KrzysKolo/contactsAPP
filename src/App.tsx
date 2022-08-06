import React, { useEffect, useState } from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, Flex } from '@chakra-ui/react';
import { HomePages, LoginFormPages, SignInForm, RegisterForm, ProfilePages, NotFound } from './pages';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './app/store';
import { getContactsFromFirebase } from './features/getContacts/getContactsSlice';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from './components/Header/Header';
import { isAuthenticated, stateLogin, stateUserName } from './features/stateOfLogin/stateOfLoginSlice';
import useWebsiteTitle from './hooks/useWebsiteTitle/useWebsiteTitle';


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const _userLoginState = useSelector(stateLogin);
  const [userName, setUserName] = useState(window.localStorage.getItem('userContactsApp'))

  useWebsiteTitle('ContactsApp');
  console.log(_userLoginState.stateOfLogin.isLoginUser);

  const checkUser = () => {
    const tokenData = window.localStorage.getItem('userContactsApp');
    if (tokenData && _userLoginState.stateOfLogin.isLoginUser === false) {
      dispatch(isAuthenticated(true));
    }
  };

//  const checkUser = () => {
//    const tokenData = JSON.parse(window.localStorage,getItem(''))
//  };

  useEffect(() => {
    checkUser();
    dispatch(getContactsFromFirebase());
    //checkUser();
  }, []);

  console.log(userName)
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
              <Route path="/" element={<LoginFormPages />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
