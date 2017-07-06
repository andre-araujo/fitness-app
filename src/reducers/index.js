import types from '../actions/types';

const {
    ADD_FOOD,
    REMOVE_FOOD,
    GET_ALL_FOODS
} = types;

const initialState = {
    foods: [
        {
            title: 'tikka massala',
            image: '',
            info: {
                calories: '23 cal',
                sodium: '31 g',
                fat: '21 g'
            }
        }
    ]
};

function foodReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FOOD: {
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
