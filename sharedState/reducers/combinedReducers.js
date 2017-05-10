import {combineReducers} from 'redux';
import stateReducer from './stateReducer';

const combinedReducers = combineReducers({stateReducer});

export default combinedReducers;