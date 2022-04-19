import api from '../../utils/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    getUsersSuccess,
    getUsersFail
} from './actions';
import types from './types';

const getUsersList = async () => {
    const response = await api.get('/users/list');
    return response.data;
};

export function* getUsers() {
    try {
        const list = yield getUsersList();
        yield put(getUsersSuccess(list));
    } catch (error) {
        yield put(getUsersFail(error.response.data.msg));
    }
}

export function* onGetUsersStart() {
    yield takeLatest(types.GET_USERS, getUsers);
}

export function* userSagas() {
    yield all([
        call(onGetUsersStart)
    ]);
}