import types from '../actions/types';

const {
    GET_ALL_FOODS
} = types;

const initialState = {
    foods: []
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
        default:
            return state;
    }
}

export {
    foodReducer
};
