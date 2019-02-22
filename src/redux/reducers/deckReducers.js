import { combineReducers } from 'redux';

const cards = (state = [], action) => {
    switch (action.type) {
        case 'SET_CARDS':
          return action.payload;
        default: 
          return state;
    }
};

// const stats = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_STATS':
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default cards;