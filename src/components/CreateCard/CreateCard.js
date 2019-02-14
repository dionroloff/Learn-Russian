import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateCard extends Component {
    
    //we automatically assign the deck id and user id to state
    state = {
        word_en: '',
        word_ru: '',
        image: '',
        deck_category: Number(this.props.match.params.id),
        user_id: this.props.state.user.id
    }

    handleChange = (event) => {
        if (event.target.name === 'word_en') {
            this.setState({word_en: event.target.value})
        } else if (event.target.name === 'word_ru') {
            this.setState({word_ru: event.target.value})
        } else {
            this.setState({image: event.target.value})
        }
        
    }

    createCard = (event) => {
        console.log(this.state)
        this.props.dispatch({type: 'CREATE_CARD', payload: this.state});
    }

    studyDeck = (event) => {
        this.props.history.push(`/practice/${this.props.match.params.id}`);
    }

    render() {
        
        return(
            <div>
                <p>user id: {JSON.stringify(this.props.state.user.id)}</p>
                {/* originally this was a string */}
                <p>deck id: {Number(this.props.match.params.id)}</p>
                
                <h2>Create Card page</h2>
                <input name='word_en' placeholder='english word' onChange={this.handleChange}/><br/>
                <input name='word_ru' placeholder='russian word' onChange={this.handleChange}/><br/>
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