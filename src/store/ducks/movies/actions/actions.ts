import { createAsyncAction } from 'typesafe-actions';
import { MoviesTypes } from '../types';
import {
  IFindMovieInfoRequestAction,
  IFindMovieInfoSuccessAction,
  IListMoviesSuccessAction,
  IListMoviesRequestAction,
} from './types';

export class MoviesActions {
  static readonly listMovies = createAsyncAction(
    [MoviesTypes.LIST_MOVIES_REQUEST, (res: IListMoviesRequestAction) => res],
    [MoviesTypes.LIST_MOVIES_SUCCESS, (res: IListMoviesSuccessAction) => res],
    MoviesTypes.LIST_MOVIES_FAILURE
  )();

  static readonly findMovieInfo = createAsyncAction(
    [
      MoviesTypes.FIND_MOVIE_INFO_REQUEST,
      (res: IFindMovieInfoRequestAction) => res,
    ],
    [
      MoviesTypes.FIND_MOVIE_INFO_SUCCESS,
      (res: IFindMovieInfoSuccessAction) => res,
    ],
    MoviesTypes.FIND_MOVIE_INFO_FAILURE
  )();
}
