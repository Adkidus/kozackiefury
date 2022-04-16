import types from './types';

const INITIAL_STATE = {
    loading: false,
    currentUser: null,
    error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOG_IN_START:
            return {
                ...state,
                loading: true
            };
        case types.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case types.LOG_IN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                loading: false
            };
        case types.LOG_IN_FAILURE:
                return{
                    ...state,
                    currentUser: null,
                    error: action.payload,
                    loading: false
                }
        case types.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            };      
        case types.AUTH_FAILURE:
            return {
                ...state,
                loading: false
            };
        case types.LOG_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default authReducer;