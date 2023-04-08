import { combineReducers } from 'redux';

import auth from './auth/reducer';
import team from './team/reducer';
import cars from './cars/reducer';

export default combineReducers({ auth, team, cars });