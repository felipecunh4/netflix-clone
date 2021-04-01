import { createAsyncAction } from 'typesafe-actions';
import { MoviesTypes } from '../types';
import { IListMoviesRequestAction, IListMoviesSuccessAction } from './types';

export class MoviesActions {
  static readonly listOriginalsMovies = createAsyncAction(
    MoviesTypes.LIST_ORIGINALS_MOVIES_REQUEST,
    [
      MoviesTypes.LIST_ORIGINALS_MOVIES_SUCCESS,
      (res: IListMoviesSuccessAction) => res,
    ],
    MoviesTypes.LIST_ORIGINALS_MOVIES_FAILURE
  )();

  static readonly listTrendingMovies = createAsyncAction(
    MoviesTypes.LIST_TRENDING_MOVIES_REQUEST,
    [
      MoviesTypes.LIST_TRENDING_MOVIES_SUCCESS,
      (res: IListMoviesSuccessAction) => res,
    ],
    MoviesTypes.LIST_TRENDING_MOVIES_FAILURE
  )();

  static readonly listTopRatedMovies = createAsyncAction(
    MoviesTypes.LIST_TOP_RATED_MOVIES_REQUEST,
    [
      MoviesTypes.LIST_TOP_RATED_MOVIES_SUCCESS,
      (res: IListMoviesSuccessAction) => res,
    ],
    MoviesTypes.LIST_TOP_RATED_MOVIES_FAILURE
  )();

  static readonly listGenresMovies = createAsyncAction(
    [
      MoviesTypes.LIST_GENRES_MOVIES_REQUEST,
      (res: IListMoviesRequestAction) => res,
    ],
    [
      MoviesTypes.LIST_GENRES_MOVIES_SUCCESS,
      (res: IListMoviesSuccessAction) => res,
    ],
    MoviesTypes.LIST_GENRES_MOVIES_FAILURE
  )();
}
