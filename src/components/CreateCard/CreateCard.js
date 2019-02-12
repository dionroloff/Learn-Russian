import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCard extends Component {

    state = {
        en_word: '',
        ru_word: '',
        image: '',
        category: ''
    }

    handleEnglishWord = (event) => {
        this.setState({en_word: event.target.value})
    }
    handleRussianWord = (event) => {
        this.setState({ru_word: event.target.value})
    }
    handleImage = (event) => {
        this.setState({image: event.target.value})
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
                <input id='en_word' placeholder='english word' onChange={this.handleEnglishWord} /><br/>
                <input id='ru_word' placeholder='russian word' onChange={this.handleRussianWord}/><br/>
                <input id='image' placeholder='image' onChange={this.handleImage}/><br/>
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