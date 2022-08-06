import axios from 'axios';
const url = process.env.REACT_APP_AUTH;
const key = process.env.REACT_APP_FIREBASE_API_KEY;

const instance = axios.create({
  baseURL: `${url}`,
  params: {
    key: `${key}`,
  }
});

export default instance;