import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterCars: (state, { payload }) => {
      state.filterData = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterCars } = filterSlice.actions;
