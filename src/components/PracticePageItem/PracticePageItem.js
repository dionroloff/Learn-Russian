import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PracticePageItem.css';

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
            this.props.selectACard();
        } else {
            alert('that is incorrect');
        }
    } //end compare

    render() {

        return (
            // <img src='./images/solo-project-wolf.jpg'/>
            <Grid justify='center'>
                {/* {JSON.stringify(this.props.state.id)} */}
                <Grid onClick={this.compare}>
                    <Paper elevation={3}>
                        <img src={this.props.image} />
                        {/* <Typography variant="h4" component="h3">
                            {this.props.english}
                        </Typography> */}
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