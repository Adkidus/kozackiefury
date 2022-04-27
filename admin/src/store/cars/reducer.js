import types from './types';

const INITIAL_STATE = {
    loading: false,
    carsList: [],
    selectedCar: null,
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
        case types.GET_CAR:
            return {
                ...state,
                loading: true
            }
        case types.GET_CAR_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.SELECT_CAR:
            return{
                ...state,
                loading: false,
                selectedCar: action.payload,
            }
        default:
            return state;
    }
};

export default carsReducer;