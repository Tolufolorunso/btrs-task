import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
});

// console.log(modal);

export default chatSlice.reducer;
