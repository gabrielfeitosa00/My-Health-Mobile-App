import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import vaccineSlice from './vacineSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    vaccine: vaccineSlice,
  },
});
