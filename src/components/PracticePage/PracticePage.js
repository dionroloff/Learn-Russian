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
        this.props.dispatch({ type: 'GET_CARDS', 
                              payload: this.props.match.params.id});
    
    }

    randomElement = (array) => {
        //array.length represents the maximum acceptable number in the range
        let randomNum = Math.floor(Math.random() * Math.floor(array.length));
        return array[randomNum];
    }
    

    render() {
        const guessCard = this.randomElement(this.props.state.deckReducers);
        // const randomCards = this.getRandomCards(this.props.state.deckReducers);
        console.log('guessCard:', guessCard);

        return(
            <div>
                <h1>Practice Page</h1>
                {/* this line will conditionally render a random card */}
                <h3>Which card is {guessCard !== undefined? guessCard.word_ru : null}</h3>
                
                {/* {randomCards.map((card, i) => {
                    return <PracticePageItem
                    history={this.props.history} 
                    key={i} 
                    english={card.word_en} 
                    russian={card.word_ru}
                    category={card.name}/>
                })} */}
                {/* {this.props.getRandomCards} */}
                {/* currently returns every card in the particular deck */}
                {guessCard !== undefined? this.props.state.deckReducers.map((card, i) => {
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
                <button onClick={this.learnedCard}>Learned</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePage);
