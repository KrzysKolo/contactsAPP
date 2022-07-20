import React, { useEffect } from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, Flex } from '@chakra-ui/react';
import { HomePages, LoginFormPages, SignInForm, RegisterForm } from './pages';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './app/store';
import { getContactsFromFirebase } from './features/getContacts/getContactsSlice';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import { stateLogin } from './features/stateOfLogin/stateOfLoginSlice';


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const _userLoginState = useSelector(stateLogin);
  console.log(_userLoginState.stateOfLogin.isLoginUser)

  useEffect(() => {
    dispatch(getContactsFromFirebase())
  }, []);

  return (
    <ChakraProvider>
      <ColorModeProvider>
        <Flex direction="column" align="center" justify="center">
          <CSSReset />
          <Router>
            { _userLoginState.stateOfLogin.isLoginUser ? <Header /> : <p></p> }
            <Routes>
              <Route path="/home" element={<HomePages />} />
              <Route path="/signIn" element={<SignInForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/" element={<LoginFormPages />} />
            </Routes>
          </Router>
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
