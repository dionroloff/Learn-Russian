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

// function* getUnlearned(action) {
//     try {
//         console.log('action.payload:', action.payload);
//     } catch(error) {
//         console.log(`error in getUnlearned saga: ${error}`);
//     }
// }

//this will allow the user to add a new card to the database
function* createCard(action) {
    try {
        yield axios.post('/api/cards', action.payload)
        
    } catch(error) {
        console.log('error in createCard saga: ', error);
    }
}

function* deleteCard(action) {
    try {
        console.log(`action.payload: ${action.payload}`);
        yield axios.delete(`api/cards/${action.payload.id}`, action.payload.id)
        const nextAction = {type: 'GET_CARDS', payload: action.payload.category};
        yield put(nextAction);
    } catch(error) {
        console.log(`error in deleteCard saga: ${error}`);
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
    // yield takeLatest('GET_UNLEARNED_CARDS', getUnlearned);
    yield takeLatest('CREATE_CARD', createCard);
    yield takeLatest('DELETE_CARD', deleteCard)
}

export default decksSaga;