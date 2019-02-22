import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatsPage extends Component {

    state = {
        user_id: this.props.state.user.id,
        deck_id: this.props.match.params.id
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_USER_STATS', payload: this.state});
        // this.props.dispatch({type: 'GET_CARDS', payload: this.props.match.params.id});
    }

    render() {
        return(
            <div>
                <p>User id: {JSON.stringify(this.props.state.user.username)}</p>
                <p>deck id: {JSON.stringify(this.props.match.params.id)}</p>
                {JSON.stringify(this.props.state.deckReducers)}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(StatsPage);