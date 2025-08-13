// src/api/client.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 8000,
});

// Interceptor para agregar token automáticamente
api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('access_token'); // o sessionStorage
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Error de red o timeout');
    } else if (error.response.status === 401) {
      console.warn('Token expirado o inválido');
      // Aquí puedes redirigir al login o refrescar token
    }
    return Promise.reject(error);
  }
);
