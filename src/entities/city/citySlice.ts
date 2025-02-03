// src/entities/city/citySlice.ts  ice для хранения списка городов, состояний загрузки, фильтра поиска и текущей страницы пагинации.
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchCities, City } from '../../api/cityApi';

interface CityState {
  cities: City[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  currentPage: number;
}

const initialState: CityState = {
  cities: [],
  loading: false,
  error: null,
  searchQuery: '',
  currentPage: 1,
};

export const loadCities = createAsyncThunk('city/loadCities', async () => {
  const cities = await fetchCities();
  return cities;
});

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1; // сброс страницы при изменении поиска
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCities.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loadCities.fulfilled, (state, action: PayloadAction<City[]>) => {
      state.loading = false;
      state.cities = action.payload;
    });
    builder.addCase(loadCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Ошибка загрузки данных';
    });
  },
});

export const { setSearchQuery, setCurrentPage } = citySlice.actions;
export default citySlice.reducer;
