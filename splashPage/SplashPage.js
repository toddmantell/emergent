import React from 'react';
import { StyleSheet, Navigator, Text, View, Button } from 'react-native';
import SplashForm from './SplashForm';

export default class SplashPage extends React.Component {
  render() {
    return (
      <SplashForm styles={styles} redirectToFindTherapist={this.props.redirectToFindTherapist} />
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

SplashPage.propTypes = {
  redirectToFindTherapist: React.PropTypes.func.isRequired
}
