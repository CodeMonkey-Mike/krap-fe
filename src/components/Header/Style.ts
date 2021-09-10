import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 40px;
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
  flex: 1;
`;

export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  > * {
    padding: 5px 10px;
  }
`;
