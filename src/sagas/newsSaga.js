/* eslint-disable require-jsdoc */
import { put, call, takeLatest, all } from 'redux-saga/effects';

import * as newsService from 'services/news';

import { getAllNews, getAllNewsSuccess, getAllNewsFailure } from 'reducers/newsReducer';

function* getAllNewsSaga(action) {
  try {
    const { newsType } = action.payload ?? {};
    const news = yield call(newsService.getAllNews, newsType);

    yield put(getAllNewsSuccess({ news }));
  } catch (error) {
    yield put(getAllNewsFailure(error?.errors?.message || 'Error Fetching News'));
  }
}

export default function* newsSaga() {
  yield all([takeLatest(getAllNews, getAllNewsSaga)]);
}
