import axios from 'axios';
import { IMovieApiRest, TMovieInfo } from './types';

export const basicFetch = async (endpoint: string) => {
  const { data } = await axios.get<IMovieApiRest>(
    `${process.env.NEXT_PUBLIC_API_BASE}${endpoint}`
  );

  return data.results;
};

export const getMovieInfo = async (endpoint: string) => {
  const { data } = await axios.get<TMovieInfo>(
    `${process.env.NEXT_PUBLIC_API_BASE}${endpoint}`
  );

  return data;
};
