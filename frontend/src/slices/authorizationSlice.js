import { createSlice } from '@reduxjs/toolkit';

const initialData = localStorage.getItem('userId') !== 'undefined'
  ? JSON.parse(localStorage.getItem('userId'))
  : null;

const initialState = {
  loggedIn: !!initialData,
  token: initialData ? initialData.token : '',
};

const authorizationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setlogInUser(state, { payload }) {
      state.loggedIn = true;
      state.token = payload.token;
    },
    setlogOutUser(state) {
      state.loggedIn = false;
      state.token = null;
    },
  },
});

export const { setlogInUser, setlogOutUser } = authorizationSlice.actions;
export default authorizationSlice.reducer;