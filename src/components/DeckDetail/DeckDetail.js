import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckDetail extends Component {

    handleAdd = (event) => {
        this.props.history.push("/create");
    }

    handleQuiz = (event) => {
        this.props.history.push("/practice");
    }

    render() {
        return (
            <div>
                <h1>Detail of Deck</h1>
                <table>
                    <thead>
                        <tr><th>Russian Word</th><th>English Translation</th><th>Edit Card</th></tr>
                    </thead>
                    <tbody>
                        <p>something</p>
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