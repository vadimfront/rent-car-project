import { createSlice } from "@reduxjs/toolkit";
import { fetchByFilters, fetchCars } from "./operations";

const initialState = {
  data: [],
  loading: false,
  error: null,
  isLastPage: false,
  page: 1,
};

export const catalogCarsSlice = createSlice({
  name: "catalogCars",
  initialState: initialState,
  reducers: {
    switchPage(state, { payload }) {
      if (payload === 1) {
        state.page = 1;
        return;
      }
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (state.page === 1) {
        state.data = payload;
      } else {
        state.data = [...state.data, ...payload];
      }
      state.isLastPage = payload.length < 12 && true;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchByFilters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchByFilters.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchByFilters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const catalogCarsReducer = catalogCarsSlice.reducer;
export const { switchPage } = catalogCarsSlice.actions;
