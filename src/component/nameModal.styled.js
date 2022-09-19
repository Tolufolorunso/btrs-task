import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: min(600px, 100% - 2rem);
  background-color: white;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 5px;
  padding: 40px;
  text-align: center;

  h2 {
    color: rgba(0, 0, 0, 0.7);
    font-size: clamp(1.8rem, 2.5vw, 3rem);
    font-weight: 700;
  }

  .formGroup {
    font-size: 1.3rem;
    margin-top: 20px;
  }

  /* .formGroup input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    outline: none;
    width: 100%;
    padding: 8px 10px;
  }

  .btn {
    font: inherit;
    padding: 10px 30px;
    border-radius: 3px;
    text-align: center;
    width: 100%;
    color: green;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease-in;
  }

  .btn:hover {
    background-color: rgba(0, 0, 0, 0.4);
  } */
`;

export default ModalWrapper;
