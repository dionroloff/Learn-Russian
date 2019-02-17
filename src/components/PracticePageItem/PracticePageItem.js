import React, { Component } from 'react';
import { connect } from 'react-redux';

class PracticePageItem extends Component {
    render() {
        return(
            <div>
                {this.props.russian}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePageItem);