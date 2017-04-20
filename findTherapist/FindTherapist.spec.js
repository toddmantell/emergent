import React from 'react';
import {shallow, mount} from 'enzyme';
import FindTherapist from './FindTherapist';

const shallowMountedFindTherapistComp = shallow(<FindTherapist />);

test("Component Renders", () => {
    expect(shallowMountedFindTherapistComp.find('ScrollView').length).toBe(1);
});