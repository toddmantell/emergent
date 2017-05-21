import {createStore, applyMiddleware} from 'redux';
import combinedReducers from '../reducers/combinedReducers';
import initialState from '../reducers/initialState';

const configureStore = createStore(combinedReducers, initialState);

export default configureStore;