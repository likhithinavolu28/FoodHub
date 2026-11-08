import axios from 'axios';

// Directly sets your live Render backend base URL
const api = axios.create({
  baseURL: 'https://foodhub-j81c.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically inject JWT token into requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;