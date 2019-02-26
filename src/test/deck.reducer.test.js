//cards is the name of the reducer
import cards from '../../src/redux/reducers/deckReducers.js';

test('cards should return initially be an empty array', () => {
    const action = [];
    const returnedState = cards(undefined, action);
    expect(Array.isArray(returnedState)).toBe(true);
    expect(returnedState.length).toBe(0);
});

test('cards should be able to add a card', () => {
    const action = {type: 'SET_CARDS', payload: {word_en: 'Dog'}};
    const returnedState = cards(undefined, action);
    expect(returnedState).toEqual({word_en: 'Dog'});
});

test(`cards should ignore actions it doesn't care about`, () => {
    const action = {type: 'IGNORE_ME'};
    const returnedState = cards(undefined, action);
    expect (returnedState).toEqual([]);
});