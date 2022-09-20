import styled from 'styled-components';

const SendMessageWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  width: min(600px, 100%);

  .form {
    display: flex;
    align-items: center;
    justify-items: center;
  }

  .msg-box {
    flex: 0.7;
  }
  .btn {
    border-radius: 40px;
    flex: 0.3;
  }
`;
export default SendMessageWrapper;
