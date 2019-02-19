import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './../CardItem/CardItem';
import DeckDetailTheme from './../DeckDetailTheme/DeckDetailTheme';
import axios from 'axios';

class DeckDetail extends Component {
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
            <div>
                
                <h1>Detail of Deck: </h1>
                
                {JSON.stringify(this.props.state.deckReducers)}
                
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

                <button onClick={this.handleAddNew}>Add New Card</button>

                <button onClick={this.studyDeck}>Study Deck</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(DeckDetail);