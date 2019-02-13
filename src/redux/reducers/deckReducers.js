// import { combineReducers } from 'redux';

const cards = (state = [], action) => {
    switch (action.type) {
        case 'SET_CARDS':
          return action.payload;
        default: 
          return state;
    }
};

export default cards;