import axios from 'axios';

const API_URL = '/api/v1/auth';

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
  city_name: string;
  role?: string;
}

export const registerUserApi = async (userData: RegisterUserData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
