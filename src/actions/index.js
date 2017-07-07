import types from './types';

const {
    REMOVE_FOOD,
    GET_ALL_FOODS
} = types;

const postHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

function getAllFoods() {
    const fetchedData = dispatch =>
        fetch('http://127.0.0.1:3002/api/get-all-foods')
            .then(resp => resp.json())
            .then((resp) => {
                const actionData = {
                    type: GET_ALL_FOODS,
                    data: resp.data
                };

                dispatch(actionData)
            });

    return fetchedData;
}

function addFood(data) {
    const fetchedData = dispatch =>
        fetch('http://127.0.0.1:3002/api/add-food', {
            headers: postHeaders,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then((resp) => {
                dispatch(getAllFoods());
            });

    return fetchedData;
}

function removeFood(data) {
    return {
        type: REMOVE_FOOD,
        data
    }
}

export {
    addFood,
    removeFood,
    getAllFoods
};
