import types from './types';

export const logInStart = (credentials) => ({
  type: types.LOG_IN_START,
  payload: credentials,
});

export const logInSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (error) => ({
  type: types.LOG_IN_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const authStart = () => ({
  type: types.AUTH_START
})

export const authSuccess = (user) => ({
  type: types.AUTH_SUCCESS,
  payload: user,
});

export const authFailure = (error) => ({
  type: types.AUTH_FAILURE,
  payload: error,
});

export const updateUser = (user) => ({
  type: types.USER_UPDATE,
  payload: user
})

export const updateUserSuccess = (user) => ({
  type: types.USER_UPDATE_SUCCESS,
  payload: user
})

export const updateUserFailure = (error) => ({
  type: types.USER_UPDATE_FAILURE,
  payload: error
})