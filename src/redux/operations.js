import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// export const fetchCars = createAsyncThunk(
//   "catalogCars/fetchAllCars",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/cards?limit=12&page=1`);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const fetchCars = createAsyncThunk(
  "catalogCars/fetchData",
  async (data, { rejectWithValue }) => {
    const { page } = data;

    const params = `limit=12&page=${page}`;

    try {
      const response = await axios.get(`/cars?${params}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchMore = createAsyncThunk(
//   "catalogCars/fetchMore",
//   async (page, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/cards?limit=12&page=${page}`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const fetchByFilters = createAsyncThunk(
  "catalogCars/fetchByFilters",
  async ({ brand }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/cars?${brand ? `&make=${brand}` : ""}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchBy = createAsyncThunk(
//   "catalogCars/fetchAllCars",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/cards?limit=12&page=1`);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
