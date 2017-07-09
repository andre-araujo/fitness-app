import thunkMiddleware from 'redux-thunk';
import {
    createStore,
    applyMiddleware
} from 'redux';

import { foodReducer } from '../reducers';

const store = createStore(
    foodReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;
