import {createSlice} from '@reduxjs/toolkit';

const initialValues = {
  userId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialValues,
  reducers: {
    reducerSetUser: (state, action) => {
      state.userId = action.payload.userId;
    },
  },
});

export const {reducerSetUser} = userSlice.actions;

export default userSlice.reducer;
