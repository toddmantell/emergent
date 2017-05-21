import React, {PropTypes} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Button, Card, ListItem, List } from 'react-native-elements';
//note that you might get an error regarding featuredTitle.fontFamily from react-native-elements, details here: https://github.com/react-native-training/react-native-elements/issues/311

const FindTherapistScreen = props => {
    const list = [
  {
    title: 'Yes',
    icon: 'av-timer'
  },
  {
    title: 'No',
    icon: 'flight-takeoff'
  }  
];
    return (
        <View>            
            <Card title="Do you know what kind of Therapist you need?">
                {list.map((item, index) => (
                    <ListItem
                        key={index}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        onPress={() => alert(JSON.stringify(props.selectedState))}
                    />
                ))}
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'  
    }
});

FindTherapistScreen.propTypes = {
   selectedState: PropTypes.shape({
       state: PropTypes.shape({
        abbreviation: PropTypes.string.isRequired,
        stateName: PropTypes.string.isRequired
    }).isRequired       
   }).isRequired
}

export default FindTherapistScreen;