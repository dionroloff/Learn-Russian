import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatsPage extends Component {
    render() {
        return(
            <p>in stats page</p>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(StatsPage);