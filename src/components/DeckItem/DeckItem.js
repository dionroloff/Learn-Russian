import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckItem extends Component {

  //When the user clicks on an individul deck,
  //action of type "GET_DECK" is dispatched to the decksSaga
  handleClick = (event) => {
    console.log(this.props.id);

    this.props.dispatch({ type: 'GET_DECK', payload: this.props.id});
    // this.props.history.push('/decks');
    
  } //end handleClick

    render() {
        return(
            <tr>
                <td onClick={this.handleClick}>
                    {this.props.category}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(DeckItem);