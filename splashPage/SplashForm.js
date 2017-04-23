import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SplashForm = props => {
        return (
                <View style={props.styles.container}>
                        <Text style={{color: 'midnightblue'}}>Open up App.js to start working on your app!</Text>
                        <Text style={{color: 'midnightblue'}}>Changes you make will automatically reload.</Text>
                        <Text style={{color: 'midnightblue'}}>Shake your phone to open the developer menu.</Text>
                        <Button title="FindTherapist" onPress={props.redirectToFindTherapist} color="midnightblue" title="Find A Therapist" />
                </View>
        );
}

const styles = StyleSheet.create({}); 

SplashForm.propTypes = {
   redirectToFindTherapist: React.PropTypes.func.isRequired,
   styles: React.PropTypes.object.isRequired
}

export default SplashForm;