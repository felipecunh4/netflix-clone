import { MoviesActions } from '../actions/actions';

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
