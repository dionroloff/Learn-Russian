import React, { Component } from 'react';
import { connect } from 'react-redux';
import PracticePageItem from './../PracticePageItem/PracticePageItem';

import './PracticePage.css'

class PracticePage extends Component {

    state = {
        domCards: [],
        guessCard: undefined
    }

    seeStats = (event) => {
        this.props.history.push(`/stats/${this.props.match.params.id}`);
    }

    returnHome = (event) => {
        this.props.history.push('/home');
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_CARDS',
            payload: this.props.match.params.id
        });

    }

    randomElement = (array) => {
        //array.length represents the maximum acceptable number in the range
        let randomNum = Math.floor(Math.random() * Math.floor(array.length));
        return array[randomNum];
    }

    //without this function the guessCard would always be the first card to append,
    //making studying predictable and therefore disfunctional
    shuffleDomCards = (array) => {
        let i, j, x;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    selectACard = () => {
        //assign an empty array
        let newDomCards = [];
        //completly random card from the deck
        const guessCard = this.randomElement(this.props.state.deckReducers);


        this.setState({
            guessCard: guessCard,
        })
        //newDomCards now has a length of one
        newDomCards.push(guessCard);

        //if the deck has less than 4 items, this if statement
        // will prevent an infinite loop
        if (this.props.state.deckReducers.length < 4) {
            return;
        }

        //three times we pull a random card from the entire deck
        for (let i = 0; i < 3; i += 1) {
            let allCardsFromDeck = this.props.state.deckReducers;
            const randomCard = allCardsFromDeck[Math.floor(Math.random() * allCardsFromDeck.length)];

            //checks to see if the new random card is already in newDomCards
            const foundCard = newDomCards.find((element) => {
                return element.word_en === randomCard.word_en
            })
            //if the card is not already in the deck, we push to newDomCards,
            //if the card is already in the deck, pull a new random card
            if (foundCard) {
                i = i - 1;
            } else {
                newDomCards.push(randomCard);
            }
        }

        this.setState({
            domCards: newDomCards,
        })
    }

    render() {
        return (
            <div id='container'>
                <h1 align='center'>Practice Page</h1>
                
                {/* this line will conditionally render a random card */}
                <h2>{this.state.guessCard !== undefined ? this.state.guessCard.word_ru : null}</h2>

                {this.state.guessCard !== undefined ? this.shuffleDomCards(this.state.domCards).map((card, i) => {
                    return (
                    <div class="row" align='center'>
                        <div class='column' align='center'>
                                <PracticePageItem
                                    history={this.props.history}
                                    key={i}
                                    english={card.word_en}
                                    russian={card.word_ru}
                                    category={card.name}
                                    categoryId={card.category}
                                    guessCard={this.state.guessCard}
                                    selectACard={this.selectACard}
                                    image={card.image}
                                    id={card.id} />
                        </div> 
                        
                    </div>
                    )
                }) : <h4 align='center'><i>Click <button onClick={this.selectACard}>Start</button> when ready to begin</i></h4> }
                <br/>
                <br/>
                {/* <button onClick={this.seeStats}>See Stats</button> */}
                <button id='home-btn' onClick={this.returnHome}>Home</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePage);
