import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//This saga exists to let other components access deck id's
function* getDeck(action) {
    try {
        console.log('in getDeck saga');
        yield put({type: 'GET_DECK_ID', payload: action.payload})
    } catch(error) {
        console.log('error in getDeck saga: ', error);
    }
}

//this 
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