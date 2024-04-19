import { authClient } from './clients';

const endPoints = {
  login: 'auth/login'
};

export const loginUser = (data) =>
  authClient
    .post(endPoints.login, data)
    .then((res) => res.data)
    .catch((err) => console.log('err from login user ::', err));
