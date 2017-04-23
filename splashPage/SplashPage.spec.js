import React from 'react';
import SplashPage from './SplashPage';
import renderer from 'react-test-renderer';

const stubFunctionAsProp = () => 'stub!';

test("Splash Page Renders", () => {
    const mountedSplashPage = renderer.create(<SplashPage redirectToFindTherapist={stubFunctionAsProp} 
        style={{padding: 0}}/>).toJSON();

    const button = mountedSplashPage.children[3].children[0].children[0];
    console.log(button);

    expect(mountedSplashPage.children.length).toBe(4);
    expect(mountedSplashPage.children[3].type).toBe('View');
});