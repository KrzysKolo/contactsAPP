import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://contact-app-86f60-default-rtdb.europe-west1.firebasedatabase.app"
});

export default axiosClient;