import { Action, createReducer } from 'typesafe-actions';

import { MoviesActions } from '../actions/actions';
import { IMoviesState } from './types';

export const INITIAL_STATE: IMoviesState = {
  error: false,
  loading: false,
  items: [],
};

export const topRatedReducer = createReducer<IMoviesState, Action>(
  INITIAL_STATE
)
  .handleAction(MoviesActions.listTopRatedMovies.request, (store) => ({
    ...store,
    error: false,
    loading: true,
  }))
  .handleAction(MoviesActions.listTopRatedMovies.success, (store, action) => ({
    ...store,
    error: false,
    loading: false,
    items: action.payload.items,
  }))
  .handleAction(MoviesActions.listTopRatedMovies.failure, (store) => ({
    ...store,
    error: true,
    loading: false,
  }));
