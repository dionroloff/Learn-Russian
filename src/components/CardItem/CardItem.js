import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardItem extends Component {
    render() {
        return(
            <tr>
                <td>
                    {this.props.russian}
                </td>
                <td>
                    {this.props.english}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(CardItem);