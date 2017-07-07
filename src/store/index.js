import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
    createStore,
    applyMiddleware
} from 'redux';

import { foodReducer } from '../reducers';

const loggerMiddleware = createLogger();

const store = createStore(
    foodReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;
