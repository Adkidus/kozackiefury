import api from '../../utils/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    getCarsSuccess,
    getCarsFail
} from './actions';
import types from './types';

const getCarsList = async () => {
    const response = await api.get('/cars/list');
    return response.data;
};

export function* getCars() {
    try {
        const list = yield getCarsList();
        yield put(getCarsSuccess(list));
    } catch (error) {
        yield put(getCarsFail(error.response.data.msg));
    }
}

export function* onGetCarsStart() {
    yield takeLatest(types.GET_CARS, getCars);
}

export function* carSagas() {
    yield all([
        call(onGetCarsStart)
    ]);
}