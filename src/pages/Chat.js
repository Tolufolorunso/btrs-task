import ChatWrapper from './chat.styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, sendMessage } from '../features/chatSlice';
import { Message, NameModal, SendMessage } from '../component';

const Chat = () => {
  const { username, message } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [chat, setChat] = useState('');
  const [allChats, setAllChats] = useState([]);
  const containerRef = useRef(null);
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleChat = (e) => {
    setChat(e.target.value);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setUser(user);
    dispatch(addUser(user));
  };

  const getChats = async () => {
    try {
      let chats = await localStorage.getItem('chats');
      chats = !chats ? [] : JSON.parse(chats);
      return chats;
    } catch (error) {
      console.log(error);
    }
  };

  function storageEventHandler() {
    let message = JSON.parse(localStorage.getItem('chat'));
    console.log(message.user, user);
    if (message.user !== user) {
      setAllChats([...allChats, message]);
      console.log('hi from storageEventHandler');
    }
  }

  useEffect(() => {
    window.addEventListener('storage', storageEventHandler, false);
    return function cleanupListener() {
      window.removeEventListener('storage', storageEventHandler);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getChats().then((data) => {
      setAllChats(data);
    });
  }, []);

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (!chat) return;
    dispatch(sendMessage({ user, chat, id: Math.random() }));
    setAllChats([...allChats, { chat, user, id: Math.random() }]);
    setChat('');
  };

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element = containerRef.current;
      console.log(element.scrollHeight);
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [containerRef, message]);
  return (
    <ChatWrapper ref={containerRef}>
      {!username ? (
        <>
          <div className="overlay"></div>
          <NameModal
            handleChange={handleChange}
            user={user}
            handleAddUser={handleAddUser}
          />
        </>
      ) : (
        <>
          <ul className="chat-box">
            {allChats.map((chat) => {
              return (
                <Message
                  key={chat.id || 1}
                  userType={chat.user === user ? 'me' : 'otherUser'}
                  msg={chat.chat}
                  username={chat.user}
                />
              );
            })}
          </ul>
          <SendMessage
            handleSendMsg={handleSendMsg}
            handleChat={handleChat}
            chat={chat}
          />
        </>
      )}
    </ChatWrapper>
  );
};

export default Chat;
