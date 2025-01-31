import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../entities/auth/authSlice';
import { citySlice } from '../../entities/city/citySlice';
import { mastersSlice } from '../../entities/masters/mastersSlice';
import { salonsSlice } from '../../entities/salons/salonsSlice';

// Настройка store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    city: citySlice.reducer,
    masters: mastersSlice.reducer,
    salons: salonsSlice.reducer,
  },
});

export default store;
