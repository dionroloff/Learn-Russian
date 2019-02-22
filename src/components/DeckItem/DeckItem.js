import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckItem extends Component {

    //When the user clicks on an individul deck,
    //push to history the individual deck URL
    handleClick = (event) => {

    console.log(this.props.id);
    this.props.history.push(`/deck/${this.props.id}`);
    
    } //end handleClick

    render() {
        return(
            <tr>
                <td onClick={this.handleClick}>
                   {this.props.category}
                </td>
                <td>
                    {this.props.count}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(DeckItem);