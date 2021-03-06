import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CreateCard.css';

//Material UI
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing.unit * 2,
    },
    placeholder: {
        height: 40,
    },
});

class CreateCard extends Component {
    state = {
        loading: false,
        query: 'idle',
        word_en: '',
        word_ru: '',
        image: '',
        deck_category: Number(this.props.match.params.id),
        user_id: this.props.state.user.id
    };

    handleChange = (event) => {
        console.log('in handleChange');
        if (event.target.name === 'word_en') {
            this.setState({ word_en: event.target.value })
        } else if (event.target.name === 'word_ru') {
            this.setState({ word_ru: event.target.value })
        } else {
            this.setState({ image: event.target.value })
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleClickLoading = () => {
        this.setState(state => ({
            loading: !state.loading,
        }));
    };

    studyDeck = (event) => {
        console.log('in studyDeck');
        this.props.history.push(`/practice/${this.props.match.params.id}`);
    }

    handleClick = () => {
        clearTimeout(this.timer);

        if (this.state.query !== 'idle') {
            this.setState({
                query: 'idle',
            });
            return;
        }

        this.setState({
            query: 'progress',
        });
        this.timer = setTimeout(() => {
            this.setState({
                query: 'success',
            });
        }, 2000);

        console.log(this.state)
        this.props.dispatch({ type: 'CREATE_CARD', payload: this.state });
    };

    render() {
        const { classes } = this.props;
        const { loading, query } = this.state;

        return (
            <div className={classes.root}>
                <h1>Create a Card</h1>
                <h4><i>To type in Russian, use a keyboard overlay.</i></h4>
            
            <form align='center'>
                <TextField
                    onChange={this.handleChange}
                    name='word_en'
                    required
                    id="standard-required"
                    label="English"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    onChange={this.handleChange}
                    name='word_ru'
                    required
                    id="standard-required"
                    label="Russian"
                    className={classes.textField}
                    margin="normal"
                />
                {/* <TextField
                    onChange={this.handleChange}
                    name='image'
                    required
                    id="standard-required"
                    label="Image URL"
                    className={classes.textField}
                    margin="normal"
                /> */}

                <div className={classes.placeholder}>
                    {query === 'success' ? (
                        <Typography>Success!</Typography>
                    ) : (
                            <Fade
                                in={query === 'progress'}
                                style={{
                                    transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                }}
                                unmountOnExit
                            >
                                <CircularProgress />
                            </Fade>
                        )}
                </div>

                <Button onClick={this.handleClick} className={classes.button}>
                    {query !== 'idle' ? 'Creating...' : 'Create Card'}
                </Button>

                <button onClick={this.studyDeck}>
                    Study Deck
                </button>
</form>
                {/* <button onClick={this.studyDeck}>
                    Study Deck
                </button> */}
                
            </div>
        );
    }
}

CreateCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    state
});

//   export default withStyles(styles)(CreateCard);
export default connect(mapStateToProps)(withStyles(styles)(CreateCard));
// export default connect((mapStateToProps)(CreateCard), withStyles(styles)(CreateCard));