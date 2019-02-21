import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatsPage extends Component {

    componentDidMount() {
        // this.props.dispatch({type: 'GET_USER_STATS',
        //                      payload: 'hello hello hello'});
        // this.props.dispatch({type: 'GET_CARDS', payload: 1});
    }

    render() {
        return(
            <div>
                <p>User id: {JSON.stringify(this.props.state.user)}</p>
                <p>deck id: {JSON.stringify(this.props.state.deckReducers)}</p>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(StatsPage);