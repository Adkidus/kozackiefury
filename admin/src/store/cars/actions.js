import types from './types';

export const getCars = () => ({
  type: types.GET_CARS
});

export const getCarsSuccess = (list) => ({
  type: types.GET_CARS_SUCCESS,
  payload: list,
});

export const getCarsFail = (error) => ({
  type: types.GET_CARS_FAIL,
  payload: error,
});

export const getCar = (id) => ({
  type: types.GET_CAR,
  payload: id
});

export const selectCar = (car) => ({
   type: types.SELECT_CAR,
   payload: car
});

export const getCarFail = (error) => ({
  type: types.GET_CAR_FAIL,
  payload: error
});