import types from './types';

const {
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
                if (resp && resp.status === 'ok') {
                    const actionData = {
                        type: GET_ALL_FOODS,
                        data: resp.data
                    };
                    dispatch(actionData)
                }
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
                if (resp && resp.status === 'ok') {
                    dispatch(getAllFoods());
                }
            });

    return fetchedData;
}

function removeFood(id) {
    const fetchedData = dispatch =>
        fetch('http://127.0.0.1:3002/api/remove-food', {
            headers: postHeaders,
            method: 'POST',
            body: JSON.stringify({ id })
        })
            .then(resp => resp.json())
            .then((resp) => {
                if (resp && resp.status === 'ok') {
                    dispatch(getAllFoods());
                }
            });

    return fetchedData;
}

export {
    addFood,
    removeFood,
    getAllFoods
};
