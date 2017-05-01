import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SplashForm from './SplashForm';
import {routes} from '../constants';

export default class SplashPage extends React.Component {
  constructor() {
    super();

    this.redirectToStateList = this.redirectToStateList.bind(this);
  }
  static navigationOptions = {
    title: "Welcome"
  };
  redirectToStateList() {
    const { navigate } = this.props.navigation;

    navigate(routes.StateList);
  }
  render() {
    return (
      <SplashForm styles={styles} redirectToStateList={this.redirectToStateList} />
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'midnightblue',
    flex: 2
  }
});
