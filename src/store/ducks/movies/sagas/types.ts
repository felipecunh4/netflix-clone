import { CallEffect } from 'redux-saga/effects';
import { IMovieApiRest } from '../../../../services/api/types';
import { MoviesActions } from '../actions/actions';
import { EMovieTypes } from '../types';

export type TMovieTypes = IMovieApiRest;

export type TMovieSearchType = Record<
  keyof typeof EMovieTypes,
  (movieId: number) => Generator<CallEffect<TMovieTypes>, TMovieTypes>
>;

export type ListMoviesAction = ReturnType<
  typeof MoviesActions.listMovies.request
>;

export type ListOriginalsMoviesAction = ReturnType<
  typeof MoviesActions.listOriginalsMovies.request
>;

export type ListTrendingMoviesAction = ReturnType<
  typeof MoviesActions.listTrendingMovies.request
>;

export type ListTopRatedMoviesAction = ReturnType<
  typeof MoviesActions.listTopRatedMovies.request
>;

export type ListGenresMoviesAction = ReturnType<
  typeof MoviesActions.listGenresMovies.request
>;

export type FindMovieInfoAction = ReturnType<
  typeof MoviesActions.findMovieInfo.request
>;
