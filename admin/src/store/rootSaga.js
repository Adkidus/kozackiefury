import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/sagas';
import { userSagas } from './team/sagas';

export default function* rootSaga() {
    yield all([call(authSagas), call(userSagas)]);
}