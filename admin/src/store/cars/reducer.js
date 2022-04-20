import types from './types';

const INITIAL_STATE = {
    loading: false,
    carsList: [],
    error: null,
};

const carsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_CARS:
            return {
                ...state,
                loading: true
            };
        case types.GET_CARS_SUCCESS:
            return {
                ...state,
                carsList: action.payload,
                error: null,
                loading: false,
            };
        case types.GET_CARS_FAIL:
                return{
                    ...state,
                    carsList: [],
                    error: action.payload,
                    loading: false,
                }
        default:
            return state;
    }
};

export default carsReducer;