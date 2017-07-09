import types from '../actions/types';

const {
    SET_LOADING,
    GET_ALL_FOODS
} = types;

const initialState = {
    foods: [],
    loading: false
};

function foodReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_FOODS: {
            const newState = {
                foods: action.data
            };
            return {
                ...state,
                ...newState
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        default:
            return state;
    }
}

export {
    foodReducer
};
