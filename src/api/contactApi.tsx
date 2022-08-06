import axios from 'axios';
const data = process.env.REACT_APP_URL;

const axiosClient = axios.create({
  baseURL: `${data}`
});

export default axiosClient;