import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // Укажите ваш адрес бекенда
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехватчик ошибок
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Ошибка запроса:', error);
    return Promise.reject(error);
  }
);

export default instance;
