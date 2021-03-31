import { createAsyncAction } from 'typesafe-actions';
import { MoviesTypes } from '../types';
import { IListMoviesRequestAction, IListMoviesSuccessAction } from './types';

export class MoviesActions {
  static readonly listMovies = createAsyncAction(
    [MoviesTypes.LIST_MOVIES_REQUEST, (res: IListMoviesRequestAction) => res],
    [MoviesTypes.LIST_MOVIES_SUCCESS, (res: IListMoviesSuccessAction) => res],
    MoviesTypes.LIST_MOVIES_FAILURE
  )();
}
