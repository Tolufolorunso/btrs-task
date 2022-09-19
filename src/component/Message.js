import DefualtImage from '../assets/images/default.png';

const Message = ({ userType, msg, username }) => {
  return (
    <li className={userType}>
      <div className="avatar">
        <img src={DefualtImage} draggable="false" alt={username} />
      </div>
      <div className="msg">{msg}</div>
    </li>
  );
};

export default Message;
