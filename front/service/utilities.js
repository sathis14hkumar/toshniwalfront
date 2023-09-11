import axios from 'axios';
import config from '../config';
import { Toast } from './toast';

export const axiosInstance = axios.create({
  headers: {},
});

export const cancelTokenSource = axios.CancelToken.source();

export const logout = () => {
  localStorage.clear();
  window.location.href = '/';
};

export const getServiceUrl = () => {
  return config.api.baseUrl;
};

export const statusHelper = (status, data) => {
  if (data.status === 401) cancelTokenSource.cancel();

  if (data.status === 401 || data.status === 403) {
    Toast({ type: 'error', message: data.statusText });
    setTimeout(() => logout(), 1000);
  }
  if (status) {
    return {
      status: data.status,
      ...data.data,
    };
  }
  return data.data;
};
