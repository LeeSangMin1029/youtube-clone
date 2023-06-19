import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  border-radius: 8px;
`;

export const Content = styled.div`
  user-select: none;
  padding: 16px 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
