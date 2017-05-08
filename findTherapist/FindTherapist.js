import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class FindTherapist extends React.Component {
    constructor() {
        super();        
    }
    static navigationOptions = {
        title: "Find A Therapist"
    };
    render() {
        return (
            <View style={styles.container}>
                {/*<ListView dataSource={this.state.dataSource}
                renderRow={this.renderRow}/>*/}
                <Text>Do you know the kind of therapist you need?</Text>
                <TouchableOpacity onPress={() => alert("You said Yes")}>
                    <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("You said No")}>
                    <Text>No</Text>
                </TouchableOpacity>
           </View>
        );
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'  
    }
})

FindTherapist.propTypes = {
  
}

export default FindTherapist;