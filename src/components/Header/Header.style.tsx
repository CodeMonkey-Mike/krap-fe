import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  width: 100%;
  @media (min-width: 1400px) {
    padding: 0 40px;
  }
`;

export default HeaderWrapper;
