import ModalWrapper from './nameModal.styled';

const NameModal = ({ handleChange, username, handleAddUser }) => {
  return (
    <ModalWrapper>
      <h2>Enter Your Room Name</h2>
      <form onSubmit={handleAddUser}>
        <div className="formGroup">
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter room name"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <button className="btn" type="submit">
            Enter
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default NameModal;
