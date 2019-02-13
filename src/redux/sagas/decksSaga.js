import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//This saga exists to let other components access deck id's
function* getDeck(action) {
    try {
        //action.payload = id of category in DB
        console.log(action.payload)
        const serverResponse = yield axios.get(`/api/cards/${action.payload}`, action.payload);
        yield put({type: 'SET_CARDS', payload: serverResponse.data});
        
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
    yield takeLatest('GET_CARDS', getDeck);
    yield takeLatest('CREATE_CARD', createCard);
}

export default decksSaga;