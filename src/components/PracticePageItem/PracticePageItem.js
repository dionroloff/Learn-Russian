import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PracticePageItem.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PracticePageItem extends Component {

    state = {
        deck_id: this.props.categoryId,
        card_id: this.props.id,
        user_id: this.props.state.user.id
    }

    componentDidMount() {
        this.compare();
    }

    //this component will let the user know if their guess
    //was correct or incorrect on click. If the guess is correct, the cards re-render
    compare = () => {
        // console.log('clicked')
        if (this.props.english === this.props.guessCard.word_en) {
            // console.log('correct', this.props.id);
            this.props.dispatch({type: 'POST_GUESS', payload: this.state})
            this.props.selectACard();
        } else {
            alert('that is incorrect');
        }
    } //end compare

    render() {

        return (
            <Grid justify='center' onClick={this.compare}>
                <Grid>
                    <Paper elevation={3}>
                        <img src={this.props.image} />
                    </Paper>
                 </Grid>
            </Grid> 
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePageItem);