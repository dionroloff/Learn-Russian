import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckDetailTheme extends Component {
    render() {
        return(
           <div>{this.props.category}</div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(DeckDetailTheme);