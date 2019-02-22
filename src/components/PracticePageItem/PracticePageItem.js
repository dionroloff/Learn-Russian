import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PracticePageItem.css';


class PracticePageItem extends Component {

    state = {
        deck_id: this.props.categoryId,
        card_id: this.props.id,
        user_id: this.props.state.user.id
    }

    // componentDidMount() {
    //     this.compare();
    // }

    //this component will let the user know if their guess
    //was correct or incorrect on click. If the guess is correct, the cards re-render
    compare = () => {
        console.log('clicked', this.props);
        if (this.props.english === this.props.guessCard.word_en && this.props.english !== '') {
            // console.log('correct', this.props.id);
            this.props.dispatch({type: 'POST_GUESS', payload: this.state})
            this.props.selectACard();
        } else {
            alert('that is incorrect!');
        }
    } //end compare

    render() {

        return (
        
            <div class='image' justify='center' onClick={this.compare}>  
                <img src={this.props.image} />
            </div> 
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePageItem);