import stateReducer from '../../sharedState/reducers/stateReducer';
import * as actionTypes from '../../sharedState/actions/actionTypes';

test("return the state that was chosen", () => {
    const expected = {abbreviation: 'IL', name: 'Illinois'};

    const action = {type: actionTypes.ADD_OR_UPDATE_STATE, newState: {abbreviation: 'IL', name: 'Illinois'}};

    const result = stateReducer({}, action);

    expect(result).toMatchObject(expected);
});