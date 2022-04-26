import setAuthToken from '../../utils/setAuthToken';
import types from './types';

const INITIAL_STATE = {
    loading: false,
    currentUser: null,
    error: null,
    authError: null,
    updateError: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOG_IN_START:
            return {
                ...state,
                loading: true,
                authError: null,
                updateError: null
            };
        case types.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case types.LOG_IN_SUCCESS:
            setAuthToken(action.payload.token);
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                loading: false,
                updateError: null
            };
        case types.LOG_IN_FAILURE:
                return{
                    ...state,
                    currentUser: null,
                    error: action.payload,
                    loading: false,
                    updateError: null
                }
        case types.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                updateError: null
            };      
        case types.AUTH_FAILURE:
            return {
                ...state,
                authError: action.payload,
                loading: false,
                updateError: null
            };
        case types.USER_UPDATE_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                updateError: null
            };
        case types.USER_UPDATE_FAILURE:
            return {
                ...state,
                updateError: 'Błąd'
            }
        case types.LOG_OUT:
            localStorage.removeItem('token')
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default authReducer;