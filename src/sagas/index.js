/* eslint-disable require-jsdoc */
import { all, fork } from 'redux-saga/effects';

import newsSaga from './newsSaga';

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}
