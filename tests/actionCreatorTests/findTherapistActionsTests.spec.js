import * as findTherapistActions from '../../sharedState/actions/findTherapistActions';
import * as actionTypes from '../../sharedState/actions/actionTypes';

test("findTherapistActions returns the action with the new state", () => {
    const expected = {type: actionTypes.ADD_OR_UPDATE_STATE, newState: {abbreviation: 'IL', name: 'Illinois'}};

    const result = findTherapistActions.addState({abbreviation: 'IL', name: 'Illinois'});

    expect(result).toMatchObject(expected);
});