import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  min-height: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.3);
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo h2 {
    font-size: 2rem;
  }

  .profile-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .avater {
    width: 40px;
    height: 40px;
  }
  .avater img {
    width: 100%;
    display: inline-block;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default NavWrapper;
