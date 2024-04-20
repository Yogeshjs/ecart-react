import axios from 'axios';
import { store } from 'shared/store/store';
import { userLogout } from 'shared/store/slices/authSlice';

import isJwtTokenExpired from 'jwt-check-expiry';

export const productClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const addJWTRequestTransform = (client) => {
  client.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token');

      if (token && isJwtTokenExpired(token)) {
        store.dispatch(userLogout());
        return Promise.reject(new Error('Session expired'));
      }

      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    },
    function (error) {
      console.log('error from interceptor ::', error);
      return Promise.reject(error);
    }
  );
};

export const addJWTRequestTransformToClients = (transform, clients, ...options) => {
  clients.forEach((client) => transform(client, ...options));
};

export const clients = [productClient];

addJWTRequestTransformToClients(addJWTRequestTransform, clients);
