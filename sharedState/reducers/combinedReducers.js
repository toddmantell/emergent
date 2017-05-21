import {combineReducers} from 'redux';
import state from './stateReducer';

const combinedReducers = combineReducers({state});

export default combinedReducers;