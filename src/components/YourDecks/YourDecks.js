import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';
import DeckItem from '../DeckItem/DeckItem';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class YourDecks extends Component {

  state = {
    categories: [],
  }

  //When the component mounts, immediately GET's the deck info
  //from the database and assigns response.data to state.categories.
  //This gets passed down via props to DeckItem.js.
  componentDidMount() {
    axios.get('/api/cards/your-decks')
      .then((response) => {
        this.setState({
          categories: response.data
        })
      }).catch((error) => {
        console.log(`error in UserPage get request: ${error}`);
      })
  }

  render() {


    return (
      <div>
        <h1 align='center'>Your Decks</h1>
        <h4 align='center'><i>Choose which deck you'd like to review</i></h4>
        <br/>
        <br/>
        <table className="user-decks">
          <thead>
            <tr><th>Examine Deck</th><th>Theme</th><th>Number of Cards</th></tr>
          </thead>
          <tbody>
            {this.state.categories.map((deck, i) => {
              return <DeckItem history={this.props.history} key={i} id={deck.id} category={deck.name} count={deck.count} />
            })}
          </tbody>
        </table>
      </div>
    )

  }


}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourDecks);
