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
    return <AppNavigation />;
  }
}