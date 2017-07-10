import types from './types';

const {
    GET_ALL_FOODS,
    SET_LOADING,
    SET_ERROR
} = types;

const postHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

function setLoading(state) {
    return {
        type: SET_LOADING,
        loading: state
    };
}

function setError(state) {
    return {
        type: SET_ERROR,
        error: state
    };
}

function getAllFoods() {
    const fetchedData = dispatch =>
        fetch('/api/get-all-foods')
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
    const fetchedData = (dispatch) => {
        dispatch(setLoading(true));

        fetch('/api/add-food', {
            headers: postHeaders,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then((resp) => {
                dispatch(setLoading(false));

                if (resp && resp.status === 'ok') {
                    dispatch(setError(false));
                    dispatch(getAllFoods());
                } else {
                    dispatch(setError(true));
                }
            });
    }

    return fetchedData;
}

function removeFood(id) {
    const fetchedData = dispatch =>
        fetch('/api/remove-food', {
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
    setLoading,
    addFood,
    removeFood,
    getAllFoods
};
