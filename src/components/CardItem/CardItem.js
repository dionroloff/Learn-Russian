import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardItem extends Component {
    render() {
        return(
            <div>something</div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(CardItem);