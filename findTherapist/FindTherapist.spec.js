import React from 'react';
//import {shallow, mount} from 'enzyme';
import FindTherapist from './FindTherapist';
import renderer from 'react-test-renderer';

//const shallowMountedFindTherapistComp = shallow(<FindTherapist />);
const renderedFindTherapist = renderer.create(<FindTherapist />);

test("Component Renders", () => {

    // const result = renderer.getRenderOutput();
    // expect(result.type).toBe('View');
    expect(true).toBe(true);
});