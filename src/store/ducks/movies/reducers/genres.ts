import { Action, createReducer } from 'typesafe-actions';

import { MoviesActions } from '../actions/actions';
import { IMoviesState } from './types';

export const INITIAL_STATE: IMoviesState = {
  error: false,
  loading: false,
  items: [],
};

export const genresReducer = createReducer<IMoviesState, Action>(INITIAL_STATE)
  .handleAction(MoviesActions.listGenresMovies.request, (store) => ({
    ...store,
    error: false,
    loading: true,
  }))
  .handleAction(MoviesActions.listGenresMovies.success, (store, action) => ({
    ...store,
    error: false,
    loading: false,
    items: action.payload.items,
  }))
  .handleAction(MoviesActions.listGenresMovies.failure, (store) => ({
    ...store,
    error: true,
    loading: false,
  }));
