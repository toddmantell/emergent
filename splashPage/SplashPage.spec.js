import React from 'react';
import SplashPage from './SplashPage';
import renderer from 'react-test-renderer';

test("Splash Page Renders", () => {
    const shallowMountedSplashPage = renderer.create(<SplashPage />).toJSON();

    expect(shallowMountedSplashPage.children).toBe(3);
    //expect(shallowMountedSplashPage.find('View').length).toBe(1);
});