// import { combineReducers } from 'redux';

const provideDeckId = (state = '', action) => {
    switch (action.type) {
        case 'GET_DECK_ID':
          return action.payload;
        default: 
          return state;
    }
};

export default provideDeckId;