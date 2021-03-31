/* eslint-disable no-console */
import { put, fork, take, all, call } from 'typed-redux-saga';

import { ListMoviesAction } from './types';
import { MoviesTypes } from '../types';

import { MoviesActions } from '../actions/actions';

export function* listMovies(genre: string) {
  try {
    console.log('chegou aqui', genre);

    yield* put(MoviesActions.listMovies.failure());
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.listMovies.failure());
  }
}

/**
 * WATCHERS
 */

export function* watchMoviesList() {
  while (true) {
    const { payload } = yield* take<ListMoviesAction>(
      MoviesTypes.LIST_MOVIES_REQUEST
    );
    yield* fork(listMovies, payload.genre);
  }
}

export function* moviesWatcher() {
  return yield all([fork(watchMoviesList)]);
}
