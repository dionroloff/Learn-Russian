import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCard extends Component {

    createCard = (event) => {
        console.log('card create button');
    }

    studyDeck = (event) => {
        this.props.history.push("/practice");
    }

    render() {
        return(
            <div>
                <h2>Create Card page</h2>
                <input placeholder='english word' /><br/>
                <input placeholder='russian word' /><br/>
                <input placeholder='image' /><br/>
                <button onClick={this.createCard}>Create Card</button>
                <button onClick={this.studyDeck}>Study Deck</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(CreateCard);