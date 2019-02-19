import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardItem extends Component {

    state = {
        category: this.props.category,
        id: this.props.id
    }

    deleteCard = (event) => {
        this.props.dispatch({ type: 'DELETE_CARD', 
                              payload: this.state});
        // alert('successfully deleted card');
    }

    render() {
        return(
            <tr>
                <td>
                    {this.props.russian}
                </td>
                <td>
                    {this.props.english}
                </td>
                <td>
                    <button onClick={this.deleteCard}>Delete</button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(CardItem);