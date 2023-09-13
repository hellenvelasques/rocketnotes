import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-rocketnotes-2v5a.onrender.com',
});