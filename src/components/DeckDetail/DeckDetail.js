import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardItem from './../CardItem/CardItem';
import axios from 'axios';

class DeckDetail extends Component {

    handleAdd = (event) => {
        this.props.history.push("/create");
    }
    handleQuiz = (event) => {
        this.props.history.push("/practice");
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
                {JSON.stringify(this.props.match.params)}
                <h1>Detail of Deck</h1>
                
                {JSON.stringify(this.props.state.deckReducers)}
    
                {/* <img src=/> */}
                <table>
                    <thead>
                        <tr><th>Russian Word</th><th>English Translation</th><th>Edit Card</th></tr>
                    </thead>
                    <tbody>
                        {this.props.state.deckReducers.map((card, i) => {
                            return <CardItem 
                            history={this.props.history} 
                            key={i} 
                            english={card.word_en} 
                            russian={card.word_ru}
                            category={card.name}/>
                        })}
                    </tbody>
                </table>

                <button onClick={this.handleAdd}>Add New Card</button>

                <button onClick={this.handleQuiz}>Begin Quiz</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(DeckDetail);