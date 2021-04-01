import { Action, createReducer } from 'typesafe-actions';

import { MoviesActions } from '../actions/actions';
import { IMoviesGenreState } from './types';

export const INITIAL_STATE: IMoviesGenreState = {
  error: false,
  loading: false,
  action: [],
  comedy: [],
  horror: [],
  romance: [],
  documentary: [],
};

export const genresReducer = createReducer<IMoviesGenreState, Action>(
  INITIAL_STATE
)
  .handleAction(MoviesActions.listGenresMovies.request, (store) => ({
    ...store,
    error: false,
    loading: true,
  }))
  .handleAction(MoviesActions.listGenresMovies.success, (store, action) => ({
    ...store,
    ...action.payload,
    error: false,
    loading: false,
  }))
  .handleAction(MoviesActions.listGenresMovies.failure, (store) => ({
    ...store,
    error: true,
    loading: false,
  }));
