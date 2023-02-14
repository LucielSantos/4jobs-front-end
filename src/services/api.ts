import axios from 'axios';
import { getUserToken } from '../utils';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/'
      : 'https://back-4jobs.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${getUserToken()}`,
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getUserToken()}`;

  return config;
});

export { api };
