import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';
import DeckItem from './../DeckItem/DeckItem';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends Component {

  state = {
    categories: [],
  }

  componentDidMount() {
    axios.get('/api/user/decks')
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
        {/* <h1 id="welcome">
          Welcome, {this.props.user.username}!
        </h1>
        <p>Your ID is: {this.state}</p> */}

        {JSON.stringify(this.state.categories)}
        <h2>Your Decks</h2>
        <h4><i>Choose which deck you'd like to review</i></h4>

        <table className="user-decks">
          <thead>
            <tr><th>Theme</th><th>Number of Cards</th></tr>
          </thead>
          <tbody>
            {this.state.categories.map((deck, i) => {
              return <DeckItem key={i} id={deck.id} category={deck.name} />
            })}
          </tbody>
        </table>

        {/* <LogOutButton className="log-in" /> */}
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
export default connect(mapStateToProps)(UserPage);
