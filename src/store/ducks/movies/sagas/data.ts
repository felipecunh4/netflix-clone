import { call } from 'typed-redux-saga';

import { TMovieSearchType } from './types';
import { MovieRest } from '../../../../services/api/index';

export const handleMovieSearch: TMovieSearchType = {
  ORIGINALS: function* req() {
    const response = yield* call(MovieRest.listOriginals);

    return response;
  },
  TREDING: function* req() {
    const response = yield* call(MovieRest.listTrending);

    return response;
  },
  TOP_RATED: function* req() {
    const response = yield* call(MovieRest.listTopRated);

    return response;
  },
  ACTION: function* req(movieId: number) {
    const response = yield* call(MovieRest.listGenres, movieId);

    return response;
  },
  COMEDY: function* req(movieId: number) {
    const response = yield* call(MovieRest.listGenres, movieId);

    return response;
  },
  HORROR: function* req(movieId: number) {
    const response = yield* call(MovieRest.listGenres, movieId);

    return response;
  },
  ROMANCE: function* req(movieId: number) {
    const response = yield* call(MovieRest.listGenres, movieId);

    return response;
  },
  DOCUMENTARY: function* req(movieId: number) {
    const response = yield* call(MovieRest.listGenres, movieId);

    return response;
  },
};
