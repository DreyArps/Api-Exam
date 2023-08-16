import axios from 'axios';

export const API_BASE_URL = 'https://reqres.in/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId: number, updatedUserData: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${userId}`, updatedUserData);
    return response.data;
  } catch (error) {
    throw error;
  }
};