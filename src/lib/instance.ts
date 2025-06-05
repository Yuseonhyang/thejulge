import axios from 'axios';
import { PATHS } from '../constants/path';

const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return config;
  config.headers.set('Authorization', `Bearer ${accessToken}`);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const originalRequest = error.config;

    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      window.location.href = `${PATHS.LOGIN}`;
    }

    //   if (!error.response || error.response.status !== 401 || originalRequest._retry) {
    //     return Promise.reject(error);
    //   }

    //   originalRequest._retry = true;

    // 리프레시 토큰 api가 없어서... ㅠㅠ 아쉽
    //   const refreshToken = localStorage.getItem('refreshToken');
    //   if (!refreshToken) {
    //     window.location.href = `${PATHS.LOGIN}`;
    //     return Promise.reject(error);
    //   }

    //   const newAccessToken = await refreshAccessToken(refreshToken);
    //   if (!newAccessToken) {
    //     window.location.href = `${PATHS.LOGIN}`;
    //     return Promise.reject(error);
    //   }

    //   localStorage.setItem('accessToken', newAccessToken);
    //   originalRequest.headers.set('Authorization', `Bearer ${newAccessToken}`);
    //   return axiosClient(originalRequest);
    // }
    // );

    // async function refreshAccessToken(refreshToken: string) {
    //   try {
    //     const res = await axios.post(
    //       `${BASE_URL}/auth/refresh-token`,
    //       { refreshToken },
    //       { headers: { 'Content-Type': 'application/json' }, adapter: 'fetch' }
    //     );
    //     return res.data?.accessToken;
    //   } catch {
    //     return null;
    //   }
  }
);

export default axiosInstance;
