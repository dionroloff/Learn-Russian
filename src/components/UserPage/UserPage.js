import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends Component {

  handleClick = (event) => {
    console.log('deck clicked');
    

     this.props.history.push("/deck");
  }

  render() {
    console.log(this.props.user);
    
    return (
      <div>
        <h1 id="welcome">
          Welcome, {this.props.user.username}!
        </h1>
        <p>Your ID is: {this.props.user.id}</p>


        <h2>Your Decks</h2>
        <h4><i>Choose which deck you'd like to review</i></h4>

        <h3 onClick={this.handleClick}>Animals</h3>
        <h3 onClick={this.handleClick}>Food</h3>

        <LogOutButton className="log-in" />
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
