import types from './types';

const INITIAL_STATE = {
    loading: false,
    usersList: [],
    error: null,
};

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                loading: true
            };
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                usersList: action.payload,
                error: null,
                loading: false,
            };
        case types.GET_USERS_FAIL:
                return{
                    ...state,
                    usersList: [],
                    error: action.payload,
                    loading: false,
                }
        default:
            return state;
    }
};

export default usersReducer;