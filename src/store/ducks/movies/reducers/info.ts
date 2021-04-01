import { Action, createReducer } from 'typesafe-actions';

import { MoviesActions } from '../actions/actions';
import { IMovieInfoState } from './types';

export const INITIAL_STATE: IMovieInfoState = {
  error: false,
  loading: false,
  id: 0,
  date: '',
  description: '',
  genres: [],
  banner: '',
  title: '',
  average: 0,
  totalSeasons: 0,
};

export const infoReducer = createReducer<IMovieInfoState, Action>(INITIAL_STATE)
  .handleAction(MoviesActions.findMovieInfo.request, (store) => ({
    ...store,
    error: false,
    loading: true,
  }))
  .handleAction(MoviesActions.findMovieInfo.success, (store, action) => ({
    ...store,
    ...action.payload,
    error: false,
    loading: false,
  }))
  .handleAction(MoviesActions.findMovieInfo.failure, (store) => ({
    ...store,
    error: true,
    loading: false,
  }));
