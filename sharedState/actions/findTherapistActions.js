import * as actionTypes from './actionTypes';

export const addState = newState => {
    return {
        type: actionTypes.ADD_OR_UPDATE_STATE,
        newState
    }
}