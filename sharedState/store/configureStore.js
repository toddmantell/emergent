import {createStore, applyMiddleware} from 'redux';
import combinedReducers from '../reducers/combinedReducers';
import initialState from '../reducers/initialState';

const store = createStore(combinedReducers);

export default store;