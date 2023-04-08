import types from './types';

export const getUsers = () => ({
  type: types.GET_USERS
});

export const getUsersSuccess = (list) => ({
  type: types.GET_USERS_SUCCESS,
  payload: list,
});

export const getUsersFail = (error) => ({
  type: types.GET_USERS_FAIL,
  payload: error,
});