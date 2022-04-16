import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    authSuccess,
    authFailure,
    logInFailure,
    logInSuccess,
} from './actions';
import types from './types';

const logIn = async (email, password) => {
    const response = await axios.post('http://localhost:5000/auth/login', {
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
    const response = await axios.get('http://localhost:5000/auth',{ headers: {"Authorization" : `Bearer ${token}`} })
    return response.data;
}

export function* authToken(){
    try {
        if(!localStorage.getItem('token'))
            throw new Error()
        const authToken = localStorage.getItem('token')
        const user = yield auth(authToken);
        yield put(authSuccess(user));
    } catch (error) {
        let err = null
        if(localStorage.getItem('token')){
            localStorage.removeItem('token')
            err = 'Sesja wygasła'
        }
        yield put(authFailure(err));
    }
}

export function* onAuthStart(){
    yield takeLatest(types.AUTH_START, authToken)
}

export function* authSagas() {
    yield all([
        call(onLogInStart),
        call(onAuthStart)
    ]);
}