import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import SplashPage from './splashPage/SplashPage';
import FindTherapist from './findTherapist/FindTherapist';

export default class App extends React.Component {
  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
    this.redirectToFindTherapist = this.redirectToFindTherapist.bind(this);
  }
  renderScene(route, nav) {
        switch (route.name) {
        case routeNames.FIND_THERAPIST:
            return (
                <FindTherapist />
            );
        case routeNames.
        default:
            return (
                <SplashPage redirectToFindTherapist={this.redirectToFindTherapist} />
            );
        }
  }
  configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
  }
  redirectToFindTherapist() {
    this.nav.push({
      name: routeNames.FIND_THERAPIST
    });
  }
  render() {
    //show a loading screen on app init?
    return <Navigator
              configureScene={this.configureScene} 
              initialRoute={{name: routeNames.SPLASH_PAGE, index: 0}}
              ref={((nav) => {
                this.nav = nav;
              })}
              renderScene={this.renderScene}
              />;
  }
}

const routeNames = {
  FIND_THERAPIST: 'FIND_THERAPIST',
  SPLASH_PAGE: 'SPLASH_PAGE'
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});