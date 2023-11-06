import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteCarsSlice = createSlice({
  name: "favoriteCars",
  initialState: initialState,
  reducers: {
    favoriteToggler: (state, action) => {
      const card = action.payload;
      const { favorite } = state;
      const index = favorite.findIndex(({ id }) => id === card.id);
      if (index === -1) {
        favorite.push(card);
      } else {
        favorite.splice(index, 1);
      }
    },
  },
});

export const favoriteCarsReducer = favoriteCarsSlice.reducer;
export const { favoriteToggler } = favoriteCarsSlice.actions;
