import api from '../../utils/api';
import setAuthToken from '../../utils/setAuthToken';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    authSuccess,
    authFailure,
    logInFailure,
    logInSuccess,
    updateUserSuccess,
    updateUserFailure
} from './actions';
import types from './types';

const logIn = async (email, password) => {
    const response = await api.post('/auth/login', {
        email,
        password,
    });
    return response.data;
};

export function* logInWithCredentials({ payload: { email, password } }) {
    try {
        const user = yield logIn(email, password);
        yield put(logInSuccess(user));
    } catch (error) {
        yield put(logInFailure(error.response.data.msg));
    }
}

export function* onLogInStart() {
    yield takeLatest(types.LOG_IN_START, logInWithCredentials);
}

const auth = async(token) => {
    const response = await api.get('/auth',{ headers: {"Authorization" : `Bearer ${token}`} })
    return response.data;
}

export function* authToken(){
    try {
        if(!localStorage.getItem('token'))
            throw new Error()
        const authToken = localStorage.getItem('token')
        const user = yield auth(authToken);
        setAuthToken(authToken)
        yield put(authSuccess(user));
    } catch (error) {
        let err = null
        if(localStorage.getItem('token')){
            setAuthToken()
            err = 'Sesja wygasła'
        }
        yield put(authFailure(err));
    }
}

export function* onAuthStart(){
    yield takeLatest(types.AUTH_START, authToken)
}

const updateUserReq = async(user) => {
    await api.patch(`/users/update/${user._id}`, user)
    // console.log(res)
    // return response.data;
}

export function* updateUser({payload}){
    console.log(payload)
    try {
        yield updateUserReq(payload);
        yield put(updateUserSuccess(payload))
    } catch (error) {
        yield put(updateUserFailure(error.response.data.msg));
    }
}

export function* onUpdateStart(){
    yield takeLatest(types.USER_UPDATE, updateUser)
}

export function* authSagas() {
    yield all([
        call(onLogInStart),
        call(onAuthStart),
        call(onUpdateStart)
    ]);
}