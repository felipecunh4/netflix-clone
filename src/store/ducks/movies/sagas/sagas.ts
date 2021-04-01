/* eslint-disable no-console */
import { put, fork, take, all, call } from 'typed-redux-saga';

import {
  ListOriginalsMoviesAction,
  ListTrendingMoviesAction,
  ListTopRatedMoviesAction,
  ListGenresMoviesAction,
} from './types';
import { EMovieKindRequest, MoviesTypes } from '../types';

import { MoviesActions } from '../actions/actions';

import { MovieRest } from '../../../../services/api/index';
import { MoviesTransformer } from '../../../../transformer/movies/movies';

export function* listOriginalsMovies() {
  try {
    const response = yield* call(MovieRest.listOriginals);

    const movies = MoviesTransformer.ApiListMoviesToApp(response);

    yield* put(MoviesActions.listOriginalsMovies.success(movies));
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.listOriginalsMovies.failure());
  }
}

export function* listTrendingMovies() {
  try {
    const response = yield* call(MovieRest.listTrending);

    const movies = MoviesTransformer.ApiListMoviesToApp(response);

    yield* put(MoviesActions.listTrendingMovies.success(movies));
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.listTrendingMovies.failure());
  }
}

export function* listTopRatedMovies() {
  try {
    const response = yield* call(MovieRest.listTopRated);

    const movies = MoviesTransformer.ApiListMoviesToApp(response);

    yield* put(MoviesActions.listTopRatedMovies.success(movies));
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.listTopRatedMovies.failure());
  }
}

export function* listGenresMovies(genre: EMovieKindRequest) {
  try {
    const response = yield* call(MovieRest.listGenres, 28);

    const movies = MoviesTransformer.ApiListMoviesToApp(response);

    yield* put(MoviesActions.listGenresMovies.success(movies));
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.listGenresMovies.failure());
  }
}

/**
 * WATCHERS
 */

export function* watchOriginalsMoviesList() {
  while (true) {
    yield* take<ListOriginalsMoviesAction>(
      MoviesTypes.LIST_ORIGINALS_MOVIES_REQUEST
    );
    yield* fork(listOriginalsMovies);
  }
}

export function* watchTrendingMoviesList() {
  while (true) {
    yield* take<ListTrendingMoviesAction>(
      MoviesTypes.LIST_TRENDING_MOVIES_REQUEST
    );
    yield* fork(listTrendingMovies);
  }
}

export function* watchTopRatedMoviesList() {
  while (true) {
    yield* take<ListTopRatedMoviesAction>(
      MoviesTypes.LIST_TOP_RATED_MOVIES_REQUEST
    );
    yield* fork(listTopRatedMovies);
  }
}

export function* watchGenresMoviesList() {
  while (true) {
    const { payload } = yield* take<ListGenresMoviesAction>(
      MoviesTypes.LIST_GENRES_MOVIES_REQUEST
    );
    yield* fork(listGenresMovies, payload.genre);
  }
}

export function* moviesWatcher() {
  return yield all([
    fork(watchOriginalsMoviesList),
    fork(watchTrendingMoviesList),
    fork(watchTopRatedMoviesList),
    fork(watchGenresMoviesList),
  ]);
}
