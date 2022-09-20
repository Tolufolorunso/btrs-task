import DefualtImage from '../assets/images/default.png';

const Message = ({ userType, msg, username }) => {
  console.log(username);
  return (
    <li className={userType}>
      <div className="avatar">
        <img src={DefualtImage} draggable="false" alt={username} />
      </div>
      <div className="msg">
        {msg}
        <span>{username}</span>
      </div>
    </li>
  );
};

export default Message;
