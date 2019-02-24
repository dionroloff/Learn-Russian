import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './../CardItem/CardItem';
import DeckDetailTheme from './../DeckDetailTheme/DeckDetailTheme';
import axios from 'axios';

class DeckDetail extends Component {

    goHome = (event) => {
        this.props.history.push('/home');
    }

    handleAddNew = (event) => {
        //this.props.match.params is {"id": whatever the deck id is}
        this.props.history.push(`/create/${this.props.match.params.id}`);
    }
    studyDeck = (event) => {
        this.props.history.push(`/practice/${this.props.match.params.id}`);
    }

    //https://via.placeholder.com/200

    //When the component mounts, an action will dispatch 
    //action of type "GET_CARDS" to the decksSaga
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CARDS', 
                              payload: this.props.match.params.id});
    }

    render() {
        return (
            <div align='center'>
                
                <h1 align='center'>Deck Detail</h1>
                <h4 align='center'><i>Here are all the cards in the deck</i></h4>
                <br/>
                <button onClick={this.goHome}>Home</button>
                <button onClick={this.handleAddNew}>Add New Card</button>
                <button onClick={this.studyDeck}>Study Deck</button>
                <br/>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr><th>Russian Word</th><th>English Translation</th><th>Remove Card</th></tr>
                    </thead>
                    <tbody>
                        {this.props.state.deckReducers.map((card, i) => {
                            return <CardItem 
                            history={this.props.history} 
                            key={i} 
                            english={card.word_en} 
                            russian={card.word_ru}
                            category={card.category}
                            id={card.id}/>
                        })}
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(DeckDetail);