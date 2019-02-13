import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCard extends Component {

    state = {
        en_word: '',
        ru_word: '',
        image: '',
        category: ''
    }

    handleChange = (event) => {
        if (event.target.name === 'en_word') {
            this.setState({en_word: event.target.value})
        } else if (event.target.name === 'ru_word') {
            this.setState({ru_word: event.target.value})
        } else {
            this.setState({image: event.target.value})
        }
    }

    createCard = (event) => {
        console.log('card create button');
        this.props.dispatch({type: 'CREATE_CARD', payload: this.state});
    }

    studyDeck = (event) => {
        this.props.history.push("/practice");
    }

    render() {
        console.log(this.props.state.provideDeckId)
        return(
            <div>
                <h2>Create Card page</h2>
                <input name='en_word' placeholder='english word' onChange={this.handleChange}/><br/>
                <input name='ru_word' placeholder='russian word' onChange={this.handleChange}/><br/>
                <input name='image' placeholder='image' onChange={this.handleChange}/><br/>
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