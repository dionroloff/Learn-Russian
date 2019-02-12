import React, { Component } from 'react';
import { connect } from 'react-redux';

class PracticePage extends Component {

    seeStats = (event) => {
        this.props.history.push("/stats");
    }

    returnHome = (event) => {
        this.props.history.push("/home");
    }

    render() {
        return(
            <div>
                <h1>Practice Page</h1>
                <button onClick={this.seeStats}>See Stats</button>
                <button onClick={this.returnHome}>Return to home page</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePage);
