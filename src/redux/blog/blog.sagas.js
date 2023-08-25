import { takeLatest, put, all, call } from 'redux-saga/effects';

import BlogTypes from './blog.types';
import { blogFetchSuccess, blogFetchFailure } from './blog.actions';
import { fetchDocumentsFromStore } from '../../firebase/firebase.utils';

export function* blogFetchStart({ payload }) {
  try {
    const data = yield call(fetchDocumentsFromStore, 'blog', payload.from, payload.limit);
    yield put(blogFetchSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(blogFetchFailure('An internal error occurred. We are looking into this.'));
  }
}

export function* onBlogFetchStart() {
  yield takeLatest(BlogTypes.BLOG_FETCH_START, blogFetchStart);
}

export function* blogSagas() {
  yield all([call(onBlogFetchStart)]);
}
