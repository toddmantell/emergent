import React from 'react';
import {View, StyleSheet, ScrollView, ListView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routes } from '../constants';
import StateRow from './StateRow';
import states from '../states';
import findTherapistActions from '../sharedState/actions/findTherapistActions';

class StateList extends React.Component {
    static navigationOptions = {
        title: "Choose Your State"
    };
    constructor() {
        super();

        this.state = {            
        };

        this.selectState = this.selectState.bind(this);
    }
    selectState(state) {
        const { navigate } = this.props.navigation;

        //also, pass the U.S. State to component or store in redux
        navigate(routes.FindTherapist);
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
        //marginTop: 40,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    }
});

StateList.propTypes = {
  
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(findTherapistActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        state: state.state
    };
}

export default connect(mapDispatchToProps, mapStateToProps)(StateList);