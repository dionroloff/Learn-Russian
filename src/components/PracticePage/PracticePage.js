import React, { Component } from 'react';
import { connect } from 'react-redux';
import PracticePageItem from './../PracticePageItem/PracticePageItem';

class PracticePage extends Component {

    seeStats = (event) => {
        this.props.history.push('/stats');
    }

    returnHome = (event) => {
        this.props.history.push('/home');
    }

    learnedCard = (event) => {
        console.log('in learnedCard');
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
    //making studying not work
    shuffleDomCards = (array) => {
        let j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }


    render() {
        //randomly assign a card from the entire deck to guessCard
        const guessCard = this.randomElement(this.props.state.deckReducers);
        console.log('guessCard:', guessCard);
        // const randomCards = this.shuffleDomCards(this.props.state.deckReducers);

        //create empty array of cards which will go on the DOM
        let domCards = [];
        //push the correct card into the array so user has opportunity to guess correctly
        domCards.push(guessCard);
        //from here, we push three random cards from the deck reducer into our domCards array, 
        //making the array a length of 4
        for (let i = 0; i < 3; i += 1) {


            let allCardsFromDeck = this.props.state.deckReducers;
            const randomCard = allCardsFromDeck[Math.floor(Math.random() * allCardsFromDeck.length)];

            // for (let j = 0; j < domCards.length; j += 1) {
            //     console.log('randomCard: ', randomCard)
            //     // if (randomCard.word_en !== domCards[j].word_en) {
            //     //     domCards.push(randomCard);
            //     // }
            // }

            domCards.push(randomCard);
        }



        return (
            <div>
                <h1>Practice Page</h1>
                {/* this line will conditionally render a random card */}
                <h3>Which card is {guessCard !== undefined ? guessCard.word_ru : null}</h3>

                {/* {guessCard !== undefined? randomCards.map((card, i) => {
                    return <PracticePageItem
                    history={this.props.history} 
                    key={i} 
                    english={card.word_en} 
                    russian={card.word_ru}
                    category={card.name}/>
                }) : null} */}
                {/* {this.props.getRandomCards} */}

                {/* currently returns every card in the particular deck */}
                {guessCard !== undefined ? this.shuffleDomCards(domCards).map((card, i) => {
                    return <PracticePageItem
                        history={this.props.history}
                        key={i}
                        english={card.word_en}
                        russian={card.word_ru}
                        category={card.name}
                        categoryId={card.category}
                        guessCard={guessCard} />
                }) : null}

                <button onClick={this.seeStats}>See Stats</button>
                <button onClick={this.returnHome}>Return to home page</button>
                {/* <button onClick={this.learnedCard}>Learned</button> */}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePage);
