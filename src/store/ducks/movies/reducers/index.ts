import { combineReducers } from 'redux';

import { moviesReducer as movies } from './movies';

export const moviesReducer = combineReducers({
  movies,
});
