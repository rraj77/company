import axios from 'axios';
import { ILogin, IUser } from '../interfaces/user';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    toast.success('login successfull!');

    return response;
  },
  function (error) {
    if (error.response.status == 500) {
      toast.error('already register!');
    } else if (error.response.status == 403) {
      toast.error('password incorrect!');
    } else if (error.response.status == 404) {
      toast.error('username incorrect!');
    }
    return Promise.reject(error);
  }
);

export async function userLogin(value: ILogin) {
  const user = {
    email: value.email,
    password: value.password
  };

  return await axios.post('http://localhost:4000/user/login', user);
}
export async function addUser(user: IUser) {
  const userData = {
    name: user.name,
    email: user.email,
    password: user.password
  };

  return await axios.post('http://localhost:4000/user/signup', userData);
}
