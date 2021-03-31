import { combineReducers } from 'redux';

import { moviesReducer } from './movies/reducers';

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
