import { combineReducers } from 'redux';

import { infoReducer } from './info';
import { moviesReducer as movies } from './movies';

export const moviesReducer = combineReducers({
  info: infoReducer,
  data: movies,
});
