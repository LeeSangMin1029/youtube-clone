import styled from 'styled-components';

export const SVGWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 8px;
`;

export const LoginButton = styled.div`
  width: 100px;
  height: 36px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  color: #065fd4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  > svg {
    margin-right: 8px;
  }
`;
