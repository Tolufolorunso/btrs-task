import ChatWrapper from './chat.styled';
import { useState } from 'react';
import { Message, NameModal, SendMessage } from '../component';

const Chat = () => {
  const [showNameBox, setShowNameBox] = useState(false);
  const [username, setUsername] = useState('');
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNameBox(true);
    console.log(username);
  };
  return (
    <ChatWrapper>
      {showNameBox ? (
        <>
          <div className="overlay"></div>
          <NameModal
            handleChange={handleChange}
            username={username}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <ul className="chat-box">
          <Message
            userType="otherUser"
            msg="Note that the development build is not optimized.
To create a production build, use npm run build."
            username="kola"
          />
          <Message userType="otherUser" msg="Hello" username="kola" />
          <Message userType="me" msg="Hello" username="kola" />
          <Message userType="otherUser" msg="Hello" username="kola" />
          <Message
            userType="me"
            msg="Note that the development build is not optimized. To create a production build, use npm run build."
            username="kola"
          />
          <Message
            userType="me"
            msg="Note that the development build is not optimized. To create a production build, use npm run build."
            username="kola"
          />
        </ul>
      )}
      <SendMessage />
    </ChatWrapper>
  );
};

export default Chat;
