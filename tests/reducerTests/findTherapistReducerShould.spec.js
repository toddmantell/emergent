import findTherapistReducer from '../../sharedState/reducers/findTherapistReducer';
import * as actionTypes from '../../sharedState/actions/actionTypes';

test("return the state that was chosen", () => {
    const expected = {abbreviation: 'IL', name: 'Illinois'};

    const action = {type: actionTypes.ADD_OR_UPDATE_STATE, newState: {abbreviation: 'IL', name: 'Illinois'}};

    const result = findTherapistReducer({}, action);

    expect(result).toMatchObject(expected);
});