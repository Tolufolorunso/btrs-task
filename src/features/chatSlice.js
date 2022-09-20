import { createSlice } from '@reduxjs/toolkit';

const addChatToLocalStorage = (data) => {
  let res = window.localStorage.getItem('chats');
  let msg;
  if (!res) {
    msg = [data];
    window.localStorage.setItem('chats', JSON.stringify(msg));
  } else {
    msg = JSON.parse(res);
    msg = [data, ...msg];
    localStorage.setItem('chats', JSON.stringify(msg));
  }
};

const handleLocalStorage = (chat, message) => {
  window.localStorage.setItem(chat, message);
  window.dispatchEvent(new Event('storage'));
};

const initialState = {
  username: '',
  chats: [],
  message: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.username = payload;
    },

    sendMessage: (state, { payload }) => {
      addChatToLocalStorage(payload);
      state.message = {
        chat: payload.chat,
        user: payload.user,
        id: payload.id,
      };
      handleLocalStorage('chat', JSON.stringify(state.message));
    },
  },
});

// console.log(modal);

export const { addUser, sendMessage, getAllChats } = chatSlice.actions;
export default chatSlice.reducer;
