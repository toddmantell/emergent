import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FindTherapistScreen from './FindTherapistScreen';
import * as FindTherapistActions from '../sharedState/actions/findTherapistActions';

class FindTherapist extends React.Component {
    constructor() {
        super();        
    }
    static navigationOptions = {
        title: "Find A Therapist"
    };
    render() {
        return <FindTherapistScreen selectedState={this.props.selectedState} />
    }    
}

FindTherapist.propTypes = {
  
}

//but this is not right, as the state is coming as stateReducer instead of state.  There was an issue loading initialState that needs to be fixed.
function mapStateToProps(state) {
    return {
        selectedState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(FindTherapistActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTherapist);