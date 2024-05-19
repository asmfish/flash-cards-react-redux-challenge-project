import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard (state, action) {
          //payload: { id: '123', front: 'front of card', back: 'back of card'}.
          const { id } = action.payload;
          const newCard = action.payload;
          state.cards[id] = newCard;
       }
    }
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions
export const selectCardById = (id) => (state) => state.cards.cards[id];

export default cardsSlice.reducer;
