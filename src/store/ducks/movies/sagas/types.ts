import { MoviesActions } from '../actions/actions';

export type ListMoviesAction = ReturnType<
  typeof MoviesActions.listMovies.request
>;
