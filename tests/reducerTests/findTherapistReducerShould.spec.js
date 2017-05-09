import findTherapistReducer from '../../sharedState/reducers/findTherapistReducer';

test("return the state that was chosen", () => {
    const expected = {};

    const action = {type: 'ADD_STATE', state: {abbreviation: 'IL', name: 'Illinois'}};

    const result = findTherapistReducer(action);
    expect(true).toBe(false);
});