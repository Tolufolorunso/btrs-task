import React from 'react';
import SendMessageWrapper from './sendMessage.styled';

const SendMessage = () => {
  return (
    <SendMessageWrapper>
      <form className="form">
        <textarea name="message" className="msg-box"></textarea>
        <button className="btn" type="submit">
          send
        </button>
      </form>
    </SendMessageWrapper>
  );
};

export default SendMessage;
