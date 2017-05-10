import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function stateReducer(state = initialState.state, action) {
    switch(action.type) {
        case actionTypes.ADD_OR_UPDATE_STATE:
            return Object.assign({}, action.newState);
        default:
            return state;
    }
}