import React, { Component } from 'react';

class DeckItem extends Component {


  handleClick = (event) => {
    console.log(this.props.id);

    // this.props.dispatch({ type: 'GET_DECK' })
    // this.props.history.push("/deck");
  }

//   <h3 id={this.state.id} onClick={this.handleClick}>Animals</h3>
//   <h3 onClick={this.handleClick}>Food</h3>

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

export default DeckItem;