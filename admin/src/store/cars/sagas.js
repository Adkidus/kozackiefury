import api from '../../utils/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    getCarsSuccess,
    getCarsFail,
    selectCar,
    getCarFail
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

const getCarReq = async (id) => {
    const response = await api.get(`/cars/byId/${id}`);
    return response.data;
};

export function* getCar({ payload: { carId } }){
    try {
        const car = yield getCarReq(carId);
        yield put(selectCar(car));
    } catch (error) {
        yield put(getCarFail(error.response.data.msg));
    }
}

export function* onGetCarStart(){
    yield takeLatest(types.GET_CAR, getCar);
}

export function* carSagas() {
    yield all([
        call(onGetCarsStart),
        call(onGetCarStart)
    ]);
}