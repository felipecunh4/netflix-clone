import axios from 'axios';

export const rest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
});
