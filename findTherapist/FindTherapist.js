import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
                <Text>This will render a list of menu items</Text>
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