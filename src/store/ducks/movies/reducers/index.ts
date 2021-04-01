import { combineReducers } from 'redux';

import { originalsReducer } from './originals';
import { trendingReducer } from './trending';
import { topRatedReducer } from './toprated';
import { genresReducer } from './genres';

export const moviesReducer = combineReducers({
  originals: originalsReducer,
  trending: trendingReducer,
  topRated: topRatedReducer,
  genres: genresReducer,
});
