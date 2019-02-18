import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            this.props.dispatch({ type: 'GET_CARDS', 
                                  payload: this.props.categoryId});
        } else {
            console.log('incorrect');
        }
    }

    render() {

        return (
            <div>
                {/* {JSON.stringify(this.props.categoryId)} */}
                <div onClick={this.compare}>
                    {this.props.english}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(PracticePageItem);