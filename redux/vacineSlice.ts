import {createSlice} from '@reduxjs/toolkit';

const initialValues: Array<{
  id: string;
  name: string;
  dose: string;
  dateTaken: string;
  nextDose: string | null;
  url: string;
  filePath: string;
}> = [];

export const vaccineSlice = createSlice({
  name: 'vaccine',
  initialState: initialValues,
  reducers: {
    reducerSetvaccine: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const {reducerSetvaccine} = vaccineSlice.actions;

export default vaccineSlice.reducer;
