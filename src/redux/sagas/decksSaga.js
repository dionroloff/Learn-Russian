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

function* getUserStats(action) {
    console.log(`in getUserStats: ${action.payload.deck_id}`);
    try {
        const serverResponse = yield axios.get(`api/cards/stats/${action.payload.deck_id}`, action.payload);
        yield put({type: 'SET_STATS', payload: serverResponse.data});
    } catch(error) {
        console.log(`error in getUserStats saga: ${error}`);
    }
}

function* postGuess(action) {
    try {
        yield axios.post(`api/cards/guess/${action.payload.card_id}`, action.payload);
    } catch(error) {
        console.log(`error in postGuess saga: ${error}`);
    }
}


function* decksSaga() {
    yield takeLatest('GET_CARDS', getDeck);
    yield takeLatest('GET_USER_STATS', getUserStats);
    yield takeLatest('CREATE_CARD', createCard);
    yield takeLatest('DELETE_CARD', deleteCard)
    yield takeLatest('POST_GUESS', postGuess);
}

export default decksSaga;