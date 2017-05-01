import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashPage from './splashPage/SplashPage';
import FindTherapist from './findTherapist/FindTherapist';
import StateList from './stateList/StateList';

const AppNavigation = StackNavigator({
  Home: { screen: SplashPage },
  StateList: { screen: StateList },
  FindTherapist: { screen: FindTherapist }
})

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    //show a loading screen on app init?
    return <AppNavigation />;
  }
}

// const routeNames = {
//   FIND_THERAPIST: 'FIND_THERAPIST',
//   SPLASH_PAGE: 'SPLASH_PAGE',
//   STATELIST: 'STATELIST'
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });