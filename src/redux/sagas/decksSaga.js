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

function* getUnlearned(action) {
    try {
        console.log('action.payload:', action.payload);
    } catch(error) {
        console.log(`error in getUnlearned saga: ${error}`);
    }
}

//this 
function* createCard(action) {
    try {
        yield axios.post('/api/cards', action.payload)
        
    } catch(error) {
        console.log('error in createCard saga: ', error);
    }
}

// function* studyDeck(action) {
//     try{
//         console.log(`action.payload: ${action}`);
//         yield axios.get('/api/cards', action.payload)
//     } catch(error) {
//         console.log(`error in study deck saga: ${error}`)
//     }
// }

function* decksSaga() {
    yield takeLatest('GET_CARDS', getDeck);
    yield takeLatest('GET_UNLEARNED_CARDS', getUnlearned);
    yield takeLatest('CREATE_CARD', createCard);
    // yield takeLatest('STUDY_DECK', studyDeck)
}

export default decksSaga;