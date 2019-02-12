import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDeck(action) {
    try {
        console.log('in getDeck saga');
    } catch(error) {
        console.log('error in getDeck saga: ', error);
    }
}

function* decksSaga() {
    yield takeLatest('GET_DECK', getDeck);
}

export default decksSaga;