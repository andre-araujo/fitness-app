import { createStore } from 'redux';
import { foodReducer } from '../reducers';

const store = createStore(foodReducer);

export default store;
