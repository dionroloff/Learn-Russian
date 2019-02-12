import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDeck(action) {
    try {
        console.log('in getDeck saga');
        console.log(action.payload);
    } catch(error) {
        console.log('error in getDeck saga: ', error);
    }
}

function* createCard(action) {
    try {
        console.log('in createCard saga');
    } catch(error) {
        console.log('error in createCard saga: ', error);
    }
}

function* decksSaga() {
    yield takeLatest('GET_DECK', getDeck);
    yield takeLatest('CREATE_CARD', createCard);
}

export default decksSaga;