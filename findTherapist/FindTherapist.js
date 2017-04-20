import React from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

class FindTherapist extends React.Component {
    constructor() {
        super();

        this.renderRow = this.renderRow.bind(this);
    }
    renderRow() {
        //in here we will render each row in the ListView
    }
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

FindTherapist.propTypes = {
  
}

export default FindTherapist;