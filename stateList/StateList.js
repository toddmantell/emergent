import React from 'react';
import {View, StyleSheet, ScrollView, ListView} from 'react-native';
import StateRow from './StateRow';
import states from '../states';

class StateList extends React.Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(states)
        };

        this.selectState = this.selectState.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }
    selectState(event) {

    }
    renderRow(state) {
        return <StateRow state={state} selectState={this.selectState} />
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
    /*old way, using Listview, we've since refactored because Scrollview is much more intuitive
    
    render() {
        return (
            <View style={styles.container} >
                <ListView 
                    dataSource={this.state.dataSource}
                    key={this.props.states}
                    renderRow={this.renderRow} 
                />
           </View>
        );
    }*/
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