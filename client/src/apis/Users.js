import axios from 'axios';
import { setToken } from '@src/libs/token';

export const signUp = async (userInfo) => {
  try {
    const { status, data } = await axios.post('/api/users/signup', userInfo);
    if (status === 200) {
      return data;
    }
  } catch (err) {
    const { data } = err.response;
    alert(data.err.name);
  }
};

export const logIn = async (userInfo) => {
  try {
    const { status, data } = await axios.post('/api/users/login', userInfo);

    if (status === 200) {
      setToken(data.authorization);
      return data;
    }
  } catch (err) {
    const { data } = err.response;
    alert(data.message);
  }
};
