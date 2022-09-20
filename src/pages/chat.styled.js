import styled from 'styled-components';

const ChatWrapper = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: min(600px, 100%);
  margin-inline: auto;
  max-height: 80vh;
  overflow: auto;
  position: relative;

  .chat-box {
    list-style: none;
    background: none;
    /* margin: 0; */
    padding: 0 1rem 5rem 1rem;
    /* margin-top: 60px; */
    margin-bottom: 10px;
  }

  .chat-box li {
    padding: 0.5rem;
    overflow: hidden;
    display: flex;
  }
  .chat-box .avatar {
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    z-index: 2;
    box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.3);
  }
  .chat-box .avatar img {
    width: 100%;
    display: inline-block;
    object-fit: cover;
    border-radius: 100%;
  }



  .otherUser .msg {
    background-color: purple;
    order: 1;
    border-top-left-radius: 0px;
    box-shadow: -1px 2px 0px #d4d4d4;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 0 3px 3px 3px;
  }
  .otherUser .msg:before {
    content: '';
    position: relative;
    top: -6px;
    right: 0px;
    left: -15px;
    width: 0px;
    height: 0px;
    /* margin-left: 20px; */
    border: 5px solid purple;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  .me {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .me .msg {
    /* order: 1; */
    border-bottom-right-radius: 0px;
    box-shadow: 1px 2px 0px #d4d4d4;
    background-color: #d4d4d4;
    margin-right: 10px;
  }
  .me .avatar {
    order: 2;
    margin-bottom: 20px;
  }
  .me .avatar:after {
    content: '';
    position: relative;
    display: inline-block;
    bottom: 30px;
    right: 13px;
    width: 0px;
    height: 0px;
    border: 5px solid #d4d4d4;
    border-right-color: transparent;
    border-bottom-color: transparent;
    /* box-shadow: 0px 2px 0px #d4d4d4; */
  }

  .msg {
    background: white;
    min-width: 50px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
    flex: 1;
  }
  .msg p {
    font-size: 0.8rem;
    margin: 0 0 0.2rem 0;
    color: #777;
  }
  .msg img {
    position: relative;
    display: block;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #eee;
    transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41);
    cursor: default;
  }
`;

export default ChatWrapper;
