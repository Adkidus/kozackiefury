import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/sagas';

export default function* rootSaga() {
    yield all([call(authSagas)]);
}