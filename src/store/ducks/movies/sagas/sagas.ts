/* eslint-disable no-console */
import { put, fork, take, all, call } from 'typed-redux-saga';

import { FindMovieInfoAction, ListMoviesAction } from './types';
import { EMovieKindRequest, MoviesTypes, EMovieTypes } from '../types';
import { EMoviePlatform } from '../actions/types';

import { MoviesActions } from '../actions/actions';

import { MovieRest } from '../../../../services/api/index';
import { MoviesTransformer } from '../../../../transformer/movies/movies';
import { handleMovieSearch } from './data';

export function* listMovies(
  searchType: EMovieTypes,
  genreId: EMovieKindRequest
) {
  try {
    const response = yield* call(handleMovieSearch[searchType], genreId);

    const movies = MoviesTransformer.ApiListMoviesToApp(response, searchType);

    yield* put(MoviesActions.listMovies.success(movies));
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.listMovies.failure());
  }
}

export function* findMovieInfo(movieId: number, platform: EMoviePlatform) {
  try {
    const response = yield* call(MovieRest.findMovieInfo, movieId, platform);

    const movieInfo = MoviesTransformer.ApiFindMovieInfoToApp(response);

    yield* put(MoviesActions.findMovieInfo.success(movieInfo));
  } catch (err) {
    console.log(err);
    yield* put(MoviesActions.findMovieInfo.failure());
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
    yield* fork(listMovies, payload.searchType, payload.genreId || 0);
  }
}

export function* watchMovieInfo() {
  while (true) {
    const { payload } = yield* take<FindMovieInfoAction>(
      MoviesTypes.FIND_MOVIE_INFO_REQUEST
    );
    yield* fork(findMovieInfo, payload.movieId, payload.platform);
  }
}

export function* moviesWatcher() {
  return yield all([fork(watchMoviesList), fork(watchMovieInfo)]);
}
