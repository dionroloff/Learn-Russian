import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCard extends Component {
    render() {
        return(
            <div>Create Card page</div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(CreateCard);