import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as FindTherapistActions from '../sharedState/actions/findTherapistActions';

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
                <TouchableOpacity onPress={() => alert(JSON.stringify(this.props.state))}>
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

//but this is not right, as the state is coming as stateReducer instead of state.  There was an issue loading initialState that needs to be fixed.
function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(FindTherapistActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTherapist);