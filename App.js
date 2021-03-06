import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashPage from './splashPage/SplashPage';
import FindTherapist from './findTherapist/FindTherapist';
import StateList from './stateList/StateList';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import store from './sharedState/store/configureStore';

const AppNavigation = StackNavigator({
  Home: { screen: SplashPage },
  StateList: { screen: StateList },
  FindTherapist: { screen: FindTherapist }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation style={styles.container} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'android') ? 20 : 0
  }
});