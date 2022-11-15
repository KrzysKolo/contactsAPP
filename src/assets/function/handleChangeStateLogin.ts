export const handleChangeStateLogin = () => {
  navigate('/');
  dispatch(isAuthenticated(false));
  window.localStorage.removeItem('userContactsApp');
  dispatch(userOfLoggedEmailAndPasswordPhoto(''));
  dispatch(userOfLogged(userEmail))
  dispatch(getUserData(userEmail));
  dispatch(userOfLoggedWithGoogleOrFacebook(userGoogleOrFacebook));
  dispatch(setLoginEmail(false));
  dispatch(getContact([]));
};