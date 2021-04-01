import { Action, createReducer } from 'typesafe-actions';

import { MoviesActions } from '../actions/actions';
import { IMoviesState } from './types';

export const INITIAL_STATE: IMoviesState = {
  error: false,
  loading: false,
  items: [],
};

export const originalsReducer = createReducer<IMoviesState, Action>(
  INITIAL_STATE
)
  .handleAction(MoviesActions.listOriginalsMovies.request, (store) => ({
    ...store,
    error: false,
    loading: true,
  }))
  .handleAction(MoviesActions.listOriginalsMovies.success, (store, action) => ({
    ...store,
    error: false,
    loading: false,
    items: action.payload.items,
  }))
  .handleAction(MoviesActions.listOriginalsMovies.failure, (store) => ({
    ...store,
    error: true,
    loading: false,
  }));
