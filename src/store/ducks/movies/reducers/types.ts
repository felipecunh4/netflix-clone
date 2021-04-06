import {
  IListMoviesSuccessAction,
  IFindMovieInfoSuccessAction,
} from '../actions/types';

export interface IMoviesState extends IListMoviesSuccessAction {
  error: boolean;
  loading: boolean;
}

export interface IMovieInfoState extends IFindMovieInfoSuccessAction {
  error: boolean;
  loading: boolean;
}
