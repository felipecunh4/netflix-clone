import { EMovieKindRequest } from '../types';

export interface IListMoviesRequestAction {
  genre: EMovieKindRequest;
}

export type TMoviePreview = {
  id: number;
  title: string;
  poster: string;
};

export interface IListMoviesSuccessAction {
  items: TMoviePreview[];
}
