import types from './types';

const {
    ADD_FOOD,
    REMOVE_FOOD,
    GET_ALL_FOODS
} = types;

function addFood(data) {
    return {
        type: ADD_FOOD,
        data
    }
}

function removeFood(data) {
    return {
        type: REMOVE_FOOD,
        data
    }
}

function getAllFoods() {
    return {
        type: GET_ALL_FOODS
    }
}

export {
    addFood,
    removeFood,
    getAllFoods
};
