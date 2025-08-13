import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts';

export const fetchPosts = async (skip: number = 0, limit: number = 10) => {
  const response = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
  return response.data;
};