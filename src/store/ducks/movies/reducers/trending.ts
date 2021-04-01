import { Action, createReducer } from 'typesafe-actions';

import { MoviesActions } from '../actions/actions';
import { IMoviesState } from './types';

export const INITIAL_STATE: IMoviesState = {
  error: false,
  loading: false,
  items: [],
};

export const trendingReducer = createReducer<IMoviesState, Action>(
  INITIAL_STATE
)
  .handleAction(MoviesActions.listTrendingMovies.request, (store) => ({
    ...store,
    error: false,
    loading: true,
  }))
  .handleAction(MoviesActions.listTrendingMovies.success, (store, action) => ({
    ...store,
    error: false,
    loading: false,
    items: action.payload.items,
  }))
  .handleAction(MoviesActions.listTrendingMovies.failure, (store) => ({
    ...store,
    error: true,
    loading: false,
  }));
