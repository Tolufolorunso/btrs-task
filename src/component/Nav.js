import NavWrapper from './nav.styled';
import DefualtImage from '../assets/images/default.png';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { username } = useSelector((store) => store.chat);

  return (
    <NavWrapper>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <h2>BTRS</h2>
          </div>
          <div className="profile-area">
            <div className="avater">
              <img src={DefualtImage} alt="name" />
            </div>
            <div className="profile-name">{username}</div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
