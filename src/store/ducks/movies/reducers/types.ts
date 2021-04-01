import {
  IListMoviesSuccessAction,
  IFindMovieInfoSuccessAction,
  IListGenreMoviesSuccessAction,
} from '../actions/types';

export interface IMoviesState extends IListMoviesSuccessAction {
  error: boolean;
  loading: boolean;
}

export interface IMoviesGenreState extends IListGenreMoviesSuccessAction {
  error: boolean;
  loading: boolean;
}

export interface IMovieInfoState extends IFindMovieInfoSuccessAction {
  error: boolean;
  loading: boolean;
}
