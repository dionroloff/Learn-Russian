import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PracticePageItem extends Component {
    componentDidMount() {
        this.compare();
    }

    //this component will let the user know if their guess
    //was correct or incorrect on click. If the guess is correct, the cards re-render
    compare = () => {
        // console.log('in compare function', this.props.guessCard);
        if (this.props.english === this.props.guessCard.word_en) {
            console.log('correct');
            //this.props.categoryId is the number of the deck
            // this.props.dispatch({ type: 'GET_UNLEARNED_CARDS', 
            //                       payload: this.props.id});
        } else {
            console.log('incorrect');
        }
    } //end compare

    render() {

        return (
            <Grid spacing={16} justify='center'>
                {/* {JSON.stringify(this.props.state.id)} */}
                <Grid item xs={12} onClick={this.compare} spacing={16}>
                    <Paper elevation={3}>
                        <Typography variant="h4" component="h3">
                            {this.props.english}
                        </Typography>
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