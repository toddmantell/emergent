import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const StateRow = props => {
        return (
            <TouchableOpacity onPress={props.selectState} style={styles.container}>
                <Text style={styles.label}>{props.state.stateName}</Text>                
           </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: '300',
        color: 'midnightblue'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#EAEAEA',
        padding: 5,
    },
}); 

StateRow.propTypes = {
   state: React.PropTypes.shape({
       abbreviation: React.PropTypes.string.isRequired,
       stateName: React.PropTypes.string.isRequired
   }).isRequired,
   selectState: React.PropTypes.func.isRequired
}

export default StateRow;