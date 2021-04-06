import { EMovieKindRequest, EMovieTypes } from '../types';

export type TMoviePreview = {
  id: number;
  title: string;
  poster: string;
  type?: string;
};

export interface IListMoviesRequestAction {
  searchType: EMovieTypes;
  genreId?: EMovieKindRequest;
}

export interface IListMoviesSuccessAction {
  items: TMoviePreview[];
}

export enum EMoviePlatform {
  TV = 'tv',
  MOVIE = 'movie',
}

export interface IFindMovieInfoRequestAction {
  movieId: number;
  platform: EMoviePlatform;
}

export interface IFindMovieInfoSuccessAction {
  id: number;
  date: string;
  description: string;
  genres: string[];
  banner: string;
  title: string;
  average: number;
  totalSeasons: number;
}
