import initialState from './initialState';

export default function findTherapistReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_OR_UPDATE_STATE':
            return [...state.filter(existingState => existingState.abbreviation !== action.state.abbreviation),
                        Object.assign({}, action.state)];
        default:
            return state;
    }
}