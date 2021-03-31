import { all, fork } from 'redux-saga/effects';

import { moviesWatcher } from './movies/sagas/sagas';

export function* rootSaga() {
  return yield all([fork(moviesWatcher)]);
}
