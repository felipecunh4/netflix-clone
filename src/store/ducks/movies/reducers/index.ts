import { combineReducers } from 'redux';

import { originalsReducer } from './originals';
import { trendingReducer } from './trending';
import { topRatedReducer } from './toprated';
import { genresReducer } from './genres';
import { infoReducer } from './info';

export const moviesReducer = combineReducers({
  originals: originalsReducer,
  trending: trendingReducer,
  topRated: topRatedReducer,
  genres: genresReducer,
  info: infoReducer,
});
