import {combineReducers} from 'redux';
import findTherapistReducer from './findTherapistReducer';

const combinedReducers = combineReducers({findTherapistReducer});

export default combinedReducers;