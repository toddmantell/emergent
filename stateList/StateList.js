import React from 'react';
import {View, StyleSheet, ScrollView, ListView} from 'react-native';
import StateRow from './StateRow';
import states from '../states';

class StateList extends React.Component {
    constructor() {
        super();

        this.state = {
            
        };

        this.selectState = this.selectState.bind(this);
    }
    selectState(event) {

    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        states.map((state, index) => {
                            return <StateRow 
                            state={state} 
                            key={index}
                            selectState={this.selectState}
                            />
                        })            
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    }
});

StateList.propTypes = {
  
}

export default StateList;