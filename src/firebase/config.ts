import firebase  from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = ({
  apiKey: "AIzaSyCaAv9GJZLi6NjIOuTWGJw9agcL0RMLntE",
  authDomain: "contact-app-86f60.firebaseapp.com",
  databaseURL: "https://contact-app-86f60-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-app-86f60",
  storageBucket: "contact-app-86f60.appspot.com",
  messagingSenderId: "837212607376",
  appId: "1:837212607376:web:51d8064d362d58cdabd915"
});
firebase.initializeApp(firebaseConfig);
const storageImage = firebase.storage();

export { storageImage };
  export default firebase;

