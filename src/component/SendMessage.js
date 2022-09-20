import React from 'react';
import SendMessageWrapper from './sendMessage.styled';

const SendMessage = ({ handleSendMsg, handleChat, chat }) => {
  return (
    <SendMessageWrapper>
      <form className="form" onSubmit={handleSendMsg}>
        <textarea
          name="message"
          className="msg-box"
          onChange={handleChat}
          value={chat}
          data-testid="msg"
        ></textarea>
        <button className="btn" type="submit">
          send
        </button>
      </form>
    </SendMessageWrapper>
  );
};

export default SendMessage;
